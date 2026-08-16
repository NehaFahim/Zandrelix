"use client";

import { ArrowUpIcon } from "./FooterIcons";

export default function ScrollToTopButton() {
  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-brand-600 hover:bg-brand-500 flex items-center justify-center shadow-[0_8px_24px_-4px_rgba(47,111,237,0.7)] transition-colors"
    >
      <ArrowUpIcon />
    </button>
  );
}
