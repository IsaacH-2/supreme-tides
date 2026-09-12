export default function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-card sm:text-left">
      <p className="text-2xl font-semibold tracking-tight text-brand-700 md:text-3xl">
        {value}
      </p>
      <p className="mt-1.5 text-sm text-slate-500">{label}</p>
    </div>
  );
}
