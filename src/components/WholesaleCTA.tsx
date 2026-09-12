import Button from "./Button";

export default function WholesaleCTA() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="rounded-3xl bg-brand-800 px-8 py-14 text-center md:px-16 md:py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Wholesale pricing built for volume.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-brand-100">
            Request pricing based on your research requirements and order
            volume.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/wholesale/request" variant="primary-inverse">
              Request Wholesale Quote
            </Button>
            <Button href="/contact" variant="secondary-inverse">
              Contact Us
            </Button>
          </div>
          <p className="mt-6 text-xs uppercase tracking-wide text-brand-200">
            For qualified professional research buyers only.
          </p>
        </div>
      </div>
    </section>
  );
}
