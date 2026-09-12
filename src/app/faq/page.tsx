import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import ResearchUseNotice from "@/components/ResearchUseNotice";

export const metadata: Metadata = {
  title: "FAQ | Supreme Tides",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common Questions"
        description="Answers to the questions we hear most from research buyers. For anything else, reach out directly."
      />

      <section className="section">
        <div className="container-page max-w-3xl">
          <FAQAccordion />

          <ResearchUseNotice className="mt-10">
            This page does not provide medical, therapeutic, or dosing
            guidance of any kind.
          </ResearchUseNotice>
        </div>
      </section>
    </>
  );
}
