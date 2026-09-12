import Button from "./Button";
import ResearchUseNotice from "./ResearchUseNotice";
import MoleculeVisual from "./MoleculeVisual";

export default function Hero() {
  return (
    <section className="border-b border-slate-100 bg-brand-50/30">
      <div className="container-page grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="eyebrow">B2B Wholesale &middot; Laboratory Supply</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 md:text-5xl">
            Research-grade
            <br />
            compounds for
            <br />
            laboratory use.
          </h1>
          <p className="mt-6 max-w-md text-base text-slate-500">
            Supreme Tides provides qualified research institutions and
            laboratories with high-purity research materials at wholesale
            volume.
          </p>

          <ResearchUseNotice className="mt-6 max-w-md">
            Not for human or veterinary use. Not a drug, food, supplement, or
            cosmetic.
          </ResearchUseNotice>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/shop" variant="primary">
              Browse Research Peptides
            </Button>
            <Button href="/wholesale/request" variant="secondary">
              Request Wholesale Pricing
            </Button>
          </div>
        </div>

        <MoleculeVisual />
      </div>
    </section>
  );
}
