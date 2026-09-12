import { SPECIFICATIONS } from "@/lib/company";

export default function SpecificationTable({
  specifications = SPECIFICATIONS,
}: {
  specifications?: typeof SPECIFICATIONS;
}) {
  return (
    <dl className="divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white shadow-card">
      {specifications.map((spec) => (
        <div
          key={spec.label}
          className="grid grid-cols-2 gap-4 px-6 py-5 sm:px-8"
        >
          <dt className="text-sm font-medium text-slate-500">{spec.label}</dt>
          <dd className="text-sm font-semibold text-slate-900">
            {spec.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
