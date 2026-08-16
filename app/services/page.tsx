import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MagneticLink from "@/components/MagneticLink";
import ServicesAnimations from "@/components/ServicesAnimations";
import TechMarquee from "@/components/TechMarquee";
import {
  ReactIcon,
  NextJsIcon,
  ReactNativeIcon,
  NodeJsIcon,
  MongoDbIcon,
  FirebaseIcon,
  TailwindIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  FigmaIcon,
  ShopifyIcon,
  PythonIcon,
} from "@/components/TechIcons";
import {
  WebDevTile,
  MobileAppTile,
  ShopifyDevTile,
  EcommerceTile,
  AiSolutionsTile,
  UiuxTile,
  CustomSolutionsTile,
  ArrowRightTiny,
} from "@/components/ServiceIcons";
import ProcessPin from "@/components/ProcessPin";

export const metadata: Metadata = {
  description:
    "Powerful digital solutions built for your growth — website development, mobile apps, Shopify stores, digital marketing, UI/UX design and video editing.",
  alternates: { canonical: "/services" },
};

const trustBadges = [
  { title: "Strategy First", sub: "Approach" },
  { title: "Modern & Scalable", sub: "Solutions" },
  { title: "Quality & Timely", sub: "Delivery" },
];

const TechPillLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[15px] font-semibold text-[#c7cbd6]">{children}</span>
);

const techPills = [
  <>
    <ReactIcon /> <TechPillLabel>React</TechPillLabel>
  </>,
  <>
    <NextJsIcon /> <TechPillLabel>Next.js</TechPillLabel>
  </>,
  <>
    <ReactNativeIcon /> <TechPillLabel>React Native</TechPillLabel>
  </>,
  <>
    <ShopifyIcon /> <TechPillLabel>Shopify</TechPillLabel>
  </>,
  <>
    <PythonIcon /> <TechPillLabel>Python</TechPillLabel>
  </>,
  <>
    <NodeJsIcon /> <TechPillLabel>Node.js</TechPillLabel>
  </>,
  <>
    <MongoDbIcon /> <TechPillLabel>MongoDB</TechPillLabel>
  </>,
  <>
    <FirebaseIcon /> <TechPillLabel>Firebase</TechPillLabel>
  </>,
  <>
    <TailwindIcon /> <TechPillLabel>Tailwind CSS</TechPillLabel>
  </>,
  <>
    <TypeScriptIcon /> <TechPillLabel>TypeScript</TechPillLabel>
  </>,
  <>
    <JavaScriptIcon /> <TechPillLabel>JavaScript</TechPillLabel>
  </>,
  <>
    <FigmaIcon /> <TechPillLabel>Figma</TechPillLabel>
  </>,
];

const services = [
  {
    tile: <WebDevTile />,
    title: "Website Development",
    desc: "High-performance, responsive websites tailored to your business goals.",
  },
  {
    tile: <MobileAppTile />,
    title: "Mobile App Development",
    desc: "Scalable mobile apps for iOS and Android built for smooth user experiences.",
  },
  {
    tile: <ShopifyDevTile />,
    title: "Shopify Development",
    desc: "Custom Shopify stores designed to strengthen your brand and drive conversions.",
  },
  {
    tile: <EcommerceTile />,
    title: "E-Commerce Development",
    desc: "Conversion-focused e-commerce experiences built to make online selling easier.",
  },
  {
    tile: <AiSolutionsTile />,
    title: "AI Solutions",
    desc: "Intelligent AI-powered solutions that automate workflows and unlock new possibilities.",
  },
  {
    tile: <UiuxTile />,
    title: "UI/UX Design",
    desc: "Intuitive digital experiences designed to be clear, engaging, and easy to use.",
  },
  {
    tile: <CustomSolutionsTile />,
    title: "Custom Digital Solutions",
    desc: "Purpose-built digital products, platforms, and business tools designed around your needs.",
  },
  {
    tile: <WebDevTile />,
    title: "Full-Stack Development",
    desc: "Complete web applications with modern frontend, backend, APIs, databases, and integrations.",
  },
  {
    tile: <AiSolutionsTile />,
    title: "AI Automation",
    desc: "AI-powered workflows and intelligent automation that reduce repetitive work and improve efficiency.",
  },
  {
    tile: <CustomSolutionsTile />,
    title: "API & System Integration",
    desc: "Connect your products, APIs, databases, AI services, and third-party platforms into one seamless system.",
  },
  {
    tile: <UiuxTile />,
    title: "Product Design",
    desc: "From wireframes to polished interfaces, we design digital products around real user needs.",
  },
  {
    tile: <CustomSolutionsTile />,
    title: "MVP Development",
    desc: "Turn your idea into a functional, scalable MVP built for validation, launch, and growth.",
  },
];

const stats = [
  { icon: <SmileIcon />, number: "10+", label: "Happy Clients" },
  { icon: <BriefcaseIcon />, number: "20+", label: "Projects Completed" },
  { icon: <RocketStatIcon />, number: "3+", label: "Years of Experience" },
  { icon: <MedalIcon />, number: "98%", label: "Client Satisfaction" },
  { icon: <GlobeIcon />, number: "5+", label: "Countries Served" },
];

const process = [
  { icon: <DiscoverIcon />, title: "Discover", desc: "We understand your ideas, business goals and target audience." },
  { icon: <PlanIcon />, title: "Plan", desc: "We create a strategy, project plan and milestones for successful delivery." },
  { icon: <DesignIcon />, title: "Design", desc: "Our team designs intuitive UI/UX and engaging experiences." },
  { icon: <DevelopIcon />, title: "Develop", desc: "We build clean, scalable and high-performing digital solutions." },
  { icon: <DeliverIcon />, title: "Deliver", desc: "We test, launch and provide ongoing support for your growth." },
];

const included = [
  { icon: <OwnershipIcon />, title: "Full Source Code Ownership", desc: "Everything we build belongs to you — no lock-in, no hidden strings." },
  { icon: <SupportIcon />, title: "30-Day Free Support", desc: "We stay close after launch to fix, tune and help you settle in." },
  { icon: <SeoIcon />, title: "SEO-Ready Foundation", desc: "Clean structure and fast pages built to help you get found." },
  { icon: <ResponsiveIcon />, title: "Fully Responsive Builds", desc: "Looks and works great on every screen, from mobile to desktop." },
  { icon: <SpeedIcon />, title: "Performance Optimized", desc: "Fast load times and smooth interactions, tuned from day one." },
  { icon: <TransparentIcon />, title: "Transparent Pricing", desc: "Clear scope and cost upfront — no surprise invoices later." },
];

export default function ServicesPage() {
  return (
    <>
      <ServicesAnimations />

      <Navbar active="Services" />

      {/* ================= HERO ================= */}
      <section className="hero-photo relative overflow-hidden max-w-[1360px] mx-auto px-16 pt-16 pb-14 max-lg:px-6 max-lg:pt-12 max-lg:pb-10">
       {/* Background image */}
<div
  className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/services-hero-bg.png')",
  }}
/>

{/* Dark overlay — keeps text readable while image remains visible */}
<div
  className="absolute inset-0 -z-10"
  style={{
    background:
      "linear-gradient(90deg, var(--hero-ov-1) 0%, var(--hero-ov-2) 45%, var(--hero-ov-3) 100%)",
  }}
/>

{/* Soft vignette for better readability */}
<div
  className="absolute inset-0 -z-10"
  style={{
    background:
      "radial-gradient(ellipse 75% 65% at 50% 45%, var(--hero-vg-1) 0%, var(--hero-vg-2) 65%, var(--hero-vg-3) 100%)",
  }}
/>

        <div className="relative z-10 text-center max-w-[820px] mx-auto">
          <span id="servicesEyebrow" className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-violet-400/25 px-4 py-2 mb-6 opacity-0">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span className="text-[12px] font-bold tracking-[1.5px] uppercase text-[#c7cbd6]">WHAT WE DO</span>
          </span>

          <h1 id="servicesHeading" className="font-extrabold text-[46px] leading-[1.15] tracking-[-1px] mb-6 max-lg:text-[32px] max-sm:text-[27px]">
            <span className="heading-line">
              <span className="heading-inner">We Build Digital Products That</span>
            </span>
            <span className="heading-line">
              <span className="heading-inner">
                Built <span className="bg-gradient-to-r from-brand-400 to-violet-400 bg-clip-text text-transparent">Create Real Business Value.</span>
              </span>
            </span>
          </h1>

          <p id="servicesSub" className="text-slate-200 text-[16px] leading-[1.75] max-w-[620px] mx-auto mb-10 opacity-0">
            Strategy, design, development and digital growth brought together to turn ideas into experiences that perform.
          </p>

          <div id="trustRow" className="flex items-center justify-center flex-wrap gap-x-10 gap-y-5 pb-10 border-b border-white/10 max-sm:gap-x-6">
            {trustBadges.map((b) => (
              <div key={b.title} className="trust-badge opacity-0 flex items-center gap-3 text-left">
                <span className="w-9 h-9 rounded-full border border-violet-400/40 text-violet-400 flex items-center justify-center flex-shrink-0">
                  <CheckIcon />
                </span>
                <span className="text-[14px] font-semibold leading-snug">
                  {b.title}
                  <br />
                  {b.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* ================= CORE SERVICES ================= */}
<section
  className="
    relative
    max-w-[1360px]
    mx-auto

    px-16
    pt-16
    pb-6

    max-xl:px-10

    max-lg:px-6
    max-lg:pt-10
    max-lg:pb-10

    max-sm:px-5
    max-sm:pt-8
  "
>
  {/* ================= SECTION HEADER ================= */}
  <div
    className="
      text-center
      mb-14

      max-lg:mb-10

      max-sm:mb-8
    "
  >
    <h2
      className="
        font-extrabold

        text-[36px]

        leading-tight

        tracking-[-0.5px]

        mb-4

        max-lg:text-[27px]

        max-sm:text-[25px]
      "
    >
      Our Core{" "}
      <span className="text-brand-500">
        Services
      </span>
    </h2>

    <p
      className="
        text-muted
        text-[16px]

        max-w-[600px]

        mx-auto

        max-sm:text-[14px]
        max-sm:leading-[1.7]
      "
    >
      We combine creativity, technology and strategy to
      deliver digital products that make a real impact.
    </p>
  </div>

  {/* =========================================================
      SERVICES GRID

      DESKTOP:
      3 columns

      TABLET / MOBILE:
      vertical sticky card stack
  ========================================================== */}

  <div
    id="servicesGrid"
    className="
      grid
      grid-cols-3
      gap-6

      /* ==========================================
         TABLET + MOBILE
      ========================================== */

      max-lg:block

      max-lg:relative
    "
  >
    {services.map((s, index) => (
      <div
        key={s.title}
        style={{
          zIndex: index + 1,
        }}
        className="
          service-card

          group

          rounded-2xl

          border
          border-white/10

          /*
           * IMPORTANT:
           * Opaque background so the previous card
           * doesn't show through.
           */
          bg-card2

          p-8

          flex
          gap-5

          /*
           * Desktop
           */
          min-h-[190px]

          transition-all
          duration-500

          hover:border-brand-500/30
          hover:bg-card2

          /* ==========================================
             TABLET
          ========================================== */

          max-lg:sticky

          max-lg:top-[110px]

          max-lg:w-full

          max-lg:max-w-[720px]

          max-lg:mx-auto

          max-lg:min-h-[210px]

          max-lg:mb-8

          max-lg:p-7

          /*
           * Keeps the cards stacked nicely.
           */
          max-lg:rounded-2xl

          /* ==========================================
             MOBILE
          ========================================== */

          max-sm:top-[90px]

          max-sm:min-h-[200px]

          max-sm:p-6

          max-sm:gap-4

          max-sm:mb-6

          max-sm:rounded-[20px]
        "
      >
        {/* =====================================================
            SERVICE TILE / ICON
        ====================================================== */}

        <div
          className="
            shrink-0

            max-sm:scale-90
            max-sm:origin-top-left
          "
        >
          {s.tile}
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="min-w-0">
          {/* TITLE */}

          <h3
            className="
              font-bold

              text-[19px]

              mb-2.5

              leading-tight

              max-sm:text-[18px]
            "
          >
            {s.title}
          </h3>

          {/* DESCRIPTION */}

          <p
            className="
              text-[14.5px]

              text-muted

              leading-relaxed

              mb-5

              max-sm:text-[14px]

              max-sm:leading-[1.65]
            "
          >
            {s.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* ================= TECH MARQUEE ================= */}
      <section className="relative border-t border-white/[0.06] py-9 mt-10 max-sm:py-7">
        <div className="max-w-[1360px] mx-auto px-16 mb-6 max-lg:px-6">
          <span className="text-[13px] font-semibold tracking-[1.5px] uppercase text-low max-sm:text-[11px]">Built with modern technology</span>
        </div>
        <TechMarquee pills={techPills} duration={30} />
      </section>

      {/* ================= WHY CHOOSE ZANDRELIX ================= */}
      <section className="relative max-w-[1360px] mx-auto px-16 py-10 max-lg:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card2/50 p-10 max-sm:p-6">
          <div
            aria-hidden
            className="dot-texture pointer-events-none absolute inset-0 opacity-20"
            style={{
              WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 30%, #000 30%, transparent 78%)",
              maskImage: "radial-gradient(ellipse 80% 80% at 50% 30%, #000 30%, transparent 78%)",
            }}
          />
          <div className="relative text-center mb-12">
            <span className="text-brand-400 text-[13px] font-bold tracking-[2px] uppercase mb-4 block">
              Why Choose Zandrelix?
            </span>
            <h2 className="font-extrabold text-[32px] leading-tight tracking-[-0.5px] max-lg:text-[25px]">
              We Help <span className="text-brand-500">Startups And Brands</span> Succeed
            </h2>
          </div>

          <div id="statsRow" className="relative grid grid-cols-5 gap-6 max-lg:grid-cols-3 max-sm:grid-cols-2">
            {stats.map((s) => (
              <div key={s.label} className="stat-item opacity-0 text-center">
                <span className="inline-flex w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 items-center justify-center text-brand-400 mb-3">
                  {s.icon}
                </span>
                <b className="block text-[28px] font-extrabold mb-0.5">{s.number}</b>
                <span className="text-[13px] text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT'S INCLUDED ================= */}
      <section className="relative max-w-[1360px] mx-auto px-16 py-16 max-lg:px-6 max-lg:py-12">
        <div className="text-center mb-14">
          <span className="text-brand-400 text-[13px] font-bold tracking-[2px] uppercase mb-4 block">Every Project Includes</span>
          <h2 className="font-extrabold text-[34px] leading-tight tracking-[-0.5px] max-lg:text-[26px]">
            No Hidden Extras. <span className="text-brand-500">Just Real Value.</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {included.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-white/10 bg-card2/40 p-7 flex gap-4 hover:border-brand-500/30 transition-colors"
            >
              <span className="flex-shrink-0 inline-flex w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/20 items-center justify-center text-brand-400">
                {it.icon}
              </span>
              <div>
                <h3 className="font-bold text-[16px] mb-1.5">{it.title}</h3>
                <p className="text-[13.5px] text-muted leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

  {/* ================= PROCESS (pinned) ================= */}
        <ProcessPin />

      {/* ================= CTA ================= */}
      <section className="relative max-w-[1360px] mx-auto px-16 pb-24 max-lg:px-6 pt-24">
        <div
          className="relative rounded-2xl border border-white/10 overflow-hidden text-center p-14 max-lg:p-8"
          style={{ background: "linear-gradient(135deg, #0b1230 0%, #05060d 65%)" }}
        >
          <span className="text-[12.5px] font-semibold text-muted mb-3 block">Ready to get started?</span>
          <h2 className="font-extrabold text-[29px] leading-tight tracking-[-0.5px] mb-4 max-lg:text-[23px]">
            Let&apos;s build something <span className="text-brand-500">remarkable.</span>
          </h2>
          <p className="text-muted text-[14.5px] leading-relaxed max-w-[440px] mx-auto mb-7">
            Tell us what you&apos;re building and let&apos;s turn your idea into a digital experience people
            remember.
          </p>
          <MagneticLink
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-violet-500 hover:opacity-90 text-white font-semibold text-[14.5px] px-7 py-[13px] rounded-full transition-opacity shadow-[0_10px_30px_-8px_rgba(139,92,246,0.6)]"
          >
            Start Your Project
            <ArrowRightTiny />
          </MagneticLink>
        </div>
      </section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function SmileIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14s1.5 2 3.5 2 3.5-2 3.5-2" />
      <line x1="9" y1="9.5" x2="9.01" y2="9.5" />
      <line x1="15" y1="9.5" x2="15.01" y2="9.5" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="7.5" width="19" height="12" rx="2" />
      <path d="M8 7.5V5.5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="2.5" y1="12.5" x2="21.5" y2="12.5" />
    </svg>
  );
}

function RocketStatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c3 2 5 6 5 10 0 2-1 4-1 4H8s-1-2-1-4c0-4 2-8 5-10Z" />
      <circle cx="12" cy="9" r="1.6" />
      <path d="M8.5 15 6 21l3-1.5M15.5 15 18 21l-3-1.5" />
    </svg>
  );
}

function MedalIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="15" r="6" />
      <path d="m8.5 10.5-2.8-6M15.5 10.5l2.8-6M12 12v6" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  );
}

/* ---------- Process step icons ---------- */

function DiscoverIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="20" y1="20" x2="15.3" y2="15.3" />
    </svg>
  );
}

function PlanIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 3.5h6a1 1 0 0 1 1 1V6H8V4.5a1 1 0 0 1 1-1Z" />
      <line x1="8.5" y1="11" x2="15.5" y2="11" />
      <line x1="8.5" y1="14.5" x2="15.5" y2="14.5" />
      <line x1="8.5" y1="18" x2="12.5" y2="18" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19 4.5 11.5a2.1 2.1 0 0 1 0-3l1-1a2.1 2.1 0 0 1 3 0L16 15" />
      <path d="M15 8l1-1a2.1 2.1 0 0 1 3 0l0 0a2.1 2.1 0 0 1 0 3l-1 1" />
      <path d="M12 19l-4 1 1-4Z" />
    </svg>
  );
}

function DevelopIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8.5 8 4 12 8.5 16" />
      <polyline points="15.5 8 20 12 15.5 16" />
      <line x1="13.5" y1="6" x2="10.5" y2="18" />
    </svg>
  );
}

function DeliverIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c3 2 5 6 5 10 0 2-1 4-1 4H8s-1-2-1-4c0-4 2-8 5-10Z" />
      <circle cx="12" cy="9" r="1.6" />
      <path d="M8.5 15 6 21l3-1.5M15.5 15 18 21l-3-1.5" />
    </svg>
  );
}

/* ---------- What's Included icons ---------- */

function OwnershipIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" />
      <path d="m9 12.5 2 2 4-4" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5l3.2 1.9" />
    </svg>
  );
}

function SeoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19V10M9.5 19V6M15 19v-7M20.5 19V4" />
    </svg>
  );
}

function ResponsiveIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="4.5" width="14" height="10" rx="1.5" />
      <line x1="6" y1="18" x2="13" y2="18" />
      <rect x="15.5" y="9" width="6" height="10.5" rx="1.3" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 13 15.5 9" />
      <path d="M8.5 3.5h7" />
    </svg>
  );
}

function TransparentIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  );
}
