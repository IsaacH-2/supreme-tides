import Hero from "@/components/Hero";
import StatCard from "@/components/StatCard";
import QualityCard from "@/components/QualityCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import SpecificationTable from "@/components/SpecificationTable";
import ProductGrid from "@/components/ProductGrid";
import COACard from "@/components/COACard";
import WholesaleCTA from "@/components/WholesaleCTA";
import FAQAccordion from "@/components/FAQAccordion";
import Button from "@/components/Button";
import { STATS, QUALITY_POINTS } from "@/lib/company";
import { PRODUCTS } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust / quality bar */}
      <section className="section !pb-0">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Supreme Tides */}
      <section className="section">
        <div className="container-page">
          <p className="eyebrow">Why Supreme Tides</p>
          <h2 className="mt-2 max-w-xl text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Built for serious research buyers.
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-500">
            Supreme Tides focuses exclusively on B2B research supply —
            wholesale volume, documented materials, and consistent service
            for laboratories and institutions.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {QUALITY_POINTS.map((item) => (
              <QualityCard key={item.number} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Research process */}
      <section className="section border-t border-slate-100 bg-slate-50/60">
        <div className="container-page">
          <p className="eyebrow">Research Process</p>
          <h2 className="mt-2 max-w-xl text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            From source to shipment.
          </h2>
          <div className="mt-10">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      {/* Wholesale specifications */}
      <section className="section bg-brand-50/30">
        <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">Wholesale Specifications</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Wholesale research supply, specified to your requirements.
            </h2>
            <p className="mt-4 max-w-md text-sm text-slate-500">
              Every wholesale account is scoped to the products, volumes, and
              documentation your lab requires.
            </p>
          </div>
          <SpecificationTable />
        </div>
      </section>

      {/* Featured products */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Catalog</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Featured research compounds.
              </h2>
            </div>
            <Button href="/shop" variant="secondary">
              View All Products
            </Button>
          </div>

          <div className="mt-10">
            <ProductGrid products={PRODUCTS.slice(0, 3)} />
          </div>
        </div>
      </section>

      {/* Quality documentation */}
      <section className="section border-t border-slate-100 bg-slate-50/60">
        <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">Quality Documentation</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Documentation you can follow.
            </h2>
            <p className="mt-4 max-w-md text-sm text-slate-500">
              Every wholesale-eligible product can be paired with
              specification and analytical documentation, where applicable,
              for your internal review.
            </p>
          </div>
          <COACard />
        </div>
      </section>

      {/* Wholesale program CTA */}
      <WholesaleCTA />

      {/* FAQ */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Common questions.
            </h2>
            <p className="mt-4 max-w-sm text-sm text-slate-500">
              Answers to the questions we hear most from research buyers. For
              anything else, reach out directly.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section border-t border-slate-100 bg-brand-50/40">
        <div className="container-page text-center">
          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Need wholesale pricing?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-slate-500">
            Tell us what research materials and quantities you&apos;re
            looking for.
          </p>
          <Button href="/wholesale/request" variant="primary" className="mt-8">
            Request a Wholesale Quote
          </Button>
        </div>
      </section>
    </>
  );
}
