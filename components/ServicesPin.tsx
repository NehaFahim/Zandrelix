// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import MagneticLink from "@/components/MagneticLink";
// import { ArrowRightTiny } from "@/components/ServiceIcons";

// import {
//   Monitor,
//   Smartphone,
//   BrainCircuit,
//   Layers3,
//   PenTool,
// } from "lucide-react";
// import { SiShopify } from "react-icons/si";
// import type { ElementType, ReactNode } from "react";
// import ScrollReveal from "./ScrollReveal";

// let registered = false;

// interface ServicePanel {
//   icon: ElementType;
//   title: string;
//   desc: string;
//   tags: string[];
//   tile: ReactNode;
// }

// const panels: ServicePanel[] = [
//   {
//     icon: Monitor,
//     title: "Web Development",
//     desc: "Blazing-fast, pixel-perfect websites engineered to convert visitors into customers — not just look pretty in a portfolio.",
//     tags: ["Next.js", "Performance", "SEO"],
//     tile: null,
//   },
//   {
//     icon: Smartphone,
//     title: "Mobile Apps",
//     desc: "Native-feeling iOS & Android apps from one codebase, shipped fast without sacrificing the polish users expect.",
//     tags: ["React Native", "iOS", "Android"],
//     tile: null,
//   },
//   {
//     icon: SiShopify,
//     title: "Shopify Stores",
//     desc: "Conversion-obsessed storefronts that make checkout effortless and your brand impossible to scroll past.",
//     tags: ["Shopify", "CRO", "Custom Themes"],
//     tile: null,
//   },
//   {
//     icon: PenTool,
//     title: "UI / UX Design",
//     desc: "Interfaces built around real user behavior — every pixel earns its place, every flow removes friction.",
//     tags: ["Figma", "Prototyping", "Design Systems"],
//     tile: null,
//   },
//   {
//     icon: BrainCircuit,
//     title: "AI Solutions",
//     desc: "Practical AI features — automation, chat, recommendations — that actually move your metrics, not just your hype.",
//     tags: ["LLM Integration", "Automation", "Data"],
//     tile: null,
//   },
//   {
//     icon: Layers3,
//     title: "Custom Platforms",
//     desc: "When off-the-shelf can't keep up with your business, we build the exact tool your team actually needs.",
//     tags: ["APIs", "Dashboards", "Scale"],
//     tile: null,
//   },
// ];

// export default function ServicesPin() {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const trackRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!registered) {
//       gsap.registerPlugin(ScrollTrigger);
//       registered = true;
//     }

//     const reduced = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     const isDesktop = window.matchMedia(
//       "(min-width: 1024px)"
//     ).matches;

//     const wrapper = wrapperRef.current;
//     const track = trackRef.current;

//     if (!wrapper || !track || reduced || !isDesktop) return;

//     const ctx = gsap.context(() => {
//       const totalScroll = track.scrollWidth - window.innerWidth;

//       const st = ScrollTrigger.create({
//         trigger: wrapper,
//         start: "top top",
//         end: () => `+=${totalScroll}`,
//         pin: true,
//         scrub: 0.8,
//         anticipatePin: 1,

//         onUpdate: (self) => {
//           gsap.set(track, {
//             x: -self.progress * totalScroll,
//           });
//         },
//       });

//       return () => st.kill();
//     }, wrapper);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={wrapperRef}
//       className="relative overflow-hidden bg-bg0"
//       id="servicesPin"
//     >
//       <div className="h-screen flex flex-col justify-center max-lg:h-auto max-lg:py-16">
//         {/* ================= HEADER ================= */}
//         <div className="max-w-[1440px] mx-auto px-16 mb-10 w-full max-xl:px-10 max-lg:px-6 max-sm:px-5">
//           <span className="text-brand-400 text-[13px] font-bold tracking-[2px] uppercase mb-4 block">
//             What We Build
//           </span>

//           <h2 className="font-extrabold text-[44px] leading-[1.05] tracking-[-1px] max-w-[720px] max-xl:text-[36px] max-lg:text-[30px] max-sm:text-[26px]">
//             Six ways we turn ambition into{" "}
//             <span className="text-brand-500">
//               shipped product.
//             </span>
//           </h2>
//         </div>

//         {/* ================= HORIZONTAL TRACK ================= */}
//         <div
//           ref={trackRef}
//           className="flex gap-6 px-16 max-xl:px-10 max-lg:px-6 max-sm:px-5 max-lg:flex-col max-lg:gap-6"
//           style={{ width: "max-content" }}
//         >
//           {panels.map((p) => {
//             const Icon = p.icon;

//             return (
//               <div
//                 key={p.title}
//                 className="
//                   service-panel
//                   group
//                   w-[440px]
//                   max-lg:w-full
//                   flex-shrink-0
//                   rounded-3xl
//                   border border-white/10
//                   bg-card2/50
//                   p-10
//                   flex flex-col justify-between
//                   min-h-[440px]
//                   max-lg:min-h-0
//                   max-sm:p-7
//                   transition-all duration-500
//                   hover:border-brand-500/30
//                   hover:bg-card2/70
//                 "
//               >
//                 <div>
//                   {/* ================= ICON ================= */}
//                   <div
//                     className="
//                       flex
//                       h-16
//                       w-16
//                       items-center
//                       justify-center
//                       rounded-2xl
//                       border
//                       border-brand-500/20
//                       bg-brand-500/[0.08]
//                       shadow-[0_0_25px_rgba(59,130,246,0.10)]
//                       mb-7
//                       transition-all
//                       duration-500
//                       group-hover:border-brand-400/40
//                       group-hover:bg-brand-500/[0.14]
//                       group-hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]
//                     "
//                   >
//                     <Icon
//                       size={30}
//                       strokeWidth={1.8}
//                       className="
//                         text-brand-400
//                         drop-shadow-[0_0_8px_rgba(59,130,246,0.65)]
//                         transition-transform
//                         duration-500
//                         group-hover:scale-110
//                       "
//                     />
//                   </div>

//                   {/* ================= TITLE ================= */}
//                   <h3 className="font-extrabold text-[26px] leading-tight mb-4 max-sm:text-[22px]">
//                     {p.title}
//                   </h3>

//                   {/* ================= DESCRIPTION ================= */}
//                   <p className="text-muted text-[15px] leading-[1.7] max-sm:text-[14px]">
//                     {p.desc}
//                   </p>
//                 </div>

//                 {/* ================= TAGS ================= */}
//                 <div className="mt-8 flex flex-wrap gap-2">
//                   {p.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="
//                         rounded-full
//                         border
//                         border-brand-500/20
//                         bg-brand-500/5
//                         px-3
//                         py-1.5
//                         text-xs
//                         text-brand-300
//                       "
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}

//           {/* ================= CUSTOM PROJECT CARD ================= */}
//           <div
//             className="
//               service-panel
//               w-[380px]
//               max-lg:w-full
//               flex-shrink-0
//               rounded-3xl
//               border
//               border-brand-500/30
//               bg-gradient-to-br
//               from-brand-600/20
//               to-violet-600/10
//               p-10
//               flex
//               flex-col
//               justify-center
//               items-start
//               min-h-[440px]
//               max-lg:min-h-0
//               max-sm:p-7
//             "
//           >
//             <h3 className="font-extrabold text-[26px] leading-tight mb-4 max-sm:text-[22px]">
//               Don&apos;t see your project?
//             </h3>

//             <p className="text-muted text-[15px] leading-[1.7] mb-8 max-sm:text-[14px]">
//               We build custom. Tell us the problem — we&apos;ll bring the
//               solution.
//             </p>

//            <ScrollReveal className="text-center mt-12" delay={0.1}>
//   <MagneticLink
//     href="/services"
//     className="
//       group
//       inline-flex
//       items-center
//       gap-2

//       bg-white
//       text-brand-300

//       border
//       border-brand-500/30

//       shadow-[0_0_20px_rgba(59,130,246,0.08)]

//       font-semibold
//       text-black

//       px-7
//       py-[13px]
//       rounded-full

//       transition-all
//       duration-500
//       ease-out

//       hover:bg-brand-500
//       hover:text-white
//       hover:border-brand-400
//       hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]
//       hover:-translate-y-0.5

//       max-sm:text-[13px]
//       max-sm:px-5
//       max-sm:py-3
//     "
//   >
//     View All Services

//     <ArrowRightTiny />
//   </MagneticLink>
// </ScrollReveal>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }









"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticLink from "@/components/MagneticLink";
import { ArrowRightTiny } from "@/components/ServiceIcons";

import {
  Monitor,
  Smartphone,
  BrainCircuit,
  Layers3,
  PenTool,
} from "lucide-react";
import { SiShopify } from "react-icons/si";
import type { ElementType, ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

let registered = false;

interface ServicePanel {
  icon: ElementType;
  title: string;
  desc: string;
  tags: string[];
  tile: ReactNode;
}

const panels: ServicePanel[] = [
  {
    icon: Monitor,
    title: "Web Development",
    desc: "Blazing-fast, pixel-perfect websites engineered to convert visitors into customers — not just look pretty in a portfolio.",
    tags: ["Next.js", "Performance", "SEO"],
    tile: null,
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native-feeling iOS & Android apps from one codebase, shipped fast without sacrificing the polish users expect.",
    tags: ["React Native", "iOS", "Android"],
    tile: null,
  },
  {
    icon: SiShopify,
    title: "Shopify Stores",
    desc: "Conversion-obsessed storefronts that make checkout effortless and your brand impossible to scroll past.",
    tags: ["Shopify", "CRO", "Custom Themes"],
    tile: null,
  },
  {
    icon: PenTool,
    title: "UI / UX Design",
    desc: "Interfaces built around real user behavior — every pixel earns its place, every flow removes friction.",
    tags: ["Figma", "Prototyping", "Design Systems"],
    tile: null,
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    desc: "Practical AI features — automation, chat, recommendations — that actually move your metrics, not just your hype.",
    tags: ["LLM Integration", "Automation", "Data"],
    tile: null,
  },
  {
    icon: Layers3,
    title: "Custom Platforms",
    desc: "When off-the-shelf can't keep up with your business, we build the exact tool your team actually needs.",
    tags: ["APIs", "Dashboards", "Scale"],
    tile: null,
  },
];

export default function ServicesPin() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const wrapper = wrapperRef.current;
    const track = trackRef.current;

    if (!wrapper || !track) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* =========================================================
         DESKTOP
         1024px+
         
         Existing horizontal scrolling behavior
      ========================================================= */

      mm.add("(min-width: 1024px)", () => {
        gsap.set(track, {
          clearProps: "all",
          x: 0,
          y: 0,
        });

        const getTotalScroll = () => {
          return Math.max(
            0,
            track.scrollWidth - window.innerWidth
          );
        };

        const desktopTrigger = ScrollTrigger.create({
          trigger: wrapper,

          start: "top top",

          end: () => `+=${getTotalScroll()}`,

          pin: true,

          scrub: 0.8,

          anticipatePin: 1,

          invalidateOnRefresh: true,

          onUpdate: (self) => {
            const totalScroll = getTotalScroll();

            gsap.set(track, {
              x: -self.progress * totalScroll,
            });
          },
        });

        return () => {
          desktopTrigger.kill();

          gsap.set(track, {
            clearProps: "all",
            x: 0,
            y: 0,
          });
        };
      });

      /* =========================================================
         TABLET + MOBILE
         < 1024px

         Vertical sticky card stacking.

         Card 1
             ↓
         Card 2 comes over Card 1
             ↓
         Card 3 comes over Card 2
             ↓
         Card 4...
      ========================================================= */

      mm.add("(max-width: 1023px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(
          ".service-panel"
        );

        if (!cards.length) return;

        /*
         * Remove desktop horizontal transforms.
         */
        gsap.set(track, {
          clearProps: "transform",
          x: 0,
          y: 0,
        });

        /*
         * Responsive layout.
         *
         * Cards are normal vertical elements.
         */
        gsap.set(track, {
          width: "100%",
          maxWidth: "100%",
          minWidth: 0,
        });

        /*
         * Make sure cards don't have any
         * leftover GSAP transforms.
         */
        gsap.set(cards, {
          clearProps: "transform",
          x: 0,
          y: 0,
        });

        /*
         * Refresh after browser has calculated
         * the responsive dimensions.
         */
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });

        return () => {
          gsap.set(cards, {
            clearProps: "all",
          });

          gsap.set(track, {
            clearProps: "all",
          });
        };
      });

      return () => {
        mm.revert();
      };
    }, wrapper);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={wrapperRef}
      id="servicesPin"
      className="
        relative
        w-full
        max-w-full
        min-w-0
        overflow-x-clip
        bg-bg0
      "
    >
      <div
        className="
          h-screen
          flex
          flex-col
          justify-center

          max-lg:h-auto
          max-lg:block
          max-lg:py-16

          max-sm:py-12
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            max-w-[1440px]
            mx-auto
            px-16
            mb-10
            w-full

            max-xl:px-10

            max-lg:px-6
            max-lg:mb-10

            max-sm:px-5
            max-sm:mb-8
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
            "
          >
            What We Build
          </span>

          <h2
            className="
              font-extrabold
              text-[44px]
              leading-[1.05]
              tracking-[-1px]
              max-w-[720px]

              max-xl:text-[36px]

              max-lg:text-[30px]

              max-sm:text-[26px]
              max-sm:leading-[1.1]
            "
          >
            Six ways we turn ambition into{" "}
            <span className="text-brand-500">
              shipped product.
            </span>
          </h2>
        </div>

        {/* =====================================================
            HORIZONTAL TRACK
        ====================================================== */}

        <div
          ref={trackRef}
          className="
            flex
            gap-6
            px-16
            w-max

            max-xl:px-10

            max-lg:w-full
            max-lg:max-w-full
            max-lg:min-w-0

            max-lg:flex-col
            max-lg:gap-0

            max-lg:px-6

            max-sm:px-5
          "
        >
          {/* ===================================================
              SERVICE CARDS
          ==================================================== */}

          {panels.map((p, index) => {
            const Icon = p.icon;

            return (
              <div
                key={p.title}
                style={{
                  zIndex: index + 1,
                }}
                className="
                  service-panel
                  group

                  box-border

                  w-[440px]
                  flex-shrink-0

                  rounded-3xl

                  border
                  border-white/10

                  /*
                   * OPAQUE BACKGROUND
                   *
                   * Important:
                   * Previous card won't show through.
                   */
                  bg-card2

                  p-10

                  flex
                  flex-col
                  justify-between

                  min-h-[440px]

                  transition-all
                  duration-500

                  hover:border-brand-500/30
                  hover:bg-card2

                  /* =================================================
                     TABLET
                  ================================================== */

                  max-lg:w-full

                  max-lg:max-w-[720px]

                  max-lg:mx-auto

                  /*
                   * Sticky stacking
                   */
                  max-lg:sticky

                  max-lg:top-[16vh]

                  max-lg:min-h-[400px]

                  max-lg:p-8

                  /*
                   * Space before next card arrives
                   */
                  max-lg:mb-[18vh]

                  /* =================================================
                     MOBILE
                  ================================================== */

                  max-sm:top-[13vh]

                  max-sm:min-h-[370px]

                  max-sm:p-7

                  max-sm:mb-[14vh]

                  max-sm:rounded-[24px]
                "
              >
                <div>
                  {/* =================================================
                      ICON
                  ================================================== */}

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center

                      rounded-2xl

                      border
                      border-brand-500/20

                      bg-brand-500/[0.08]

                      shadow-[0_0_25px_rgba(59,130,246,0.10)]

                      mb-7

                      transition-all
                      duration-500

                      group-hover:border-brand-400/40

                      group-hover:bg-brand-500/[0.14]

                      group-hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]

                      max-sm:h-14
                      max-sm:w-14

                      max-sm:mb-6
                    "
                  >
                    <Icon
                      size={30}
                      strokeWidth={1.8}
                      className="
                        text-brand-400

                        drop-shadow-[0_0_8px_rgba(59,130,246,0.65)]

                        transition-transform
                        duration-500

                        group-hover:scale-110

                        max-sm:size-7
                      "
                    />
                  </div>

                  {/* =================================================
                      TITLE
                  ================================================== */}

                  <h3
                    className="
                      font-extrabold
                      text-[26px]
                      leading-tight
                      mb-4

                      max-sm:text-[22px]
                    "
                  >
                    {p.title}
                  </h3>

                  {/* =================================================
                      DESCRIPTION
                  ================================================== */}

                  <p
                    className="
                      text-muted
                      text-[15px]
                      leading-[1.7]

                      max-sm:text-[14px]
                      max-sm:leading-[1.65]
                    "
                  >
                    {p.desc}
                  </p>
                </div>

                {/* =================================================
                    TAGS
                ================================================== */}

                <div
                  className="
                    mt-8

                    flex
                    flex-wrap

                    gap-2

                    max-sm:mt-6
                  "
                >
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full

                        border
                        border-brand-500/20

                        bg-brand-500/5

                        px-3
                        py-1.5

                        text-xs

                        text-brand-300

                        max-sm:px-2.5
                        max-sm:py-1
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* =====================================================
              CUSTOM PROJECT CARD
          ====================================================== */}

          <div
            style={{
              zIndex: panels.length + 1,
            }}
            className="
              service-panel

              box-border

              w-[380px]

              flex-shrink-0

              rounded-3xl

              border
              border-brand-500/30

              /*
               * Keep custom gradient opaque.
               */
              bg-gradient-to-br
              from-brand-500
              to-violet-600

              p-10

              flex
              flex-col
              justify-center
              items-start

              min-h-[440px]

              /* =================================================
                 TABLET
              ================================================== */

              max-lg:w-full

              max-lg:max-w-[720px]

              max-lg:mx-auto

              max-lg:sticky

              max-lg:top-[16vh]

              max-lg:min-h-[400px]

              max-lg:p-8

              max-lg:mb-[4vh]

              /* =================================================
                 MOBILE
              ================================================== */

              max-sm:top-[13vh]

              max-sm:min-h-[360px]

              max-sm:p-7

              max-sm:rounded-[24px]
            "
          >
            {/* =================================================
                TITLE
            ================================================== */}

            <h3
              className="
                font-extrabold
                text-[26px]
                leading-tight
                mb-4

                max-sm:text-[22px]
              "
            >
              Don&apos;t see your project?
            </h3>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p
              className="
                text-white/75
                text-[15px]
                leading-[1.7]
                mb-8

                max-sm:text-[14px]
                max-sm:leading-[1.65]
              "
            >
              We build custom. Tell us the problem — we&apos;ll
              bring the solution.
            </p>

            {/* =================================================
                CTA
            ================================================== */}

            <ScrollReveal
              className="
                text-center
                mt-12

                max-sm:mt-8
              "
              delay={0.1}
            >
              <MagneticLink
                href="/services"
                className="
                  group

                  inline-flex
                  items-center
                  gap-2

                  bg-white
                  text-black

                  border
                  border-brand-500/30

                  shadow-[0_0_20px_rgba(59,130,246,0.08)]

                  font-semibold

                  px-7
                  py-[13px]

                  rounded-full

                  transition-all
                  duration-500
                  ease-out

                  hover:bg-brand-500
                  hover:text-white

                  hover:border-brand-400

                  hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]

                  hover:-translate-y-0.5

                  max-sm:text-[13px]
                  max-sm:px-5
                  max-sm:py-3
                "
              >
                View All Services

                <ArrowRightTiny />
              </MagneticLink>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}