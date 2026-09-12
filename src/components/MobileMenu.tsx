"use client";

import Link from "next/link";

type NavLink = { href: string; label: string };

export default function MobileMenu({
  open,
  onClose,
  links,
  isActive,
}: {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  isActive: (href: string) => boolean;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-slate-900/30 transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`absolute right-0 top-0 h-full w-full max-w-xs transform bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <span className="text-sm font-semibold text-slate-900">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
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
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-4 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`rounded-lg px-3 py-3 text-sm font-medium transition hover:bg-brand-50 hover:text-brand-700 ${
                isActive(link.href) ? "text-brand-700" : "text-slate-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
