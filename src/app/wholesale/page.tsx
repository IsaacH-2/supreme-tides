import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Wholesale | Supreme Tides",
};

const TIERS = [
  { name: "Starter", detail: "For new retailers placing their first order." },
  { name: "Growth", detail: "For established stores ordering regularly." },
  { name: "Enterprise", detail: "For chains and distributors at scale." },
];

export default function WholesalePage() {
  return (
    <>
      <PageHero
        eyebrow="Wholesale"
        title="Partner With Supreme Tides"
        description="Apply for a wholesale account to access bulk pricing, case-pack ordering, and a dedicated account manager."
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {TIERS.map((tier) => (
              <div key={tier.name} className="card">
                <h3 className="text-base font-semibold text-slate-900">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{tier.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start gap-4 rounded-2xl border border-slate-100 bg-brand-50/40 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Ready to apply?
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Reach out and our wholesale team will follow up within one
                business day.
              </p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
