"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const processSteps = [
  {
    title: "Discover",
    desc: "We understand your ideas, requirements and goals.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
      </svg>
    ),
  },
  {
    title: "Strategize",
    desc: "We plan the project and create the right strategy.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3.5v5" />
        <path d="M20.5 12h-5" />
        <path d="M12 20.5v-5" />
        <path d="M3.5 12h5" />
      </svg>
    ),
  },
  {
    title: "Design",
    desc: "We design wireframes & UI/UX prototypes.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />
        <path d="m4 7.5 8 4.5 8-4.5" />
        <path d="M12 12v9" />
        <path d="m8 5.25 8 4.5" />
      </svg>
    ),
  },
  {
    title: "Build",
    desc: "We code with clean and scalable technologies.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 4-4 16" />
      </svg>
    ),
  },
  {
    title: "Launch",
    desc: "We test, deploy and launch your product.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14.5 5.5c2.2-2.2 4.8-2.7 6-2 .7 1.2.2 3.8-2 6L12 16l-4-4 6.5-6.5Z" />
        <path d="M12 16 8 20l-1-4-3-1 4-4" />
        <path d="M15 9h.01" />
        <path d="M6 18c-1.5 1.5-3 1.5-3 1.5S3 18 4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Grow",
    desc: "We provide ongoing support and help your business grow.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 20h18" />
        <path d="m5 16 5-5 3 3 6-7" />
        <path d="M15 7h4v4" />
      </svg>
    ),
  },
];

export default function SimpleProcess() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const fine = window.matchMedia("(pointer:fine)").matches;

    if (reduced) {
      gsap.set(".simple-process .process-step", {
        opacity: 1,
        y: 0,
      });

      gsap.set(".simple-process #timelineFill", {
        width: "100%",
      });

      gsap.set(".simple-process .step-dot", {
        scale: 1,
      });

      return;
    }

    const ctx = gsap.context(() => {
      /*
       * ---------------- PROCESS HEADING ----------------
       */

      gsap.set(".simple-process .process-heading", {
        opacity: 0,
        y: 20,
      });

      ScrollTrigger.create({
        trigger: ".simple-process",
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(".simple-process .process-heading", {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          });
        },
      });

      /*
       * ---------------- PROCESS STEPS ----------------
       */

      gsap.set(".simple-process .process-step", {
        opacity: 0,
        y: 28,
      });

      /*
       * Timeline starts at 0%
       */

      gsap.set(".simple-process #timelineFill", {
        width: "0%",
      });

      /*
       * Dots start invisible/small
       */

      gsap.set(".simple-process .step-dot", {
        scale: 0,
      });

      const processTrigger = ScrollTrigger.create({
        trigger: ".simple-process #timelineFill",
        start: "top 80%",
        once: true,

        onEnter: () => {
          /*
           * Timeline animation
           */
          gsap.to(".simple-process #timelineFill", {
            width: "100%",
            duration: 1.6,
            ease: "power2.inOut",
          });

          /*
           * Steps stagger animation
           */
          gsap.to(".simple-process .process-step", {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.13,
            ease: "power3.out",
          });

          /*
           * Dots pop animation
           */
          gsap.to(".simple-process .step-dot", {
            scale: 1,
            duration: 0.4,
            stagger: 0.13,
            delay: 0.3,
            ease: "back.out(3)",
          });
        },
      });

      /*
       * ---------------- FLOATING ICONS ----------------
       */

      const iconTween = gsap.to(".simple-process .step-ico", {
        y: -5,
        duration: 2.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.2,
          from: "start",
        },
      });

      /*
       * ---------------- 3D TILT ----------------
       */

      const cleanups: Array<() => void> = [];

      if (fine) {
        document
          .querySelectorAll<HTMLElement>(
            ".simple-process .process-step"
          )
          .forEach((card) => {
            const setRX = gsap.quickTo(card, "rotateX", {
              duration: 0.4,
              ease: "power2.out",
            });

            const setRY = gsap.quickTo(card, "rotateY", {
              duration: 0.4,
              ease: "power2.out",
            });

            card.style.transformStyle = "preserve-3d";
            card.style.perspective = "700px";

            const handleMove = (e: MouseEvent) => {
              const rect = card.getBoundingClientRect();

              const relX =
                (e.clientX - rect.left) / rect.width - 0.5;

              const relY =
                (e.clientY - rect.top) / rect.height - 0.5;

              setRY(relX * 8);
              setRX(-relY * 8);
            };

            const handleLeave = () => {
              setRX(0);
              setRY(0);
            };

            card.addEventListener("mousemove", handleMove);
            card.addEventListener("mouseleave", handleLeave);

            cleanups.push(() => {
              card.removeEventListener(
                "mousemove",
                handleMove
              );

              card.removeEventListener(
                "mouseleave",
                handleLeave
              );
            });
          });
      }

      /*
       * ---------------- CLEANUP ----------------
       */

      return () => {
        processTrigger.kill();
        iconTween.kill();

        cleanups.forEach((cleanup) => cleanup());
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="
        simple-process
        relative
        max-w-[1360px]
        mx-auto
        px-16
        py-16
        max-lg:px-6
        max-lg:py-10
      "
    >
      {/* ================= HEADING ================= */}

      <div className="process-heading mb-14">
        <span
          className="
            text-brand-400
            text-[13px]
            font-bold
            tracking-[2px]
            uppercase
            mb-4
            block
          "
        >
          How We Work
        </span>

        <h2
          className="
            font-extrabold
            text-[30px]
            leading-tight
            tracking-[-0.5px]
            max-lg:text-[26px]
          "
        >
          <span className="heading-line">
            <span className="heading-inner">
              Our Simple{" "}
              <span className="text-brand-500">
                Process
              </span>
            </span>
          </span>
        </h2>
      </div>

      {/* ================= PROCESS ================= */}

      <div
        className="
          relative
          grid
          grid-cols-6
          gap-4
          max-lg:grid-cols-2
          max-lg:gap-y-12
        "
      >
        {/* Timeline */}

        <div
          className="
            timeline-line
            absolute
            left-[8.33%]
            right-[8.33%]
            top-[48px]
            h-px
            bg-white/10
            max-lg:hidden
          "
        >
          <div
            id="timelineFill"
            className="
              timeline-fill
              absolute
              left-0
              top-0
              h-full
              w-0
              bg-gradient-to-r
              from-brand-600
              via-brand-500
              to-brand-400
              shadow-[0_0_12px_rgba(47,111,237,0.65)]
            "
          />
        </div>

        {processSteps.map((step) => (
          <div
            key={step.title}
            className="
              process-step
              group
              relative
              flex
              flex-col
              items-center
              text-center
              opacity-0
            "
          >
            {/* Icon */}

            <span
              className="
                step-ico
                relative
                z-10
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-card2/80
                text-brand-400
                shadow-[0_10px_30px_-12px_rgba(47,111,237,0.7)]
                backdrop-blur-sm
                transition-all
                duration-300
                group-hover:border-brand-500/50
                group-hover:bg-brand-500/10
                group-hover:text-brand-300
                group-hover:shadow-[0_10px_35px_-8px_rgba(47,111,237,0.8)]
              "
            >
              {step.icon}
            </span>

            {/* Timeline dot */}

            <span
              className="
                step-dot
                relative
                z-10
                my-3
                block
                h-2.5
                w-2.5
                rounded-full
                border
                border-brand-400
                bg-brand-500
                shadow-[0_0_12px_rgba(91,141,239,0.9)]
              "
            />

            {/* Title */}

            <h3
              className="
                font-bold
                text-[14.5px]
                mb-1.5
                text-white
              "
            >
              {step.title}
            </h3>

            {/* Description */}

            <p
              className="
                text-[12.5px]
                text-muted
                leading-relaxed
                max-w-[140px]
              "
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}