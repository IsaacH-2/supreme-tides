import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({
  slug,
  name,
  code,
  category,
  purity,
  sizes,
}: Product) {
  return (
    <div className="card flex flex-col">
      <div className="relative aspect-square w-full rounded-xl bg-gradient-to-br from-brand-100 to-brand-50">
        <span className="badge absolute left-3 top-3">Research Use Only</span>
      </div>

      <p className="eyebrow mt-5">{category}</p>
      <h3 className="mt-1 text-base font-semibold text-slate-900">{name}</h3>
      <p className="mt-1 text-xs font-medium tracking-wide text-slate-400">
        {code}
      </p>

      <dl className="mt-4 space-y-1.5 text-xs text-slate-500">
        <div className="flex justify-between">
          <dt>Purity</dt>
          <dd className="font-medium text-slate-700">{purity}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Available sizes</dt>
          <dd className="font-medium text-slate-700">{sizes.join(", ")}</dd>
        </div>
      </dl>

      <div className="mt-5 flex gap-3">
        <Link
          href={`/shop/${slug}`}
          className="btn-secondary flex-1 !px-4 !py-2.5 text-xs"
        >
          View Details
        </Link>
        <Link
          href="/wholesale/request"
          className="btn-primary flex-1 !px-4 !py-2.5 text-xs"
        >
          Request Quote
        </Link>
      </div>
    </div>
  );
}
