import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QualityCard from "@/components/QualityCard";
import COACard from "@/components/COACard";
import ResearchUseNotice from "@/components/ResearchUseNotice";
import Button from "@/components/Button";
import { QUALITY_POINTS } from "@/lib/company";

export const metadata: Metadata = {
  title: "Quality & Documentation | Supreme Tides",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="Documentation you can follow."
        description="Every wholesale-eligible product can be paired with specification and analytical documentation, where applicable, for your lab's internal review."
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-3">
            {QUALITY_POINTS.map((item) => (
              <QualityCard key={item.number} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-slate-100 bg-slate-50/60">
        <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">Sample Certificate</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              What a Certificate of Analysis includes.
            </h2>
            <p className="mt-4 max-w-md text-sm text-slate-500">
              Certificates of Analysis and specification sheets can confirm
              identity, purity, and testing method at the lot level for
              qualified orders.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Request a COA
              </Button>
              <Button href="/shop" variant="secondary">
                Browse Products
              </Button>
            </div>
          </div>
          <COACard />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <ResearchUseNotice>
            Documentation is provided to support laboratory research and
            internal compliance review only. It does not authorize or imply
            any human or veterinary use.
          </ResearchUseNotice>
        </div>
      </section>
    </>
  );
}
