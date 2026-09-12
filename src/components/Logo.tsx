import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5"
      aria-label="Supreme Tides home"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-700 text-sm font-bold text-white">
        S
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-tight text-slate-900">
          Supreme Tides
        </span>
        <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
          Research Use Only
        </span>
      </span>
    </Link>
  );
}
