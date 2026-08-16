"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MagneticLink from "./MagneticLink";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
];

interface NavbarProps {
  /** kept for backward compatibility — the navbar now renders one unified,
   * fully responsive style (matching the home page) on every route */
  variant?: "pill" | "bar";
  active?: string;
  animateId?: string;
  ctaLabel?: string;
  ctaGradient?: boolean;
}

export default function Navbar({
  active = "Home",
  animateId,
  ctaLabel = "Contact Us",
  ctaGradient = false,
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  // close the mobile menu on route-ish changes / resize back to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const ctaClasses = ctaGradient
    ? "bg-gradient-to-r from-brand-500 to-violet-500 hover:opacity-90 text-white font-semibold rounded-full transition-opacity shadow-[0_0_24px_-4px_rgba(139,92,246,0.6)]"
    : "bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-full transition-colors shadow-[0_0_20px_-4px_rgba(47,111,237,0.6)]";

  return (
    <div className="sticky top-0 sm:top-4 z-50 px-0 sm:px-6">
      <header
        id={animateId}
        className={`relative max-w-[1240px] mx-auto flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 py-3 lg:py-3.5 bg-[#0a0d1a]/80 sm:bg-[#0a0d1a]/70 backdrop-blur-xl border-b sm:border border-white/[0.07] sm:rounded-full shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] ${
          animateId ? "opacity-0" : "nav-fade-in"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="Zandrelix logo" width={110} height={28} className="site-logo h-8 sm:h-10 w-auto" priority />
        </Link>

        {/* desktop links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[14.5px] font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                link.label === active
                  ? "nav-link nav-link--active text-brand-500"
                  : "nav-link text-[#c7cbd6] hover:text-white transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* desktop right side */}
        <div className="hidden lg:flex items-center gap-5">
          <MagneticLink href="/contact" className={`${ctaClasses} inline-flex items-center gap-2 text-[14.5px] pl-6 pr-5 py-[10px]`}>
            {ctaLabel}
            <ArrowRightIcon />
          </MagneticLink>
        </div>

        {/* mobile: hamburger */}
        <div className="lg:hidden flex items-center gap-2 flex-shrink-0">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full border border-white/12 text-white"
          >
            <span className="relative w-4 h-3 flex flex-col justify-between">
              <span
                className="block h-[1.5px] w-full bg-current transition-transform duration-300"
                style={{ transform: open ? "translateY(5.5px) rotate(45deg)" : "none" }}
              />
              <span
                className="block h-[1.5px] w-full bg-current transition-opacity duration-200"
                style={{ opacity: open ? 0 : 1 }}
              />
              <span
                className="block h-[1.5px] w-full bg-current transition-transform duration-300"
                style={{ transform: open ? "translateY(-5.5px) rotate(-45deg)" : "none" }}
              />
            </span>
          </button>
        </div>
      </header>

      {/* mobile dropdown panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out px-4 sm:px-6 ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="max-w-[1240px] mx-auto mt-2 rounded-2xl border border-white/[0.08] bg-[#0a0d1a]/95 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.7)] p-5 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-3 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                link.label === active ? "text-brand-500 bg-white/[0.04]" : "text-[#c7cbd6] hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <MagneticLink
            href="/contact"
            className={`${ctaClasses} inline-flex items-center justify-center gap-2 text-[14.5px] px-6 py-3 mt-3`}
          >
            {ctaLabel}
            <ArrowRightIcon />
          </MagneticLink>
        </nav>
      </div>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
