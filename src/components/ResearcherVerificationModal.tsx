"use client";

import { useEffect, useState } from "react";
import {
  VERIFICATION_STORAGE_KEY,
  type VerificationStatus,
} from "@/lib/verification";

const AFFIRMATIONS = [
  "You are 21 years of age or older and a qualified professional buyer.",
  "Materials purchased through this website will be used solely for laboratory research and not for human or veterinary administration.",
  "You will handle all materials in compliance with applicable local, state, and federal law.",
];

export default function ResearcherVerificationModal() {
  const [status, setStatus] = useState<VerificationStatus | "loading" | "unset">(
    "loading"
  );

  useEffect(() => {
    const stored = window.localStorage.getItem(VERIFICATION_STORAGE_KEY);
    setStatus(stored === "confirmed" || stored === "declined" ? stored : "unset");
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      status === "unset" || status === "declined" ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [status]);

  useEffect(() => {
    function handleReset() {
      setStatus("unset");
    }
    window.addEventListener("research-verification-reset", handleReset);
    return () =>
      window.removeEventListener("research-verification-reset", handleReset);
  }, []);

  if (status === "loading" || status === "confirmed") {
    return null;
  }

  function confirm() {
    window.localStorage.setItem(VERIFICATION_STORAGE_KEY, "confirmed");
    setStatus("confirmed");
  }

  function decline() {
    window.localStorage.setItem(VERIFICATION_STORAGE_KEY, "declined");
    setStatus("declined");
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 p-4">
      <div className="w-full max-w-lg rounded-2xl border border-slate-100 bg-white p-8 shadow-xl">
        {status === "declined" ? (
          <>
            <p className="eyebrow">Access Restricted</p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">
              You indicated you do not qualify.
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Access to Supreme Tides is limited to qualified professional
              research buyers. This response does not constitute a legal
              determination of eligibility — it reflects only the answer you
              selected.
            </p>
            <button
              type="button"
              onClick={() => setStatus("unset")}
              className="btn-secondary mt-6 w-full"
            >
              Review the statement again
            </button>
          </>
        ) : (
          <>
            <p className="eyebrow">Researcher Verification</p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">
              Confirm you&apos;re a qualified researcher.
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Supreme Tides is a B2B laboratory research supplier. Products
              are intended solely for in-vitro laboratory research and are
              not for human or veterinary use.
            </p>

            <p className="mt-5 text-sm font-medium text-slate-700">
              By continuing you affirm that:
            </p>
            <ul className="mt-3 space-y-2.5">
              {AFFIRMATIONS.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-slate-600">
                  <span className="mt-0.5 shrink-0 text-brand-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={decline}
                className="btn-secondary flex-1"
              >
                I do not qualify
              </button>
              <button
                type="button"
                onClick={confirm}
                className="btn-primary flex-1"
              >
                I confirm — enter site
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-slate-400">
              This is a self-attestation and is not a legal verification of
              eligibility.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
