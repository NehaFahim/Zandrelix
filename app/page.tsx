"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import MagneticLink from "@/components/MagneticLink";
import HeroAnimations from "@/components/HeroAnimations";
import TechMarquee from "@/components/TechMarquee";
import ScrollReveal from "@/components/ScrollReveal";
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
  UiuxTile,
  ArrowRightTiny,
  AiSolutionsTile,
  CustomSolutionsTile,
} from "@/components/ServiceIcons";
import { ArrowRight, PaletteIcon, PenTool, Sparkles } from "lucide-react";
import SimpleProcess from "@/components/simpleprocess";
import PromoVideoSection from "@/components/PromoVideoSection";
import { motion } from "framer-motion";
import Manifesto from "@/components/Manifesto";
import ServicesPin from "@/components/ServicesPin";

const homeServices = [
  {
    tile: <WebDevTile />,
    title: "Website Development",
    desc: "Modern, responsive and high-performance websites.",
  },
  {
    tile: <MobileAppTile />,
    title: "Mobile App Development",
    desc: "Cross-platform apps for iOS and Android.",
  },
  {
    tile: <ShopifyDevTile />,
    title: "Shopify Development",
    desc: "Custom stores designed to strengthen your brand and drive sales.",
  },
  {
    tile: <UiuxTile />,
    title: "UI/UX Design",
    desc: "Intuitive interfaces and digital experiences built around your users.",
  },
  {
    tile: <AiSolutionsTile />,
    title: "AI Solutions",
    desc: "Intelligent digital solutions powered by modern AI.",
  },
  {
    tile: <CustomSolutionsTile />,
    title: "Custom Digital Solutions",
    desc: "Purpose-built platforms and digital tools for your business.",
  },
];

const homeProcess = [
  { step: "01", title: "Discover", desc: "We understand your goals." },
  { step: "02", title: "Design", desc: "We craft the experience." },
  { step: "03", title: "Build", desc: "We ship clean, scalable code." },
  { step: "04", title: "Grow", desc: "We support you after launch." },
];

const PillLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[15px] font-semibold text-[#c7cbd6]">{children}</span>
);

const techPills = [
  <>
    <ReactIcon /> <PillLabel>React</PillLabel>
  </>,
  <>
    <NextJsIcon /> <PillLabel>Next.js</PillLabel>
  </>,
  <>
    <ReactNativeIcon /> <PillLabel>React Native</PillLabel>
  </>,
  <>
    <ShopifyIcon /> <PillLabel>Shopify</PillLabel>
  </>,
  <>
    <PythonIcon /> <PillLabel>Python</PillLabel>
  </>,
  <>
    <NodeJsIcon /> <PillLabel>Node.js</PillLabel>
  </>,
  <>
    <MongoDbIcon /> <PillLabel>MongoDB</PillLabel>
  </>,
  <>
    <FirebaseIcon /> <PillLabel>Firebase</PillLabel>
  </>,
  <>
    <TailwindIcon /> <PillLabel>Tailwind CSS</PillLabel>
  </>,
  <>
    <TypeScriptIcon /> <PillLabel>TypeScript</PillLabel>
  </>,
  <>
    <JavaScriptIcon /> <PillLabel>JavaScript</PillLabel>
  </>,
  <>
    <FigmaIcon /> <PillLabel>Figma</PillLabel>
  </>,
<>
  <PaletteIcon /> <PillLabel>UI/UX Design</PillLabel>
</>
];

export default function HomePage() {
  return (
    <>
      <HeroAnimations />
      <div className="min-h-screen bg-bg0 relative">
        {/* NAVBAR */}
        <Navbar variant="pill" active="Home" animateId="siteNav" />

        {/* HERO */}
        <section className="relative max-w-[1440px] mx-auto px-16 pt-24 pb-16 max-xl:px-10 max-lg:px-6 max-lg:pt-12 max-md:pt-8 max-sm:px-5 max-sm:pb-12 grid grid-cols-[1fr_1fr] items-center gap-10 max-lg:grid-cols-1">
          <div className="max-w-[640px]">
            {/* badge */}
            <a
              href="#"
              id="heroBadge"
              className="group inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/10 pl-3 pr-4 py-[9px] mb-10 hover:border-white/20 transition-colors opacity-0"
            >
              <span className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7Z" />
                </svg>
              </span>
              <span className="text-[14px] font-medium text-[#c7cbd6]">DIGITAL PRODUCTS, BUILT TO PERFORM</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8b93a6"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </a>

            {/* heading */}
            <h1
              className="font-sans font-extrabold text-[54px] leading-[1.09] tracking-[-1px] mb-7 max-xl:text-[48px] max-lg:text-[38px] max-md:text-[32px] max-sm:text-[28px]"
              style={{ perspective: 600 }}
            >
              <span className="heading-line block overflow-hidden">
                <span className="heading-inner block">We Turn Bold Ideas &amp; Into Digital Products</span>
              </span>
              <span className="heading-line block overflow-hidden">
                <span className="heading-inner block text-brand-500">That Perform</span>
              </span>
            </h1>

            {/* description */}
            <p id="heroDesc" className="text-muted text-[17px] leading-[1.7] max-w-[500px] mb-10 font-normal opacity-0 max-lg:text-[15.5px] max-md:text-[15px] max-sm:text-[14px] max-sm:mb-8">
              Zandrelix is a digital solutions studio helping startups and ambitious businesses turn ideas into high-performance websites, applications, e-commerce experiences and digital products.
            </p>

            {/* CTAs */}
            <div id="heroCtas" className="flex items-center gap-5 flex-wrap mb-12 opacity-0 max-sm:gap-3 max-sm:mb-8">
              <MagneticLink
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-brand-600 text-white font-semibold text-[16px] pl-8 pr-6 py-[15px] rounded-full transition-shadow duration-300 shadow-[0_8px_30px_-6px_rgba(47,111,237,0.65)] hover:shadow-[0_8px_36px_-2px_rgba(47,111,237,0.85)] max-md:text-[14px] max-md:px-6 max-md:py-3 max-sm:w-full max-sm:justify-center"
              >
                Get Free Consultation
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </MagneticLink>
              <MagneticLink
                href="/portfolio"
                className="group inline-flex items-center gap-2.5 border border-white/15 text-white font-semibold text-[16px] px-7 py-[15px] rounded-full hover:bg-white/[0.05] hover:border-white/30 transition-colors duration-300 max-md:text-[14px] max-md:px-6 max-md:py-3 max-sm:w-full max-sm:justify-center"
              >
                Explore Our Work
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="group-hover:scale-110 transition-transform"
                >
                  <path d="M8 5v14l11-7Z" />
                </svg>
              </MagneticLink>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div id="heroVisual" className="relative flex items-center justify-center max-lg:mt-6 max-md:mt-8 max-sm:mt-6 opacity-0" style={{ perspective: 1400 }}>
            <div
              className="hero-glow absolute w-[520px] h-[520px] rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(47,111,237,0.35), transparent 70%)", filter: "blur(50px)" }}
            />
            <Image
              id="heroMockup"
              src="/images/hero-mockup.webp"
              alt="Zandrelix website preview on laptop and mobile"
              width={1280}
              height={960}
              className="relative w-full max-w-[640px] select-none max-lg:max-w-[560px] max-md:max-w-[480px] max-sm:max-w-[360px]"
              style={{ transformStyle: "preserve-3d", willChange: "transform" }}
              draggable={false}
              priority
            />
          </div>
        </section>

        {/* TECH MARQUEE */}
        <section className="relative border-t border-white/[0.06] py-9 max-sm:py-7">
          <div className="max-w-[1440px] mx-auto px-16 mb-6 max-lg:px-6 max-sm:px-5">
            <span className="text-[13px] font-semibold tracking-[1.5px] uppercase text-low max-sm:text-[11px]">Trusted by modern technologies</span>
          </div>
          <TechMarquee pills={techPills} duration={28} />
        </section>

        {/* ================= MANIFESTO (pinned) ================= */}
        <Manifesto />

        {/* ================= SERVICES PREVIEW ================= */}
        {/* <section className="relative border-t border-white/[0.06] max-w-[1440px] mx-auto px-16 py-20 max-xl:px-10 max-lg:px-6 max-lg:py-14 max-sm:px-5 max-sm:py-12">
          <ScrollReveal className="text-center mb-14 max-md:mb-10">
            <span className="text-brand-400 text-[13px] font-bold tracking-[2px] uppercase mb-4 block">WHAT WE BUILD</span>
            <h2 className="font-extrabold text-[36px] leading-tight tracking-[-0.5px] mb-4 max-lg:text-[28px] max-md:text-[25px] max-sm:text-[22px]">
             Digital Solutions Built <span className="text-brand-500">Around Your Goals</span>
            </h2>
            <p className="text-muted text-[16px] leading-relaxed max-w-[560px] mx-auto max-md:text-[14px] max-sm:text-[13.5px]">
             From strategy and design to development and launch, we build digital experiences designed to solve real problems and create measurable value.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-3 gap-6 max-xl:gap-5 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:gap-4">
            {homeServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.06}>
                <div className="service-tilt group h-full rounded-2xl border border-white/10 bg-card2/40 p-7 flex gap-5 transition-transform duration-300 hover:-translate-y-1.5 hover:border-brand-500/30 max-md:p-6 max-sm:p-5 max-sm:gap-4">
                  {s.tile}
                  <div>
                    <h3 className="font-bold text-[17px] mb-2 max-sm:text-[15px]">{s.title}</h3>
                    <p className="text-[13.5px] text-muted leading-relaxed max-sm:text-[13px]">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12" delay={0.1}>
            <MagneticLink
              href="/services"
              className="inline-flex items-center gap-2 border border-white/15 text-white font-semibold text-[15px] px-7 py-[13px] rounded-full hover:bg-white/[0.05] hover:border-white/30 transition-colors max-sm:text-[13px] max-sm:px-5 max-sm:py-3"
            >
              View All Services
              <ArrowRightTiny />
            </MagneticLink>
          </ScrollReveal>
        </section> */}

         {/* ================= SERVICES (pinned horizontal) ================= */}
        <ServicesPin />

        <PromoVideoSection />

        {/* ================= ABOUT / FOUNDERS TEASER ================= */}
       {/* ================= WHO WE ARE ================= */}
<section className="relative border-t border-white/[0.06] max-w-[1440px] mx-auto px-16 py-20 max-xl:px-10 max-lg:px-6 max-lg:py-14 max-sm:px-5 max-sm:py-12">
  <div className="grid grid-cols-[1.05fr_1fr] gap-12 items-center max-lg:grid-cols-1 max-lg:gap-10">

    {/* Left — Who We Are */}
    <ScrollReveal>
      <span className="text-brand-400 text-[13px] font-bold tracking-[2px] uppercase mb-4 block">
        Who We Are
      </span>

      <h2 className="font-extrabold text-[34px] leading-[1.2] tracking-[-0.5px] mb-6 max-w-[420px] max-lg:text-[27px]">
       Small Team. Serious{" "}
        <span className="text-brand-500">Craft. Big Ambition.</span>
      </h2>

      <div className="space-y-4 max-w-[440px]">
        <p className="text-muted text-[15.5px] leading-[1.75] max-md:text-[14.5px] max-sm:text-[13.5px]">
         Zandrelix was built on a simple belief: great digital products should do more than look good they should make a difference.
        </p>

        <p className="text-muted text-[15.5px] leading-[1.75] max-md:text-[14.5px] max-sm:text-[13.5px]">
          We combine development, design and problem-solving to help startups and businesses turn ambitious ideas into polished digital experiences that people remember and businesses can grow with.
        </p>
      </div>
      
      <MagneticLink
        href="/about"
        className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold text-[15px] px-7 py-[13px] rounded-full mt-7 shadow-[0_8px_30px_-6px_rgba(47,111,237,0.65)] hover:shadow-[0_8px_36px_-2px_rgba(47,111,237,0.85)] transition-shadow"
      >
        Meet The Team
        <ArrowRightTiny />
      </MagneticLink>
    </ScrollReveal>

    {/* Right — Stats */}
    <ScrollReveal delay={0.1}>
      <div className="rounded-2xl border border-white/10 bg-card2/60 p-8 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-lg:gap-y-8 max-md:p-6 max-sm:p-5 max-sm:gap-x-3 max-sm:gap-y-7">

        {/* Founders */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="stat-ico">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5b8def"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </span>

          <div>
            <b className="block text-[24px] font-extrabold leading-none mb-1 max-sm:text-[21px]">
              2
            </b>
            <span className="text-[12.5px] text-muted max-sm:text-[11px]">
              Founders
            </span>
          </div>
        </div>

        {/* Projects */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="stat-ico">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5b8def"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="m22 8-4 4-2-2" />
            </svg>
          </span>

          <div>
            <b className="block text-[24px] font-extrabold leading-none mb-1 max-sm:text-[21px]">
              10+
            </b>
            <span className="text-[12.5px] text-muted max-sm:text-[11px]">
              Projects Completed
            </span>
          </div>
        </div>

        {/* Client Focused */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="stat-ico">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5b8def"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
            </svg>
          </span>

          <div>
            <b className="block text-[24px] font-extrabold leading-none mb-1 max-sm:text-[21px]">
              100%
            </b>
            <span className="text-[12.5px] text-muted max-sm:text-[11px]">
              Client Focused
            </span>
          </div>
        </div>

        {/* Shared Vision */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="stat-ico">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5b8def"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3.2" />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </span>

          <div>
            <b className="block text-[24px] font-extrabold leading-none mb-1 max-sm:text-[21px]">
              1
            </b>
            <span className="text-[12.5px] text-muted max-sm:text-[11px]">
              Shared Vision
            </span>
          </div>
        </div>

      </div>
    </ScrollReveal>
  </div>
</section>
        {/* ================= Projects ================= */}

<section className="relative border-t border-white/[0.06] max-w-[1440px] mx-auto px-16 py-20 max-xl:px-10 max-lg:px-6 max-lg:py-14 max-sm:px-5 max-sm:py-12">
  <div className="max-w-[1320px] mx-auto">

    {/* Section Header */}
    <div className="flex items-end justify-between gap-8 mb-8 max-lg:gap-6 max-md:flex-col max-md:items-start">
  <div>
    <span className="text-brand-400 text-[13px] font-bold tracking-[2px] uppercase block mb-3 max-sm:text-[11px]">
      Our Work
    </span>

    <h2 className="font-extrabold text-[32px] leading-[1.2] tracking-[-0.5px] mb-3 max-lg:text-[27px] max-md:text-[25px] max-sm:text-[22px]">
      Featured Projects
    </h2>

    <p className="text-muted text-[14.5px] leading-relaxed max-w-[460px] max-sm:text-[13px]">
      Here are some of our recent projects that made an impact.
    </p>
  </div>

  <MagneticLink
    href="/portfolio"
    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-[13px] font-semibold text-white hover:border-brand-500/50 hover:bg-white/[0.03] transition-all max-sm:text-[12px] max-sm:px-4 max-sm:py-2.5"
  >
    View All Projects
    <ArrowRightTiny />
  </MagneticLink>
</div>

    {/* Projects Grid */}
    <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1">

      {/* Project 1 */}
      <div className="group rounded-xl border border-white/10 bg-card2/50 overflow-hidden hover:border-brand-500/30 transition-all duration-300">
<a
  href="https://pixelcraft.design"
  target="_blank"
  rel="noopener noreferrer"
  className="group block rounded-xl border border-white/10 bg-card2/50 overflow-hidden hover:border-brand-500/30 transition-all duration-300"
>
        <div className="relative aspect-[1.55/1] overflow-hidden bg-[#0b1020] max-sm:aspect-[16/10]">
          <Image
            src="/assets/pixel.jpg"
            alt="Modern SaaS Platform"
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-4 max-sm:p-3.5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-[13px] font-bold text-white max-sm:text-[12px]">
              Design Studio Website
            </h3>

            <span className="text-brand-400 text-[13px]">
              ↗
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-3">
            <span className="text-[10px] text-muted border border-white/10 rounded-full px-2 py-1 max-sm:text-[9px]">
              Next.js
            </span>
            <span className="text-[10px] text-muted border border-white/10 rounded-full px-2 py-1 max-sm:text-[9px]">
              React
            </span>
            <span className="text-[10px] text-muted border border-white/10 rounded-full px-2 py-1 max-sm:text-[9px]">
              Tailwind
            </span>
          </div>
        </div>
        </a>
      </div>

      {/* Project 2 */}
      <div className="group rounded-xl border border-white/10 bg-card2/50 overflow-hidden hover:border-brand-500/30 transition-all duration-300">
<a
  href="https://www.homeschoolingwithmbu.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="group block rounded-xl border border-white/10 bg-card2/50 overflow-hidden hover:border-brand-500/30 transition-all duration-300"
>
        <div className="relative aspect-[1.55/1] overflow-hidden bg-[#0b1020] max-sm:aspect-[16/10]">
          <Image
            src="/assets/mbu.jpg"
            alt="E-Commerce Shopify Store"
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-4 max-sm:p-3.5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-[13px] font-bold text-white max-sm:text-[12px]">
              grow with fun MBU
            </h3>

            <span className="text-brand-400 text-[13px]">
              ↗
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-3">
            <span className="text-[10px] text-muted border border-white/10 rounded-full px-2 py-1 max-sm:text-[9px]">
              Shopify
            </span>
            <span className="text-[10px] text-muted border border-white/10 rounded-full px-2 py-1 max-sm:text-[9px]">
              Liquid
            </span>
            <span className="text-[10px] text-muted border border-white/10 rounded-full px-2 py-1 max-sm:text-[9px]">
              JavaScript
            </span>
          </div>
        </div>
        </a>
      </div>

      {/* Project 3 */}
      <div className="group rounded-xl border border-white/10 bg-card2/50 overflow-hidden hover:border-brand-500/30 transition-all duration-300">
<a
  href="https://furniture-store-puce.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="group block rounded-xl border border-white/10 bg-card2/50 overflow-hidden hover:border-brand-500/30 transition-all duration-300"
>
        <div className="relative aspect-[1.55/1] overflow-hidden bg-[#0b1020] max-sm:aspect-[16/10]">
          <Image
            src="/assets/furniture.png"
            alt="Furniture Store Website"
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-4 max-sm:p-3.5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-[13px] font-bold text-white max-sm:text-[12px]">
              Furniture Store Website
            </h3>

            <span className="text-brand-400 text-[13px]">
              ↗
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-3">
            <span className="text-[10px] text-muted border border-white/10 rounded-full px-2 py-1 max-sm:text-[9px]">
              Next.js
            </span>
            <span className="text-[10px] text-muted border border-white/10 rounded-full px-2 py-1 max-sm:text-[9px]">
              Figma
            </span>
            <span className="text-[10px] text-muted border border-white/10 rounded-full px-2 py-1 max-sm:text-[9px]">
              Sanity CMS
            </span>
          </div>
        </div>
        </a>
      </div>

      {/* Project 4 */}
      <div className="group rounded-xl border border-white/10 bg-card2/50 overflow-hidden hover:border-brand-500/30 transition-all duration-300">
<a
  href="https://auditranker.com"
  target="_blank"
  rel="noopener noreferrer"
  className="group block rounded-xl border border-white/10 bg-card2/50 overflow-hidden hover:border-brand-500/30 transition-all duration-300"
>
        <div className="relative aspect-[1.55/1] overflow-hidden bg-[#0b1020] max-sm:aspect-[16/10]">
          <Image
            src="/assets/audit.jpg"
            alt="AI Dashboard Application"
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-4 max-sm:p-3.5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-[13px] font-bold text-white max-sm:text-[12px]">
              AI Dashboard Application
            </h3>

            <span className="text-brand-400 text-[13px]">
              ↗
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-3">
            <span className="text-[10px] text-muted border border-white/10 rounded-full px-2 py-1 max-sm:text-[9px]">
              Next.js
            </span>
            <span className="text-[10px] text-muted border border-white/10 rounded-full px-2 py-1 max-sm:text-[9px]">
              AI API
            </span>
            <span className="text-[10px] text-muted border border-white/10 rounded-full px-2 py-1 max-sm:text-[9px]">
              Chart.js
            </span>
          </div>
        </div>
        </a>
      </div>

    </div>
  </div>
</section>

<SimpleProcess />

{/* =========================================================
    SELECTED CASE STUDIES — HOME PAGE
========================================================= */}

<section className="relative overflow-hidden py-20 md:py-28">
  {/* Background Glow */}
  <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[140px]" />

  <div className="mx-auto max-w-7xl px-5 md:px-8">

    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end"
    >
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-400 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5" />
          Selected Case Studies
        </span>

        <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Real work.
          <br />
          <span className="bg-gradient-to-r from-brand-400 via-brand-500 to-violet-400 bg-clip-text text-transparent">
            Real impact.
          </span>
        </h2>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#aeb4c3] md:text-base">
          A glimpse into how we turn business challenges into
          high-performing digital experiences that create real value.
        </p>
      </div>

      {/* Desktop View All Button */}
     <MagneticLink
    href="/case-studies"
    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-[13px] font-semibold text-white hover:border-brand-500/50 hover:bg-white/[0.03] transition-all max-sm:text-[12px] max-sm:px-4 max-sm:py-2.5"
  >
    View All Case Studies
    <ArrowRightTiny />
  </MagneticLink>
    </motion.div>


    {/* =====================================================
        FEATURED PROJECTS
    ===================================================== */}

    <div className="space-y-6 md:space-y-8">

      {/* Project 01 */}
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0e1f]"
      >
        <div className="grid items-stretch lg:grid-cols-2">

          {/* Image */}
          <div className="relative min-h-[280px] overflow-hidden md:min-h-[400px]">
            <Image
              src="/assets/jsm.png"
              alt="JSM Advertising website case study"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0e1f] lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05060d]/70 via-transparent to-transparent" />

            <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
              01 / Website Development
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-400">
              JSM Advertising
            </span>

            <h3 className="mt-3 text-2xl font-bold leading-tight text-white md:text-4xl">
              Turning an Offline Brand Into a Strong Digital Presence
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#aeb4c3] md:text-base">
              We transformed JSM Advertising&apos;s online presence with a
              modern, responsive website focused on visibility,
              performance and lead generation.
            </p>

            {/* Impact */}
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "70% Faster Load Time",
                "40% More Inquiries",
                "SEO Focused",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand-500/20 bg-brand-500/5 px-3 py-1.5 text-xs text-brand-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href="/case-studies"
              className="group/link mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-brand-400"
            >
              View Case Study
              <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </a>

          </div>

        </div>
      </motion.article>

    </div>
    


    {/* =====================================================
        MOBILE / BOTTOM CTA
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-10 text-center md:hidden"
    >
      <a
        href="/case-studies"
        className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-all hover:scale-105"
      >
        View All Case Studies
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </motion.div>

  </div>
</section>
        {/* ================= CONTACT CTA ================= */}
       <section className="relative border-t border-white/[0.06] max-w-[1440px] mx-auto px-16 py-20 pb-24 max-lg:px-6 max-lg:py-14">
  <ScrollReveal>
    <div className="relative min-h-[305px] rounded-2xl border border-white/10 overflow-hidden max-md:min-h-[290px] max-sm:min-h-[320px]">

      {/* Full Card Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-center max-sm:object-[83%_center]"
        />

        {/* Dark overlay — keeps text readable on left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,8,20,0.98) 0%, rgba(5,8,20,0.94) 35%, rgba(5,8,20,0.55) 62%, rgba(5,8,20,0.05) 100%)",
          }}
        />
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-12 max-xl:p-10 max-lg:p-8 max-md:p-7 max-sm:p-6">
        <span className="text-[12.5px] font-semibold text-muted mb-3 block max-sm:text-[12px]">
          HAVE AN IDEA?
        </span>

        <h2 className="font-extrabold text-[29px] leading-[1.2] tracking-[-0.5px] mb-4 max-w-[600px] max-lg:text-[25px] max-md:text-[23px] max-sm:text-[21px]">
          Let&apos;s build something{" "}
          <span className="text-brand-500">remarkable.</span>
        </h2>

        <p className="text-muted text-[14.5px] leading-relaxed max-w-[380px] mb-7 max-md:text-[14px] max-sm:text-[13px] max-sm:max-w-[300px] max-sm:mb-6">
          Tell us what you&apos;re building and let&apos;s turn your idea into
          a digital experience people remember.
        </p>

        <MagneticLink
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-white text-[#0a0d1a] font-semibold text-[14.5px] px-6 py-[13px] rounded-full hover:bg-white/90 transition-colors max-md:text-[14px] max-md:px-5 max-md:py-3 max-sm:text-[13px] max-sm:px-5 max-sm:py-[11px] whitespace-nowrap"
        >
          Start a Conversation
          <ArrowRightTiny />
        </MagneticLink>
      </div>
    </div>
  </ScrollReveal>
</section>
      </div>
    </>
  );
}