import { SAMPLE_COA } from "@/lib/company";
import Button from "./Button";

export default function COACard({
  coa = SAMPLE_COA,
}: {
  coa?: typeof SAMPLE_COA;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card">
      <div className="flex items-start justify-between border-b border-slate-100 pb-6">
        <div>
          <p className="eyebrow">Certificate of Analysis</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">
            LOT №{coa.lot}
          </p>
        </div>
        <span className="badge">Example Document</span>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
        <div>
          <dt className="text-xs uppercase tracking-wide text-slate-400">
            Compound
          </dt>
          <dd className="mt-1 text-sm font-medium text-slate-800">
            {coa.compound}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-slate-400">
            Identity
          </dt>
          <dd className="mt-1 text-sm font-medium text-slate-800">
            {coa.identity}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-slate-400">
            Purity
          </dt>
          <dd className="mt-1 text-sm font-medium text-slate-800">
            {coa.purity}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-slate-400">
            Testing
          </dt>
          <dd className="mt-1 text-sm font-medium text-slate-800">
            {coa.testing}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-slate-400">
            Status
          </dt>
          <dd className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {coa.status}
          </dd>
        </div>
      </dl>

      <p className="mt-6 text-xs text-slate-400">
        This document is an example for illustrative purposes only and does
        not represent a real laboratory result.
      </p>

      <Button href="/quality" variant="secondary" className="mt-6 w-full">
        View Documentation
      </Button>
    </div>
  );
}
