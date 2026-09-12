"use client";

import { VERIFICATION_STORAGE_KEY } from "@/lib/verification";

export default function ResetVerificationLink() {
  return (
    <button
      type="button"
      onClick={() => {
        window.localStorage.removeItem(VERIFICATION_STORAGE_KEY);
        window.dispatchEvent(new Event("research-verification-reset"));
      }}
      className="text-left text-xs text-slate-400 underline-offset-2 transition hover:text-brand-700 hover:underline"
    >
      Reset researcher verification
    </button>
  );
}
