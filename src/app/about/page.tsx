import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ResearchUseNotice from "@/components/ResearchUseNotice";
import MoleculeVisual from "@/components/MoleculeVisual";

export const metadata: Metadata = {
  title: "About | Supreme Tides",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Story"
        description="Supreme Tides was built to give research institutions and laboratories a dependable wholesale partner for research-use-only materials."
      />

      <section className="section">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <div className="space-y-4 text-slate-600">
            <p>
              Company history and mission content goes here. This section
              will introduce the Supreme Tides story, values, and commitment
              to quality and compliance.
            </p>
            <p>
              A second paragraph can cover sourcing standards, testing
              partners, or company milestones as the content is finalized.
            </p>
            <ResearchUseNotice>
              Supreme Tides serves laboratories and qualified research
              organizations exclusively.
            </ResearchUseNotice>
          </div>
          <MoleculeVisual />
        </div>
      </section>
    </>
  );
}
