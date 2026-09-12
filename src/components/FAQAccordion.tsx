"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/company";

export default function FAQAccordion({
  items = FAQ_ITEMS,
}: {
  items?: typeof FAQ_ITEMS;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white shadow-card">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-sm font-semibold text-slate-900">
                {item.question}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className={`shrink-0 text-brand-600 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-sm text-slate-500 sm:px-8">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
