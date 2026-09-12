import { PROCESS_STEPS } from "@/lib/company";

export default function ProcessTimeline({
  steps = PROCESS_STEPS,
}: {
  steps?: typeof PROCESS_STEPS;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div key={step.number} className="relative">
          <div className="card h-full">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-sm font-semibold text-white">
              {step.number}
            </span>
            <h3 className="mt-4 text-base font-semibold text-slate-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-slate-500">{step.description}</p>
          </div>
          {index < steps.length - 1 && (
            <span
              className="absolute right-[-14px] top-11 hidden h-px w-7 bg-brand-200 lg:block"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
}
