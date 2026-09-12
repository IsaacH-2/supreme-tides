import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ResearchUseNotice from "@/components/ResearchUseNotice";

export const metadata: Metadata = {
  title: "Checkout | Supreme Tides",
};

export default function CheckoutPage() {
  return (
    <>
      <PageHero
        eyebrow="Checkout"
        title="Checkout"
        description="Review your order details before submitting your wholesale request."
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="card">
              <h2 className="text-base font-semibold text-slate-900">
                Business Information
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Company / Institution Name
                  </label>
                  <input
                    type="text"
                    disabled
                    placeholder="Placeholder — coming soon"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Business Email
                  </label>
                  <input
                    type="text"
                    disabled
                    placeholder="Placeholder — coming soon"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-400"
                  />
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-base font-semibold text-slate-900">
                Shipping Address
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700">
                    Address
                  </label>
                  <input
                    type="text"
                    disabled
                    placeholder="Placeholder — coming soon"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    City
                  </label>
                  <input
                    type="text"
                    disabled
                    placeholder="Placeholder — coming soon"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    disabled
                    placeholder="Placeholder — coming soon"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-400"
                  />
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-base font-semibold text-slate-900">
                Payment
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Payment processing is not yet enabled. Wholesale orders are
                currently confirmed manually by our sales team after
                checkout.
              </p>
            </div>
          </div>

          <div className="h-fit rounded-2xl border border-slate-100 bg-brand-50/40 p-6">
            <h2 className="text-base font-semibold text-slate-900">
              Order Summary
            </h2>
            <p className="mt-4 text-sm text-slate-500">
              Your cart is currently empty.
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-sm font-semibold text-slate-900">
              <span>Total</span>
              <span>—</span>
            </div>
            <span className="btn-primary mt-6 w-full pointer-events-none opacity-60">
              Submit Order
            </span>
            <ResearchUseNotice className="mt-6">
              By submitting an order you confirm products are for laboratory
              research use only.
            </ResearchUseNotice>
          </div>
        </div>
      </section>
    </>
  );
}
