import Link from "next/link";
import ProductCard from "@/components/ProductCard";

const FEATURED_PRODUCTS = [
  { slug: "wave-tee-bulk-case", name: "Wave Tee — Bulk Case", category: "Apparel" },
  { slug: "tide-tote-bag", name: "Tide Tote Bag", category: "Accessories" },
  { slug: "coastal-cap-pack", name: "Coastal Cap Pack", category: "Headwear" },
  { slug: "harbor-hoodie-case", name: "Harbor Hoodie — Case", category: "Apparel" },
];

const VALUE_PROPS = [
  {
    title: "Bulk Pricing",
    description: "Tiered discounts that scale with your order volume.",
  },
  {
    title: "Reliable Fulfillment",
    description: "Consistent lead times so your shelves stay stocked.",
  },
  {
    title: "Dedicated Support",
    description: "A wholesale team that knows your account and your goals.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-slate-100 bg-brand-50/40">
        <div className="container-page grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow">Wholesale &middot; Since day one</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Quality goods,
              <br />
              wholesale prices.
            </h1>
            <p className="mt-5 max-w-md text-base text-slate-500">
              Supreme Tides supplies retailers with dependable, well-made
              products backed by responsive service and simple ordering.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/shop" className="btn-primary">
                Shop the Catalog
              </Link>
              <Link href="/wholesale" className="btn-secondary">
                Wholesale Inquiries
              </Link>
            </div>
          </div>
          <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-brand-700 via-brand-500 to-brand-200" />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-3">
            {VALUE_PROPS.map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-slate-100 bg-slate-50/60">
        <div className="container-page">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Catalog</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                Featured Products
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden text-sm font-medium text-brand-700 hover:text-brand-800 sm:block"
            >
              View all &rarr;
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
