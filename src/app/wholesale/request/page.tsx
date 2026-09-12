import type { Metadata } from "next";
import WholesaleQuoteForm from "@/components/WholesaleQuoteForm";

export const metadata: Metadata = {
  title: "Request Wholesale Pricing | Supreme Tides",
};

export default function WholesaleRequestPage() {
  return (
    <>
      <section className="border-b border-slate-100 bg-brand-50/30">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow">Wholesale &middot; B2B Research Supply</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Request Wholesale Pricing
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-500">
            Tell us about your research supply requirements and estimated
            order volume. Our wholesale team will review your inquiry and
            follow up with pricing and availability.
          </p>
          <span className="mt-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-500">
            For qualified professional and institutional research buyers only.
          </span>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <WholesaleQuoteForm />
        </div>
      </section>
    </>
  );
}
