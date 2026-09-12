import Link from "next/link";
import Logo from "./Logo";
import ResetVerificationLink from "./ResetVerificationLink";
import { COMPANY } from "@/lib/company";

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Products",
    links: [
      { href: "/shop", label: "Research Peptides" },
      { href: "/shop", label: "All Products" },
      { href: "/wholesale", label: "Wholesale" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/quality", label: "Quality" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/quality", label: "Documentation" },
      { href: "/quality", label: "COA" },
      { href: "/faq", label: "Research Resources" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/contact", label: "Privacy Policy" },
      { href: "/contact", label: "Terms" },
      { href: "/contact", label: "Shipping Policy" },
      { href: "/contact", label: "Research Use Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container-page grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
        <div className="space-y-3 md:pr-6">
          <Logo />
          <p className="max-w-xs text-sm text-slate-500">
            B2B supplier of research-use-only laboratory materials.
          </p>
        </div>

        {COLUMNS.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold text-slate-900">
              {column.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition hover:text-brand-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p className="font-semibold uppercase tracking-wide text-slate-500">
            For laboratory research use only. Not for human or veterinary use.
          </p>
          <ResetVerificationLink />
        </div>
      </div>
    </footer>
  );
}
