import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About | Supreme Tides",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Story"
        description="Supreme Tides was built to give retailers a dependable wholesale partner — quality product, fair pricing, and straightforward service."
      />

      <section className="section">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <div className="space-y-4 text-slate-600">
            <p>
              Company history and mission content goes here. This section
              will introduce the Supreme Tides story, values, and what sets
              the brand apart.
            </p>
            <p>
              A second paragraph can cover the team, sourcing philosophy, or
              milestones as the content is finalized.
            </p>
          </div>
          <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-brand-100 to-brand-50" />
        </div>
      </section>
    </>
  );
}
