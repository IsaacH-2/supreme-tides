import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact | Supreme Tides",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get In Touch"
        description="Questions about an order, a wholesale account, or anything else — reach out and we'll get back to you."
      />

      <section className="section">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="text-sm font-medium text-slate-700"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                placeholder="Wholesale account inquiry"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                placeholder="Tell us a bit about what you're looking for."
              />
            </div>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Email</h3>
              <p className="mt-1 text-sm text-slate-500">
                hello@supremetides.com
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Phone</h3>
              <p className="mt-1 text-sm text-slate-500">(555) 010-0100</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Office
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                123 Harbor Way, Suite 200
                <br />
                Long Beach, CA 90802
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Hours</h3>
              <p className="mt-1 text-sm text-slate-500">
                Monday – Friday, 9am – 5pm PT
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
