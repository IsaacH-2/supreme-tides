import Link from "next/link";

export default function AccountIcon() {
  return (
    <Link
      href="/contact"
      aria-label="Business account login"
      title="Business Account Login"
      className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M4.5 20c1.6-3.4 4.5-5.2 7.5-5.2s5.9 1.8 7.5 5.2"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
