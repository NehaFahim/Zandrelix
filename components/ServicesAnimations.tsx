// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function ServicesAnimations() {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     const fine = window.matchMedia("(pointer:fine)").matches;
//     const triggers: ScrollTrigger[] = [];
//     const cleanups: Array<() => void> = [];

//     if (reduced) {
//       gsap.set(".opacity-0, .heading-inner", { opacity: 1, y: 0 });
//       return;
//     }

//     /* ---------------- HERO entrance ---------------- */
//     const eyebrow = document.getElementById("servicesEyebrow");
//     const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
//     if (eyebrow) tl.to(eyebrow, { opacity: 1, duration: 0.6 }, 0);
//     tl.to("#servicesHeading .heading-inner", { y: "0%", duration: 0.9, stagger: 0.12, ease: "power4.out" }, 0.15);
//     tl.to("#servicesSub", { opacity: 1, duration: 0.7 }, 0.45);
//     gsap.set(".trust-badge", { y: 14 });
//     tl.to(".trust-badge", { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, 0.6);

//     /* ---------------- core services grid ---------------- */
//     gsap.set(".service-card", { y: 24 });
//     triggers.push(
//       ScrollTrigger.create({
//         trigger: "#servicesGrid",
//         start: "top 85%",
//         once: true,
//         onEnter: () => gsap.to(".service-card", { opacity: 1, y: 0, duration: 0.65, stagger: 0.09, ease: "power3.out" }),
//       })
//     );

//     if (fine) {
//       document.querySelectorAll<HTMLElement>(".service-card").forEach((card) => {
//         const setRX = gsap.quickTo(card, "rotateX", { duration: 0.4, ease: "power2.out" });
//         const setRY = gsap.quickTo(card, "rotateY", { duration: 0.4, ease: "power2.out" });
//         card.style.perspective = "800px";
//         const handleMove = (e: MouseEvent) => {
//           const rect = card.getBoundingClientRect();
//           const relX = (e.clientX - rect.left) / rect.width - 0.5;
//           const relY = (e.clientY - rect.top) / rect.height - 0.5;
//           setRY(relX * 5);
//           setRX(-relY * 5);
//         };
//         const handleLeave = () => {
//           setRX(0);
//           setRY(0);
//         };
//         card.addEventListener("mousemove", handleMove);
//         card.addEventListener("mouseleave", handleLeave);
//         cleanups.push(() => {
//           card.removeEventListener("mousemove", handleMove);
//           card.removeEventListener("mouseleave", handleLeave);
//         });
//       });
//     }

//     /* ---------------- why choose us stats ---------------- */
//     gsap.set(".stat-item", { y: 18 });
//     triggers.push(
//       ScrollTrigger.create({
//         trigger: "#statsRow",
//         start: "top 88%",
//         once: true,
//         onEnter: () => gsap.to(".stat-item", { opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: "power3.out" }),
//       })
//     );

//     /* ---------------- work process steps ---------------- */
//     gsap.set(".process-step", { y: 18 });
//     triggers.push(
//       ScrollTrigger.create({
//         trigger: "#processRow",
//         start: "top 85%",
//         once: true,
//         onEnter: () => gsap.to(".process-step", { opacity: 1, y: 0, duration: 0.55, stagger: 0.12, ease: "power3.out" }),
//       })
//     );

//     return () => {
//       tl.kill();
//       triggers.forEach((st) => st.kill());
//       cleanups.forEach((fn) => fn());
//     };
//   }, []);

//   return null;
// }




"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export default function ServicesAnimations() {
  useLayoutEffect(() => {
    /*
     * ============================================================
     * GSAP REGISTRATION
     * ============================================================
     */

    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    /*
     * ============================================================
     * MEDIA QUERIES
     * ============================================================
     */

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const fine = window.matchMedia(
      "(pointer: fine)"
    ).matches;

    /*
     * ============================================================
     * GSAP CONTEXT
     *
     * Important for Next.js / React Strict Mode.
     * Prevents old animations and triggers from remaining alive.
     * ============================================================
     */

    const ctx = gsap.context(() => {
      /*
       * ==========================================================
       * REDUCED MOTION
       * ==========================================================
       */

      if (reduced) {
        gsap.set(
          [
            "#servicesEyebrow",
            "#servicesHeading .heading-inner",
            "#servicesSub",
            ".trust-badge",
            ".service-card",
            ".stat-item",
            ".process-step",
          ],
          {
            opacity: 1,
            y: 0,
            x: 0,
          }
        );

        return;
      }

      /*
       * ==========================================================
       * HERO ENTRANCE
       * ==========================================================
       */

      const eyebrow =
        document.getElementById("servicesEyebrow");

      const heading =
        document.querySelectorAll<HTMLElement>(
          "#servicesHeading .heading-inner"
        );

      const subtitle =
        document.getElementById("servicesSub");

      const trustBadges =
        document.querySelectorAll<HTMLElement>(
          ".trust-badge"
        );

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      if (eyebrow) {
        heroTimeline.fromTo(
          eyebrow,
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          0
        );
      }

      if (heading.length) {
        heroTimeline.fromTo(
          heading,
          {
            y: "100%",
          },
          {
            y: "0%",
            duration: 0.9,
            stagger: 0.12,
            ease: "power4.out",
          },
          0.15
        );
      }

      if (subtitle) {
        heroTimeline.fromTo(
          subtitle,
          {
            opacity: 0,
            y: 12,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          0.45
        );
      }

      if (trustBadges.length) {
        gsap.set(trustBadges, {
          opacity: 0,
          y: 14,
        });

        heroTimeline.to(
          trustBadges,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          0.6
        );
      }

      /*
       * ==========================================================
       * CORE SERVICES
       * ==========================================================
       */

      const serviceCards =
        gsap.utils.toArray<HTMLElement>(
          ".service-card"
        );

      if (serviceCards.length) {
        gsap.set(serviceCards, {
          opacity: 0,
          y: 24,
        });

        ScrollTrigger.create({
          trigger: "#servicesGrid",

          start: "top 85%",

          once: true,

          invalidateOnRefresh: true,

          onEnter: () => {
            gsap.to(serviceCards, {
              opacity: 1,
              y: 0,

              duration: 0.65,

              stagger: 0.09,

              ease: "power3.out",

              overwrite: "auto",
            });
          },
        });
      }

      /*
       * ==========================================================
       * DESKTOP CARD TILT
       *
       * IMPORTANT:
       * Only enable this on fine pointer devices.
       *
       * Touch/mobile devices will NOT get mouse tilt.
       * ==========================================================
       */

      if (fine && serviceCards.length) {
        serviceCards.forEach((card) => {
          const setRX = gsap.quickTo(
            card,
            "rotateX",
            {
              duration: 0.4,
              ease: "power2.out",
            }
          );

          const setRY = gsap.quickTo(
            card,
            "rotateY",
            {
              duration: 0.4,
              ease: "power2.out",
            }
          );
card.style.perspective = "800px";

          const handleMove = (e: MouseEvent) => {
            const rect =
              card.getBoundingClientRect();

            if (
              rect.width === 0 ||
              rect.height === 0
            ) {
              return;
            }

            const relX =
              (e.clientX - rect.left) /
                rect.width -
              0.5;

            const relY =
              (e.clientY - rect.top) /
                rect.height -
              0.5;

            setRY(relX * 5);
            setRX(-relY * 5);
          };

          const handleLeave = () => {
            setRX(0);
            setRY(0);
          };

          card.addEventListener(
            "mousemove",
            handleMove
          );

          card.addEventListener(
            "mouseleave",
            handleLeave
          );

          /*
           * Cleanup
           */
          ctx.add(() => {
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
       * ==========================================================
       * STATS
       * ==========================================================
       */

      const statItems =
        gsap.utils.toArray<HTMLElement>(
          ".stat-item"
        );

      if (statItems.length) {
        gsap.set(statItems, {
          opacity: 0,
          y: 18,
        });

        ScrollTrigger.create({
          trigger: "#statsRow",

          start: "top 88%",

          once: true,

          invalidateOnRefresh: true,

          onEnter: () => {
            gsap.to(statItems, {
              opacity: 1,
              y: 0,

              duration: 0.55,

              stagger: 0.08,

              ease: "power3.out",

              overwrite: "auto",
            });
          },
        });
      }

      /*
       * ==========================================================
       * PROCESS STEPS
       * ==========================================================
       */

      const processSteps =
        gsap.utils.toArray<HTMLElement>(
          ".process-step"
        );

      if (processSteps.length) {
        gsap.set(processSteps, {
          opacity: 0,
          y: 18,
        });

        ScrollTrigger.create({
          trigger: "#processRow",

          start: "top 85%",

          once: true,

          invalidateOnRefresh: true,

          onEnter: () => {
            gsap.to(processSteps, {
              opacity: 1,
              y: 0,

              duration: 0.55,

              stagger: 0.12,

              ease: "power3.out",

              overwrite: "auto",
            });
          },
        });
      }

      /*
       * ==========================================================
       * RESPONSIVE REFRESH
       *
       * Important because your cards change from:
       *
       * Desktop:
       * grid
       *
       * Mobile:
       * sticky vertical cards
       *
       * ==========================================================
       */

      const refresh = () => {
        ScrollTrigger.refresh();
      };

      /*
       * Give browser a chance to finish layout.
       */
      requestAnimationFrame(() => {
        requestAnimationFrame(refresh);
      });

      /*
       * Refresh after resize/orientation changes.
       */
      window.addEventListener(
        "resize",
        refresh
      );

      window.addEventListener(
        "orientationchange",
        refresh
      );

      /*
       * Cleanup listeners.
       */
      ctx.add(() => {
        window.removeEventListener(
          "resize",
          refresh
        );

        window.removeEventListener(
          "orientationchange",
          refresh
        );
      });
    });

    /*
     * ============================================================
     * CLEANUP
     * ============================================================
     */

    return () => {
      ctx.revert();

      /*
       * Refresh after cleanup so ScrollTrigger
       * recalculates the page correctly.
       */
      ScrollTrigger.refresh();
    };
  }, []);

  return null;
}