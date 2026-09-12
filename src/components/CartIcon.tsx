import Link from "next/link";

export default function CartIcon() {
  return (
    <Link
      href="/cart"
      aria-label="View cart"
      className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.8h7.2a2 2 0 0 0 2-1.6L20 8H6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9.5" cy="21" r="1.4" fill="currentColor" />
        <circle cx="17.5" cy="21" r="1.4" fill="currentColor" />
      </svg>
    </Link>
  );
}
