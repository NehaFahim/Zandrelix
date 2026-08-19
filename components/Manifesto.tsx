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

    const section = sectionRef.current;
    if (!section) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const words = wordsRef.current;

    if (reduced) {
      gsap.set(words, { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=90%",
        pin: true,
        scrub: true,

        onUpdate: (self) => {
          const activeCount = Math.floor(
            self.progress * words.length
          );

          words.forEach((word, index) => {
            word.style.opacity =
              index < activeCount ? "1" : "0.12";
          });
        },
      });

      return () => {
        st.kill();
      };
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  const words = STATEMENT.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center bg-bg0 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          sm:w-[800px]
          sm:h-[800px]
          rounded-full
          bg-brand-500/10
          blur-[120px]
          sm:blur-[150px]
          pointer-events-none
        "
      />

      {/* Content */}
      <div
        className="
          max-w-[1200px]
          mx-auto
          px-5
          sm:px-6
          lg:px-10
          xl:px-16
          relative
          z-10
        "
      >
        <p
          className="
            font-extrabold
            text-[21px]
            sm:text-[24px]
            md:text-[26px]
            lg:text-[34px]
            xl:text-[42px]
            leading-[1.3]
            tracking-[-0.4px]
          "
        >
          {words.map((word, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) {
                  wordsRef.current[index] = el;
                }
              }}
              className="
                inline-block
                mr-[0.28em]
              "
              style={{
                opacity: 0.12,
                willChange: "opacity",
              }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}