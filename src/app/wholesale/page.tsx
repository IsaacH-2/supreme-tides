import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SpecificationTable from "@/components/SpecificationTable";
import ResearchUseNotice from "@/components/ResearchUseNotice";
import WholesaleCTA from "@/components/WholesaleCTA";

export const metadata: Metadata = {
  title: "Wholesale | Supreme Tides",
};

const TIERS = [
  { name: "Starter Lab", detail: "For new research accounts placing their first order." },
  { name: "Institutional", detail: "For universities and labs ordering on a recurring basis." },
  { name: "Enterprise Research", detail: "For distributors and large-scale research programs." },
];

const REQUIREMENTS = [
  "Business or institutional research account",
  "Valid research-use justification on file",
  "Signed research-use-only acknowledgment",
];

export default function WholesalePage() {
  return (
    <>
      <PageHero
        eyebrow="Wholesale"
        title="Wholesale Research Accounts"
        description="Apply for a wholesale research account to access volume pricing, bulk packaging, and a dedicated account manager."
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

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Account Requirements
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-500">
                {REQUIREMENTS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand-600">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ResearchUseNotice className="self-start">
              Wholesale accounts are issued to qualified laboratories,
              research institutions, and businesses. Products are not
              intended for human or veterinary use, or for administration of
              any kind.
            </ResearchUseNotice>
          </div>
        </div>
      </section>

      <section className="section border-t border-slate-100 bg-brand-50/30">
        <div className="container-page">
          <p className="eyebrow">Specifications</p>
          <h2 className="mt-2 max-w-lg text-3xl font-semibold tracking-tight text-slate-900">
            What a wholesale account includes.
          </h2>
          <div className="mt-10 max-w-2xl">
            <SpecificationTable />
          </div>
        </div>
      </section>

      <WholesaleCTA />
    </>
  );
}
