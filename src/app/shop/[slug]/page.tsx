import Link from "next/link";
import Button from "@/components/Button";
import ResearchUseNotice from "@/components/ResearchUseNotice";
import { getProductBySlug } from "@/lib/products";

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  const name = product?.name ?? "Research Peptide";
  const category = product?.category ?? "Lyophilized Peptide";
  const code = product?.code ?? params.slug.toUpperCase();
  const purity = product?.purity ?? "Specification on request";
  const sizes = product?.sizes ?? ["—"];
  const description =
    product?.description ??
    "Research-grade material supplied for in-vitro laboratory use.";

  return (
    <section className="section">
      <div className="container-page">
        <Link
          href="/shop"
          className="text-sm font-medium text-brand-700 hover:text-brand-800"
        >
          &larr; Back to Research Peptides
        </Link>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <div className="relative aspect-square w-full rounded-3xl bg-gradient-to-br from-brand-100 to-brand-50">
            <span className="badge absolute left-4 top-4">
              Research Use Only
            </span>
          </div>

          <div>
            <p className="eyebrow">{category}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              {name}
            </h1>
            <p className="mt-4 max-w-md text-base text-slate-500">
              {description}
            </p>

            <ResearchUseNotice className="mt-6 max-w-md">
              Not for human or veterinary use. For laboratory research use by
              qualified professionals only.
            </ResearchUseNotice>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/wholesale/request" variant="primary">
                Request Wholesale Pricing
              </Button>
              <Button href="/quality" variant="secondary">
                Request COA
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-slate-100 pt-6 text-sm">
              <div>
                <dt className="text-slate-400">Product Code</dt>
                <dd className="mt-1 font-medium text-slate-700">{code}</dd>
              </div>
              <div>
                <dt className="text-slate-400">Category</dt>
                <dd className="mt-1 font-medium text-slate-700">
                  {category}
                </dd>
              </div>
              <div>
                <dt className="text-slate-400">Purity / Specification</dt>
                <dd className="mt-1 font-medium text-slate-700">{purity}</dd>
              </div>
              <div>
                <dt className="text-slate-400">Available Sizes</dt>
                <dd className="mt-1 font-medium text-slate-700">
                  {sizes.join(", ")}
                </dd>
              </div>
              <div>
                <dt className="text-slate-400">Certificate of Analysis</dt>
                <dd className="mt-1 font-medium text-slate-700">
                  Available on request
                </dd>
              </div>
              <div>
                <dt className="text-slate-400">Order Volume</dt>
                <dd className="mt-1 font-medium text-slate-700">
                  Wholesale quantities
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
