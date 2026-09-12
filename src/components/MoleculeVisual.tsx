export default function MoleculeVisual({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-brand-50 via-white to-slate-50 ${className}`.trim()}
    >
      <svg
        viewBox="0 0 400 300"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#c9d8f2" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#grid)" />

        <g
          stroke="#2148a0"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.55"
        >
          <path d="M60 220 L120 160 L170 190 L230 110 L285 140 L340 80" fill="none" />
          <path d="M120 160 L110 90" fill="none" />
          <path d="M230 110 L245 60" fill="none" />
        </g>

        <g>
          <circle cx="60" cy="220" r="9" className="fill-brand-700" />
          <circle cx="120" cy="160" r="7" className="fill-brand-500" />
          <circle cx="110" cy="90" r="6" className="fill-brand-300" />
          <circle cx="170" cy="190" r="6.5" className="fill-brand-400" />
          <circle cx="230" cy="110" r="8" className="fill-brand-700" />
          <circle cx="245" cy="60" r="5.5" className="fill-brand-300" />
          <circle cx="285" cy="140" r="7" className="fill-brand-500" />
          <circle cx="340" cy="80" r="9" className="fill-brand-700" />
        </g>
      </svg>
    </div>
  );
}
