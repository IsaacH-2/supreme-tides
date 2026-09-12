import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import ResearchUseNotice from "@/components/ResearchUseNotice";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Research Peptides | Supreme Tides",
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Catalog"
        title="Research Peptides"
        description="Browse our wholesale catalog of research-grade peptides. Volume pricing and documentation available for qualified research accounts."
      />

      <div className="container-page pt-10">
        <ResearchUseNotice>
          Products listed here are intended for laboratory research purposes
          only and are not for human or veterinary use.
        </ResearchUseNotice>
      </div>

      <section className="section">
        <div className="container-page">
          <ProductGrid products={PRODUCTS} />
        </div>
      </section>
    </>
  );
}
