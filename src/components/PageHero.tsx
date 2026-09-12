export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-slate-100 bg-brand-50/40">
      <div className="container-page py-16 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base text-slate-500">
          {description}
        </p>
      </div>
    </section>
  );
}
