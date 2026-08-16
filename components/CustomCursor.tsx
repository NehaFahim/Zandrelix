"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer:fine)").matches;
    if (!fine) return;

    document.documentElement.classList.add("has-custom-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // snappy dot, slightly trailing ring — the classic "award winning site" feel
    const setDot = gsap.quickTo(dot, "x", { duration: 0.09, ease: "power3.out" });
    const setDotY = gsap.quickTo(dot, "y", { duration: 0.09, ease: "power3.out" });
    const setRing = gsap.quickTo(ring, "x", { duration: 0.28, ease: "power3.out" });
    const setRingY = gsap.quickTo(ring, "y", { duration: 0.28, ease: "power3.out" });

    let raf = 0;
    const handleMove = (e: MouseEvent) => {
      // coalesce to one update per animation frame — keeps things buttery even
      // on busy pages instead of firing a gsap update per raw mousemove event
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setDot(e.clientX);
        setDotY(e.clientY);
        setRing(e.clientX);
        setRingY(e.clientY);
        raf = 0;
      });
    };
    window.addEventListener("mousemove", handleMove, { passive: true });

    // event delegation so hover state works for every interactive element,
    // including ones added later (mobile menu, FAQ, modals, etc.)
    const isInteractive = (el: Element | null) => el?.closest("a, button, .magnetic-btn, [role='button'], input, textarea, select");

    const handleOver = (e: MouseEvent) => {
      if (isInteractive(e.target as Element)) {
        ring.classList.add("is-active");
      }
    };
    const handleOut = (e: MouseEvent) => {
      const related = e.relatedTarget as Element | null;
      if (isInteractive(e.target as Element) && !isInteractive(related)) {
        ring.classList.remove("is-active");
      }
    };
    const handleDown = () => ring.classList.add("is-pressed");
    const handleUp = () => ring.classList.remove("is-pressed");

    document.addEventListener("mouseover", handleOver, { passive: true });
    document.addEventListener("mouseout", handleOut, { passive: true });
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
