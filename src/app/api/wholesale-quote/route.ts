import { randomBytes } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { checkRateLimit } from "@/lib/rateLimit";
import { sendWholesaleInquiryNotification } from "@/lib/email";
import {
  sanitizeText,
  validateWholesaleQuote,
  type WholesaleQuotePayload,
} from "@/lib/wholesaleQuote";

export const runtime = "nodejs";

const GENERIC_ERROR = {
  error:
    "Something went wrong while submitting your inquiry. Please try again.",
};

// Bots that fill the honeypot or submit implausibly fast get a fake
// success so we don't tip off what's being checked — but nothing is
// persisted or emailed.
const MIN_HUMAN_SUBMIT_MS = 3000;

function generateReferenceId() {
  const suffix = randomBytes(4).toString("hex").toUpperCase();
  return `ST-${Date.now().toString(36).toUpperCase()}-${suffix}`;
}

function getClientIdentifier(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
}

export async function POST(request: NextRequest) {
  const clientId = getClientIdentifier(request);

  const rateLimit = checkRateLimit(clientId);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } }
    );
  }

  let body: Partial<WholesaleQuotePayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(GENERIC_ERROR, { status: 400 });
  }

  // Honeypot: a real user never fills a field hidden via CSS/aria.
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ referenceId: generateReferenceId() }, { status: 200 });
  }

  // Timing trap: legitimate users take at least a few seconds to fill
  // this out.
  if (
    typeof body.formRenderedAt === "number" &&
    Date.now() - body.formRenderedAt < MIN_HUMAN_SUBMIT_MS
  ) {
    return NextResponse.json({ referenceId: generateReferenceId() }, { status: 200 });
  }

  const errors = validateWholesaleQuote(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const consentGiven = body.consentGiven === true;

  try {
    const inquiry = await prisma.wholesaleInquiry.create({
      data: {
        referenceId: generateReferenceId(),
        firstName: sanitizeText(body.firstName, 200),
        lastName: sanitizeText(body.lastName, 200),
        companyName: sanitizeText(body.companyName, 300),
        email: sanitizeText(body.email, 300).toLowerCase(),
        phone: sanitizeText(body.phone, 60) || null,
        compoundsOfInterest: sanitizeText(body.compoundsOfInterest, 4000),
        estimatedVolume: sanitizeText(body.estimatedVolume, 200),
        whiteLabelInterest: sanitizeText(body.whiteLabelInterest, 200) || null,
        preferredPaymentMethod:
          sanitizeText(body.preferredPaymentMethod, 200) || null,
        hearAboutUs: sanitizeText(body.hearAboutUs, 200) || null,
        additionalNotes: sanitizeText(body.additionalNotes, 4000) || null,
        consentGiven,
        consentTimestamp: consentGiven ? new Date() : null,
        status: "new",
        submittedIp: clientId,
      },
    });

    try {
      await sendWholesaleInquiryNotification(inquiry);
    } catch (emailError) {
      console.error(
        `[wholesale-quote] Failed to send notification for ${inquiry.referenceId}:`,
        emailError
      );
    }

    return NextResponse.json({ referenceId: inquiry.referenceId }, { status: 200 });
  } catch (error) {
    console.error("[wholesale-quote] Failed to save inquiry:", error);
    return NextResponse.json(GENERIC_ERROR, { status: 500 });
  }
}
