import Link from "next/link";

function slugToName(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const productName = slugToName(params.slug);

  return (
    <section className="section">
      <div className="container-page">
        <Link
          href="/shop"
          className="text-sm font-medium text-brand-700 hover:text-brand-800"
        >
          &larr; Back to Shop
        </Link>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <div className="aspect-square w-full rounded-3xl bg-gradient-to-br from-brand-100 to-brand-50" />

          <div>
            <p className="eyebrow">Wholesale Product</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              {productName}
            </h1>
            <p className="mt-4 max-w-md text-base text-slate-500">
              Product details, materials, case quantities, and wholesale
              pricing tiers will be shown here.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <span className="btn-primary pointer-events-none opacity-60">
                Request Pricing
              </span>
              <Link href="/wholesale" className="btn-secondary">
                Wholesale Info
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-slate-100 pt-6 text-sm">
              <div>
                <dt className="text-slate-400">SKU</dt>
                <dd className="mt-1 font-medium text-slate-700">
                  {params.slug.toUpperCase()}
                </dd>
              </div>
              <div>
                <dt className="text-slate-400">Case Size</dt>
                <dd className="mt-1 font-medium text-slate-700">—</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
