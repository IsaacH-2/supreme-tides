import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-slate-900"
      aria-label="Supreme Tides home"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="16" className="fill-brand-700" />
        <path
          d="M5 13c2-2.5 4-2.5 6 0s4 2.5 6 0 4-2.5 6 0"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M5 18c2-2.5 4-2.5 6 0s4 2.5 6 0 4-2.5 6 0"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M5 23c2-2.5 4-2.5 6 0s4 2.5 6 0 4-2.5 6 0"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
          fill="none"
          opacity="0.3"
        />
      </svg>
      <span className="text-lg font-semibold tracking-tight">
        Supreme Tides
      </span>
    </Link>
  );
}
