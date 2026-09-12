import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label="Supreme Tides home"
    >
      <Image
        src="/logo.png"
        alt="Supreme Tides"
        width={64}
        height={52}
        priority
        className="h-11 w-auto"
      />
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
