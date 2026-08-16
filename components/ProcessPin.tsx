"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

const steps = [
  {
    step: "01",
    title: "Discover",
    desc: "We dig into your business, your users, and your competitors before a single pixel gets drawn.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Interfaces built around real behavior — wireframes, prototypes, and a system that scales with you.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Clean, tested, production-grade code. No shortcuts that turn into your problem in six months.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    desc: "We ship, monitor, and keep iterating — your product improves after launch, not just before it.",
  },
];

export default function ProcessPin() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const section = sectionRef.current;
    const line = lineRef.current;

    if (!section || !line) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* =========================================================
         REDUCED MOTION
      ========================================================== */

      if (reduced) {
        gsap.set(stepRefs.current, {
          opacity: 1,
          x: 0,
        });

        gsap.set(line, {
          scaleY: 1,
        });

        return;
      }

      /* =========================================================
         DESKTOP
         Keep your original pinned GSAP animation
      ========================================================== */

      mm.add("(min-width: 1024px)", () => {
        const trigger = ScrollTrigger.create({
          trigger: section,

          start: "top top",

          end: "+=150%",

          pin: true,

          scrub: 0.6,

          onUpdate: (self) => {
            const progress = self.progress;

            gsap.set(line, {
              scaleY: progress,
            });

            const activeIdx = Math.min(
              steps.length - 1,
              Math.floor(progress * steps.length)
            );

            stepRefs.current.forEach((el, i) => {
              if (!el) return;

              gsap.set(el, {
                opacity: i <= activeIdx ? 1 : 0.25,
                x: i <= activeIdx ? 0 : -10,
              });
            });
          },
        });

        return () => {
          trigger.kill();
        };
      });

      /* =========================================================
         TABLET + MOBILE
         
         No pin here.
         Normal vertical page scrolling.
         Heading stays visible.
      ========================================================== */

      mm.add("(max-width: 1023px)", () => {
        gsap.set(line, {
          scaleY: 1,
        });

        gsap.set(stepRefs.current, {
          opacity: 1,
          x: 0,
        });

        return () => {
          gsap.set(line, {
            clearProps: "all",
          });

          gsap.set(stepRefs.current, {
            clearProps: "all",
          });
        };
      });

      return () => {
        mm.revert();
      };
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        bg-bg0
        overflow-hidden

        /*
         * Desktop
         */
        min-h-screen

        /*
         * Mobile / Tablet
         */
        max-lg:h-auto
        max-lg:min-h-screen
        max-lg:py-16

        max-sm:py-12
      "
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-16
          w-full

          grid
          grid-cols-[1fr_1.2fr]
          gap-16
          items-center

          /*
           * Desktop
           */
          min-h-screen

          max-xl:px-10

          /*
           * Tablet
           */
          max-lg:grid-cols-1
          max-lg:gap-12
          max-lg:px-6
          max-lg:py-8
          max-lg:items-start

          /*
           * Mobile
           */
          max-sm:px-5
          max-sm:gap-10
          max-sm:py-4
        "
      >
        {/* =====================================================
            LEFT / HEADING
        ====================================================== */}

        <div
          className="
            w-full

            max-lg:text-center
            max-lg:pt-4

            max-sm:pt-2
          "
        >
          <span
            className="
              text-brand-400
              text-[13px]
              font-bold
              tracking-[2px]
              uppercase
              mb-4
              block

              max-lg:mb-3

              max-sm:text-[12px]
            "
          >
            How We Work
          </span>

          <h2
            className="
              font-extrabold
              text-[40px]
              leading-[1.1]
              tracking-[-1px]

              max-w-[560px]

              max-xl:text-[32px]

              max-lg:max-w-[700px]
              max-lg:mx-auto
              max-lg:text-[30px]

              max-sm:text-[25px]
              max-sm:leading-[1.12]
            "
          >
            Four steps. Zero{" "}
            <span className="text-brand-500">
              wasted motion.
            </span>
          </h2>
        </div>

        {/* =====================================================
            RIGHT / PROCESS STEPS
        ====================================================== */}

        <div
          className="
            relative
            pl-12
            w-full

            max-lg:pl-10
            max-lg:max-w-[720px]
            max-lg:mx-auto

            max-sm:pl-9
          "
        >
          {/* ===================================================
              VERTICAL LINE
          ==================================================== */}

          <div
            className="
              absolute

              left-0
              top-0
              bottom-0

              w-[2px]

              bg-white/10

              max-sm:left-0
            "
          >
            <div
              ref={lineRef}
              className="
                w-full
                h-full

                bg-brand-500

                origin-top
              "
              style={{
                transform: "scaleY(0)",
              }}
            />
          </div>

          {/* ===================================================
              STEPS
          ==================================================== */}

          <div
            className="
              space-y-12

              max-lg:space-y-10

              max-sm:space-y-8
            "
          >
            {steps.map((s, i) => (
              <div
                key={s.step}
                ref={(el) => {
                  if (el) {
                    stepRefs.current[i] = el;
                  }
                }}
                className="
                  opacity-[0.25]

                  transition-opacity
                  duration-300
                "
              >
                {/* =================================================
                    STEP TITLE
                ================================================== */}

                <div
                  className="
                    flex
                    items-baseline
                    gap-4
                    mb-2

                    max-sm:gap-3
                  "
                >
                  <span
                    className="
                      text-brand-500
                      font-extrabold
                      text-[15px]

                      max-sm:text-[13px]
                    "
                  >
                    {s.step}
                  </span>

                  <h3
                    className="
                      font-bold
                      text-[22px]

                      max-sm:text-[19px]
                    "
                  >
                    {s.title}
                  </h3>
                </div>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p
                  className="
                    text-muted
                    text-[15px]
                    leading-[1.7]

                    max-w-[440px]

                    max-sm:text-[14px]
                    max-sm:leading-[1.65]
                  "
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}