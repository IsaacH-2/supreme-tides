// Shared shape, validation, and sanitization for wholesale quote requests.
// Used by both the client form (for fast inline feedback) and the API
// route (as the source of truth — client-side checks are UX only). Keep
// this module free of Node-only imports (e.g. node:crypto) since it is
// imported from "use client" components.

export type WholesaleQuotePayload = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  compoundsOfInterest: string;
  estimatedVolume: string;
  whiteLabelInterest: string;
  preferredPaymentMethod: string;
  hearAboutUs: string;
  additionalNotes: string;
  consentGiven: boolean;
  // Anti-spam fields — not real form data.
  website: string; // honeypot; must stay empty
  formRenderedAt: number; // client timestamp (ms) captured on mount
};

export const ESTIMATED_VOLUME_OPTIONS = [
  "100–250 units",
  "250–500 units",
  "500–1,000 units",
  "1,000+ units — volume pricing",
  "Custom production / volume requirement",
];

export const WHITE_LABEL_OPTIONS = [
  "No — standard labeling is fine",
  "Yes — interested in white-label options",
  "Not sure — send me more information",
];

export const PAYMENT_METHOD_OPTIONS = [
  "No preference",
  "Wire transfer",
  "ACH bank transfer",
  "Credit card",
  "Other",
];

export const HEAR_ABOUT_US_OPTIONS = [
  "Google / Search Engine",
  "Referral",
  "Existing Customer",
  "Social Media",
  "Industry Event",
  "Research Organization",
  "Other",
];

// Toggle this off if SMS outreach is not actually in use — it only
// changes the consent copy shown to the user, not any behavior.
export const CONSENT_INCLUDES_SMS = true;

export const CONSENT_TEXT = CONSENT_INCLUDES_SMS
  ? "I agree to be contacted by Supreme Tides by email, phone, and SMS regarding this inquiry. Message and data rates may apply; consent is not a condition of purchase and you may opt out at any time."
  : "I agree to be contacted by Supreme Tides by email and phone regarding this inquiry. Consent is not a condition of purchase and you may opt out at any time.";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ValidationErrors = Partial<Record<keyof WholesaleQuotePayload, string>>;

export function validateWholesaleQuote(
  payload: Partial<WholesaleQuotePayload>
): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!payload.firstName?.trim()) errors.firstName = "First name is required.";
  if (!payload.lastName?.trim()) errors.lastName = "Last name is required.";
  if (!payload.companyName?.trim())
    errors.companyName = "Company / business name is required.";

  if (!payload.email?.trim()) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_PATTERN.test(payload.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!payload.compoundsOfInterest?.trim())
    errors.compoundsOfInterest = "Tell us what you're interested in.";

  if (!payload.estimatedVolume?.trim())
    errors.estimatedVolume = "Select an estimated monthly volume.";

  return errors;
}

const CONTROL_CHAR_PATTERN = new RegExp(
  "[\\u0000-\\u0008\\u000B\\u000C\\u000E-\\u001F\\u007F]",
  "g"
);

// Strips HTML/control characters and caps length. Not a substitute for
// parameterized queries (Prisma already handles that) — this guards
// against stored payloads that could misbehave if ever rendered as HTML
// in an admin view, and against unbounded input sizes.
export function sanitizeText(value: string | undefined | null, maxLength = 4000) {
  if (!value) return "";
  return value
    .replace(/<[^>]*>/g, "")
    .replace(CONTROL_CHAR_PATTERN, "")
    .trim()
    .slice(0, maxLength);
}
