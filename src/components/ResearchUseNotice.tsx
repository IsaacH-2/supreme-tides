export default function ResearchUseNotice({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`disclaimer-banner ${className}`.trim()}>
      <strong className="font-semibold text-slate-800">
        RESEARCH USE ONLY.
      </strong>{" "}
      {children ?? (
        <>Not for human or veterinary use. Not a drug, food, supplement, or cosmetic.</>
      )}
    </div>
  );
}
