"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <span
      className={`relative w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center border transition-colors duration-300 ${
        open ? "bg-brand-500/15 border-brand-500/50" : "bg-white/[0.03] border-white/10"
      }`}
    >
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-3 h-[1.5px] bg-current" />
      </span>
      <span
        className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
        style={{ transform: open ? "rotate(0deg)" : "rotate(90deg)" }}
      >
        <span className="w-[1.5px] h-3 bg-current" />
      </span>
    </span>
  );
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const left = items.filter((_, i) => i % 2 === 0);
  const right = items.filter((_, i) => i % 2 === 1);

  const renderItem = (item: FaqItem) => {
    const index = items.indexOf(item);
    const isOpen = openIndex === index;
    return (
      <div
        key={item.question}
        className="faq-item rounded-xl border border-white/10 bg-card2/50 overflow-hidden opacity-0"
      >
        <button
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        >
          <span className="text-[14.5px] font-medium text-[#e5e7ef]">{item.question}</span>
          <span className="text-brand-400">
            <PlusMinusIcon open={isOpen} />
          </span>
        </button>
        <div
          className="grid transition-[grid-template-rows] duration-300 ease-out"
          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <p className="px-5 pb-4 text-[13.5px] text-muted leading-relaxed">{item.answer}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
      <div className="space-y-4">{left.map(renderItem)}</div>
      <div className="space-y-4">{right.map(renderItem)}</div>
    </div>
  );
}
