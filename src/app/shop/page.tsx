import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Shop | Supreme Tides",
};

const PRODUCTS = [
  { slug: "wave-tee-bulk-case", name: "Wave Tee — Bulk Case", category: "Apparel" },
  { slug: "tide-tote-bag", name: "Tide Tote Bag", category: "Accessories" },
  { slug: "coastal-cap-pack", name: "Coastal Cap Pack", category: "Headwear" },
  { slug: "harbor-hoodie-case", name: "Harbor Hoodie — Case", category: "Apparel" },
  { slug: "reef-crewneck-case", name: "Reef Crewneck — Case", category: "Apparel" },
  { slug: "current-crossbody", name: "Current Crossbody Bag", category: "Accessories" },
  { slug: "shoreline-bucket-hat", name: "Shoreline Bucket Hat", category: "Headwear" },
  { slug: "swell-socks-pack", name: "Swell Socks — 6 Pack", category: "Accessories" },
];

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Catalog"
        title="Shop the Collection"
        description="Browse our full range of wholesale-ready product. Case quantities and bulk pricing available on every item."
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
