"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

const STATEMENT =
  "We don't ship templates. We engineer digital products fast, sharp, and built to perform the kind of work that makes competitors ask who built this.";

export default function Manifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const section = sectionRef.current;
    if (!section) return;

    if (reduced) {
      gsap.set(wordsRef.current, { opacity: 1 });
      return;
    }

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=120%",
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const words = wordsRef.current;
        const activeCount = Math.floor(self.progress * words.length);
        words.forEach((w, i) => {
          gsap.to(w, { opacity: i < activeCount ? 1 : 0.12, duration: 0.15, overwrite: "auto" });
        });
      },
    });

    return () => st.kill();
  }, []);

  const words = STATEMENT.split(" ");

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center bg-bg0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-brand-500/10 blur-[160px] pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-16 relative z-10 max-xl:px-10 max-lg:px-6 max-sm:px-5">
        <p className="font-extrabold text-[42px] leading-[1.3] tracking-[-0.5px] max-xl:text-[34px] max-lg:text-[26px] max-sm:text-[21px]">
          {words.map((w, i) => (
            <span
              key={i}
              ref={(el) => {
                if (el) wordsRef.current[i] = el;
              }}
              className="inline-block mr-[0.28em] opacity-[0.12] transition-opacity"
            >
              {w}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
