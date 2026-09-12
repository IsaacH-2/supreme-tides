export default function SearchIcon() {
  return (
    <button
      type="button"
      aria-label="Search"
      className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M20 20l-3.8-3.8"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
