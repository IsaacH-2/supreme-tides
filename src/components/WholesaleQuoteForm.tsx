"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import {
  CONSENT_TEXT,
  ESTIMATED_VOLUME_OPTIONS,
  HEAR_ABOUT_US_OPTIONS,
  PAYMENT_METHOD_OPTIONS,
  WHITE_LABEL_OPTIONS,
  validateWholesaleQuote,
  type ValidationErrors,
  type WholesaleQuotePayload,
} from "@/lib/wholesaleQuote";

type FormState = Omit<WholesaleQuotePayload, "formRenderedAt">;

const INITIAL_STATE: FormState = {
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  phone: "",
  compoundsOfInterest: "",
  estimatedVolume: "",
  whiteLabelInterest: "",
  preferredPaymentMethod: "",
  hearAboutUs: "",
  additionalNotes: "",
  consentGiven: false,
  website: "",
};

const inputClass =
  "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";
const labelClass = "text-sm font-medium text-slate-700";
const errorClass = "mt-1.5 text-xs font-medium text-red-600";

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelClass}>
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </label>
      {children}
      {error && <p className={errorClass}>{error}</p>}
    </div>
  );
}

export default function WholesaleQuoteForm() {
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [referenceId, setReferenceId] = useState("");
  const [formRenderedAt] = useState(() => Date.now());

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const clientErrors = validateWholesaleQuote(values);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/wholesale-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, formRenderedAt }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        if (response.status === 400 && data?.errors) {
          setErrors(data.errors);
          setStatus("idle");
          return;
        }
        setStatus("error");
        return;
      }

      setReferenceId(data?.referenceId ?? "");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-[960px] rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-card md:p-14">
        <span className="badge">Inquiry Submitted</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
          Wholesale inquiry received.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-slate-500">
          Thank you for contacting Supreme Tides. Your inquiry has been
          submitted and our wholesale team will review your request.
        </p>
        <p className="mt-6 text-sm font-medium text-slate-700">
          Reference number:{" "}
          <span className="font-semibold text-brand-700">{referenceId}</span>
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="secondary">
            Return Home
          </Button>
          <Button href="/shop" variant="primary">
            Browse Research Peptides
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[960px] rounded-[28px] border border-slate-200 bg-white p-6 shadow-card sm:p-10 md:p-12">
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="First Name" required error={errors.firstName}>
            <input
              type="text"
              className={inputClass}
              value={values.firstName}
              onChange={(e) => update("firstName", e.target.value)}
            />
          </Field>
          <Field label="Last Name" required error={errors.lastName}>
            <input
              type="text"
              className={inputClass}
              value={values.lastName}
              onChange={(e) => update("lastName", e.target.value)}
            />
          </Field>
        </div>

        <div className="mt-6">
          <Field
            label="Company / Business Name"
            required
            error={errors.companyName}
          >
            <input
              type="text"
              className={inputClass}
              value={values.companyName}
              onChange={(e) => update("companyName", e.target.value)}
            />
          </Field>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Field label="Email Address" required error={errors.email}>
            <input
              type="email"
              className={inputClass}
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </Field>
          <Field label="Phone / SMS" error={errors.phone}>
            <input
              type="tel"
              placeholder="Preferred contact"
              className={inputClass}
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </Field>
        </div>

        <div className="mt-6">
          <Field
            label="Compounds of Interest"
            required
            error={errors.compoundsOfInterest}
          >
            <textarea
              rows={4}
              placeholder="List the compounds, quantities, or research materials you're interested in. If you're unsure, describe what you're looking for."
              className={inputClass}
              value={values.compoundsOfInterest}
              onChange={(e) => update("compoundsOfInterest", e.target.value)}
            />
          </Field>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Field
            label="Estimated Monthly Volume"
            required
            error={errors.estimatedVolume}
          >
            <select
              className={inputClass}
              value={values.estimatedVolume}
              onChange={(e) => update("estimatedVolume", e.target.value)}
            >
              <option value="">Select volume</option>
              {ESTIMATED_VOLUME_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="White-Label Interest?">
            <select
              className={inputClass}
              value={values.whiteLabelInterest}
              onChange={(e) => update("whiteLabelInterest", e.target.value)}
            >
              <option value="">Select an option</option>
              {WHITE_LABEL_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="mt-6">
          <Field label="Preferred Payment Method">
            <select
              className={inputClass}
              value={values.preferredPaymentMethod}
              onChange={(e) =>
                update("preferredPaymentMethod", e.target.value)
              }
            >
              <option value="">Select an option</option>
              {PAYMENT_METHOD_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <p className="mt-1.5 text-xs text-slate-400">
            This is only a preference field. We do not collect banking or
            card details through this form.
          </p>
        </div>

        <div className="mt-6">
          <Field label="How did you hear about us?">
            <select
              className={inputClass}
              value={values.hearAboutUs}
              onChange={(e) => update("hearAboutUs", e.target.value)}
            >
              <option value="">Optional</option>
              {HEAR_ABOUT_US_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="mt-6">
          <Field label="Additional Notes">
            <textarea
              rows={4}
              placeholder="Optional"
              className={inputClass}
              value={values.additionalNotes}
              onChange={(e) => update("additionalNotes", e.target.value)}
            />
          </Field>
        </div>

        {/* Honeypot — hidden from sighted users and screen readers. */}
        <div
          className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(e) => update("website", e.target.value)}
          />
        </div>

        <label className="mt-8 flex items-start gap-3 text-sm text-slate-600">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-brand-700 focus:ring-brand-500"
            checked={values.consentGiven}
            onChange={(e) => update("consentGiven", e.target.checked)}
          />
          <span>{CONSENT_TEXT}</span>
        </label>

        {status === "error" && (
          <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            Something went wrong while submitting your inquiry. Please try
            again.
          </p>
        )}

        <div className="mt-8 flex flex-col gap-6 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Send Inquiry →"}
          </button>

          <p className="max-w-xs text-xs text-slate-400 sm:text-right">
            By submitting, you confirm that you are a qualified wholesale
            buyer. Products are supplied for laboratory research use only.
            Not for human or veterinary use.
          </p>
        </div>
      </form>
    </div>
  );
}
