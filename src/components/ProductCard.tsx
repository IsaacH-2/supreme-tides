import Link from "next/link";

export default function ProductCard({
  slug,
  name,
  category,
}: {
  slug: string;
  name: string;
  category: string;
}) {
  return (
    <Link href={`/shop/${slug}`} className="card group flex flex-col">
      <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-brand-100 to-brand-50" />
      <p className="eyebrow mt-5">{category}</p>
      <h3 className="mt-1 text-base font-semibold text-slate-900 group-hover:text-brand-700">
        {name}
      </h3>
      <span className="mt-3 text-sm font-medium text-brand-700">
        View details &rarr;
      </span>
    </Link>
  );
}
