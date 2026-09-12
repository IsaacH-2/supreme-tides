import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cart | Supreme Tides",
};

export default function CartPage() {
  return (
    <>
      <PageHero
        eyebrow="Your Order"
        title="Cart"
        description="Review your items before checkout."
      />

      <section className="section">
        <div className="container-page">
          <div className="flex flex-col items-center rounded-2xl border border-dashed border-slate-200 py-24 text-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="text-brand-300"
            >
              <path
                d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.8h7.2a2 2 0 0 0 2-1.6L20 8H6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9.5" cy="21" r="1.4" fill="currentColor" />
              <circle cx="17.5" cy="21" r="1.4" fill="currentColor" />
            </svg>
            <h2 className="mt-6 text-lg font-semibold text-slate-900">
              Your cart is empty
            </h2>
            <p className="mt-2 max-w-sm text-sm text-slate-500">
              Items you add to your cart will appear here.
            </p>
            <Link href="/shop" className="btn-primary mt-8">
              Browse Research Peptides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
