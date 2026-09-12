import Link from "next/link";
import Logo from "./Logo";

const POLICY_LINKS = [
  { href: "/contact", label: "Shipping Policy" },
  { href: "/contact", label: "Returns Policy" },
  { href: "/contact", label: "Privacy Policy" },
  { href: "/contact", label: "Terms of Service" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm text-slate-500">
            Wholesale goods, made to move. Supplying retailers with quality
            product and reliable service.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Company</h3>
          <ul className="mt-4 space-y-2.5">
            {COMPANY_LINKS.map((link) => (
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

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Policies</h3>
          <ul className="mt-4 space-y-2.5">
            {POLICY_LINKS.map((link) => (
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
      </div>

      <div className="border-t border-slate-100">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Supreme Tides. All rights reserved.</p>
          <p>Wholesale inquiries welcome.</p>
        </div>
      </div>
    </footer>
  );
}
