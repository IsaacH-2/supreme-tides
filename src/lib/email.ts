import { Resend } from "resend";
import type { WholesaleInquiry } from "@prisma/client";

// If RESEND_API_KEY isn't configured, notifications are skipped (and
// logged) rather than throwing — a missing email integration should never
// block an inquiry from being saved.
export async function sendWholesaleInquiryNotification(
  inquiry: WholesaleInquiry
) {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.WHOLESALE_NOTIFY_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !notifyEmail || !fromEmail) {
    console.warn(
      `[wholesale-quote] Skipping email notification for ${inquiry.referenceId} — RESEND_API_KEY, WHOLESALE_NOTIFY_EMAIL, or RESEND_FROM_EMAIL is not configured.`
    );
    return;
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: fromEmail,
    to: notifyEmail,
    replyTo: inquiry.email,
    subject: `New wholesale inquiry — ${inquiry.referenceId}`,
    text: [
      `Reference: ${inquiry.referenceId}`,
      `Name: ${inquiry.firstName} ${inquiry.lastName}`,
      `Company: ${inquiry.companyName}`,
      `Email: ${inquiry.email}`,
      `Phone: ${inquiry.phone ?? "—"}`,
      "",
      `Estimated monthly volume: ${inquiry.estimatedVolume}`,
      `White-label interest: ${inquiry.whiteLabelInterest ?? "—"}`,
      `Preferred payment method: ${inquiry.preferredPaymentMethod ?? "—"}`,
      `Heard about us via: ${inquiry.hearAboutUs ?? "—"}`,
      "",
      "Compounds of interest:",
      inquiry.compoundsOfInterest,
      "",
      "Additional notes:",
      inquiry.additionalNotes ?? "—",
      "",
      `Contact consent given: ${inquiry.consentGiven ? "Yes" : "No"}`,
      `Consent timestamp: ${inquiry.consentTimestamp?.toISOString() ?? "—"}`,
    ].join("\n"),
  });
}
