"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import CartIcon from "./CartIcon";
import SearchIcon from "./SearchIcon";
import AccountIcon from "./AccountIcon";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { href: "/shop", label: "Research Peptides" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="container-page grid h-24 grid-cols-[auto_1fr_auto] items-center gap-4">
        <Logo />

        <nav className="hidden justify-self-center md:flex md:items-center md:gap-9">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:text-brand-700 ${
                isActive(link.href) ? "text-brand-700" : "text-slate-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-1">
          <SearchIcon />
          <AccountIcon />
          <CartIcon />
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-brand-50 hover:text-brand-700 md:hidden"
            onClick={() => setMenuOpen(true)}
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
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={NAV_LINKS}
        isActive={isActive}
      />
    </header>
  );
}
