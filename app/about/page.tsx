import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MagneticLink from "@/components/MagneticLink";
import AboutAnimations from "@/components/AboutAnimations";
import TechMarquee from "@/components/TechMarquee";
import {
  NextJsIcon,
  ReactIcon,
  TypeScriptIcon,
  NodeJsIcon,
  PythonIcon,
  TailwindIcon,
  ShopifyIcon,
  FirebaseIcon,
  MongoDbIcon,
  FigmaIcon,
  JavaScriptIcon,
} from "@/components/TechIcons";
import { MonitorIcon, SmartphoneIcon } from "lucide-react";
import { PiDesktopFill } from "react-icons/pi";

export const metadata: Metadata = {
  description:
    "Zandrelix is a digital solutions studio focused on building modern websites, applications and digital experiences that help businesses grow, connect and stand out.",
  alternates: { canonical: "/about" },
};

const PillLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[14.5px] font-semibold text-[#c7cbd6]">{children}</span>
);

const techPills = [
  <>
    <NextJsIcon size={18} /> <PillLabel>Next.js</PillLabel>
  </>,
  <>
    <ReactIcon size={18} /> <PillLabel>React</PillLabel>
  </>,
  <>
    <TypeScriptIcon size={18} /> <PillLabel>TypeScript</PillLabel>
  </>,
  <>
    <NodeJsIcon size={18} /> <PillLabel>Node.js</PillLabel>
  </>,
  <>
    <PythonIcon size={18} /> <PillLabel>Python</PillLabel>
  </>,
  <>
    <TailwindIcon size={18} /> <PillLabel>Tailwind CSS</PillLabel>
  </>,
  <>
    <ShopifyIcon size={18} /> <PillLabel>Shopify</PillLabel>
  </>,
  <>
    <FirebaseIcon size={18} /> <PillLabel>Firebase</PillLabel>
  </>,
  <>
    <MongoDbIcon size={18} /> <PillLabel>MongoDB</PillLabel>
  </>,
];

const values = [
  {
    title: "Build With Purpose",
    desc: "Every product should solve a real problem and create real value.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 6v6c0 5 3.6 8.6 8 10 4.4-1.4 8-5 8-10V6l-8-4Z" />
      </svg>
    ),
  },
  {
    title: "Design Matters",
    desc: "Functionality and beautiful experiences should work together.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3Z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: "Technology That Works",
    desc: "We choose modern technology for a reason performance, scalability, maintainability and long-term value.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
      </svg>
    ),
  },
  {
    title: "Your Growth Is Our Win",
    desc: "We treat every project as a partnership and measure our success by the value we create for you",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 20h5v-2a4 4 0 0 0-3-3.87" />
        <path d="M9 20H4v-2a4 4 0 0 1 3-3.87" />
        <circle cx="9" cy="7" r="4" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const services = [
  {
    title: "Web Development",
    desc: "Modern, responsive and high-performance websites built with the latest tech.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Mobile Applications",
    desc: "Cross-platform mobile apps for iOS & Android with smooth user experiences.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <line x1="11" y1="18" x2="13" y2="18" />
      </svg>
    ),
  },
  {
    title: "E-Commerce",
    desc: "High-converting online stores that make it easier for customers to discover, trust and buy.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    title: "AI & Digital Solutions",
    desc: "Intelligent tools and automations that reduce complexity and unlock new possibilities.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 6v6c0 5 3.6 8.6 8 10 4.4-1.4 8-5 8-10V6l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    desc: "Clear, intuitive experiences that put users at the center of every decision.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" opacity=".4" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    title: "Discover",
    desc: "We understand your ideas, requirements and goals.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Strategize",
    desc: "We plan the project and create the right strategy.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Design",
    desc: "We design wireframes & UI/UX prototypes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 8 12 14 22 8 12 2" />
        <polyline points="2 16 12 22 22 16" />
        <polyline points="2 12 12 18 22 12" />
      </svg>
    ),
  },
  {
    title: "Build",
    desc: "We code with clean and scalable technologies.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Launch",
    desc: "We test, deploy and launch your product.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 2-7 20-4-9-9-4 20-7Z" />
        <path d="M22 2 11 13" />
      </svg>
    ),
  },
  {
    title: "Grow",
    desc: "We provide ongoing support and help your business grow.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-4 4" />
      </svg>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.99 3.24 9.22 7.74 10.72.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.15.68-3.81-1.34-3.81-1.34-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.94.1-.73.39-1.22.71-1.5-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.1 1.16a10.7 10.7 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.04 0 4.35-2.65 5.31-5.17 5.59.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.79.54A11.5 11.5 0 0 0 23 11.5C23 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM.5 8.98h4.96V23H.5V8.98Zm7.98 0h4.76v1.92h.07c.66-1.25 2.28-2.57 4.69-2.57 5.02 0 5.95 3.3 5.95 7.6V23h-4.96v-6.28c0-1.5-.03-3.43-2.09-3.43-2.09 0-2.41 1.63-2.41 3.32V23H8.48V8.98Z" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="11" />
    </svg>
  );
}

/* generic icons used as fallbacks for skills without a dedicated brand mark */
function PaletteIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2 2 2 0 0 1 2-2h1.5a2.5 2.5 0 0 0 2.5-2.5C22 6.6 17.5 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10Z" />
      <circle cx="6.5" cy="11.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LayersIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 8 12 14 22 8 12 2" />
      <polyline points="2 16 12 22 22 16" />
      <polyline points="2 12 12 18 22 12" />
    </svg>
  );
}

function SparkleIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 13.8 9 21 12l-7.2 3-1.8 7-1.8-7L3 12l7.2-3L12 2Z" />
    </svg>
  );
}

const skillIconMap: Record<string, React.ReactNode> = {
  "Next.js": <NextJsIcon size={14} />,
  "TypeScript": <TypeScriptIcon size={14} />,
  "React": <ReactIcon size={14} />,
  "React Native": <ReactIcon size={14} />,
  "JavaScript": <JavaScriptIcon size={14} />,
  "Tailwind CSS": <TailwindIcon size={14} />,
  "Python": <PythonIcon size={14} />,
  "FastAPI": <LayersIcon size={14} />,
  "Generative AI": <SparkleIcon size={14} />,
  "RAG": <SparkleIcon size={14} />,
  "AI Integration": <SparkleIcon size={14} />,
  "REST APIs": <LayersIcon size={14} />,
  "Responsive UI": <MonitorIcon size={14} />,
  "Mobile Development": <SmartphoneIcon size={14} />,
  "Web Development": <PiDesktopFill size={14} />,
  "Node.js": <NodeJsIcon size={14} />,
  "Firebase": <FirebaseIcon size={14} />,
  "Shopify": <ShopifyIcon size={14} />,
  "UI/UX Design": <PaletteIcon size={14} />,
  "Figma": <FigmaIcon size={14} />,
  "Design System": <LayersIcon size={14} />,
};

const founders = [
  {
    firstName: "Neha",
    lastName: "Fahim",
    image: "/images/NF.jpeg",
    role: "Co-Founder & Full-Stack & AI Developer",
    bio: "Full-Stack & AI Developer specializing in modern web applications, high-performance frontends, and Generative AI solutions. Passionate about turning complex ideas into scalable, intelligent, and user-friendly digital products.",
    skills: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Figma",
      "Python",
      "FastAPI",
      "Generative AI",
      "RAG",
      "AI Integration",
      "Design System",
      "Web Development",
    ],
    gradient: "linear-gradient(135deg, #7c3aed, #2f6fed)",
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/NehaFahim",
        icon: <GithubIcon />,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/nehafahim/",
        icon: <LinkedinIcon />,
      },
    ],
  },

  {
    firstName: "Suhaib",
    lastName: "Ali",
    image: "/images/suhaib-500x500.jpg",
    role: "Co-Founder & Frontend Developer",
    bio: "Frontend Developer focused on building modern, responsive, and high-performance web and mobile applications. Passionate about clean interfaces, scalable architecture, and creating seamless digital experiences across devices.",
    skills: [
      "Next.js",
      "Shopify",
      "React Native",
      "JavaScript",
      "Tailwind CSS",
      "Firebase",
      "REST APIs",
      "Responsive UI",
      "UI/UX Design",
      "Mobile Development",
    ],
    gradient: "linear-gradient(135deg, #2f6fed, #5b8def)",
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/suhaibkhokar",
        icon: <GithubIcon />,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/suhaib-ali-10964632a/",
        icon: <LinkedinIcon />,
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <AboutAnimations />

      {/* ================= NAVBAR ================= */}
      <Navbar active="About Us" />

      {/* ================= HERO ================= */}
      <section className="relative max-w-[1360px] mx-auto px-16 pt-20 pb-16 grid grid-cols-[1.1fr_1fr] items-center gap-10 max-lg:grid-cols-1 max-lg:px-6 max-lg:pt-12">
        <div>
          <span id="heroBadge" className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/10 px-4 py-2 mb-6 opacity-0">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            <span className="text-[13px] font-medium text-[#c7cbd6]">About Zandrelix</span>
          </span>
          <h1 className="font-extrabold text-[46px] leading-[1.12] tracking-[-1px] mb-6 max-lg:text-[34px]">
            <span className="heading-line">
              <span className="heading-inner">We Build the Digital Future</span>
            </span>
            <span className="heading-line">
              <span className="heading-inner grad-text">of Ambitious Ideas</span>
            </span>
          </h1>
          <p id="heroDesc" className="text-muted text-[16px] leading-[1.75] max-w-[440px] mb-9 opacity-0">
            Zandrelix is a digital solutions studio combining technology, design and strategy to help businesses turn ideas into products that perform, connect and grow.
          </p>
          <div id="heroCtas" className="flex items-center gap-4 flex-wrap opacity-0">
            <MagneticLink
              href="/case-studies"
              className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold text-[15px] px-6 py-[13px] rounded-full shadow-[0_8px_30px_-6px_rgba(47,111,237,0.65)] hover:shadow-[0_8px_36px_-2px_rgba(47,111,237,0.85)] transition-shadow"
            >
              Work With Us
              <ArrowIcon />
            </MagneticLink>
            <MagneticLink
              href="/portfolio"
              className="inline-flex items-center gap-2 border border-white/15 text-white font-semibold text-[15px] px-6 py-[13px] rounded-full hover:bg-white/[0.05] hover:border-white/30 transition-colors"
            >
              Explore Our Work
              <ArrowIcon />
            </MagneticLink>
          </div>
        </div>

        {/* 3D floating logo podium */}
        <div id="heroVisual" className="relative flex items-center justify-center h-[360px] opacity-0" style={{ perspective: 1200 }}>
          <div
            className="absolute w-[380px] h-[380px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(47,111,237,0.28), transparent 70%)", filter: "blur(40px)" }}
          />

          <svg className="absolute w-full h-full" viewBox="0 0 400 360" style={{ overflow: "visible" }}>
            <path
              id="orbitPath1"
              d="M60,120 C40,80 90,40 140,55 C190,70 170,120 210,110"
              fill="none"
              stroke="rgba(91,141,239,0.35)"
              strokeWidth="1"
            />
            <path
              id="orbitPath2"
              d="M340,140 C365,110 350,70 310,75 C275,80 270,110 240,105"
              fill="none"
              stroke="rgba(91,141,239,0.35)"
              strokeWidth="1"
            />
            <circle id="orbitDot1" cx="60" cy="120" r="7" fill="url(#sphereGrad)" />
            <circle id="orbitDot2" cx="340" cy="140" r="6" fill="url(#sphereGrad)" />
            <defs>
              <radialGradient id="sphereGrad" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#bcd4ff" />
                <stop offset="55%" stopColor="#3b6fe0" />
                <stop offset="100%" stopColor="#0d1a3a" />
              </radialGradient>
            </defs>
          </svg>

          <Image
            id="heroLogo"
            src="/images/zk-mark.png"
            alt="Zandrelix ZK mark"
            width={190}
            height={190}
            className="relative z-10 w-[190px] h-auto"
            style={{
              filter:
                "drop-shadow(0 12px 34px rgba(47,111,237,0.55)) drop-shadow(0 0 30px rgba(120,160,255,0.35))",
              transform: "translateY(-18px)",
            }}
          />

          <div className="absolute bottom-[18px] w-[260px] h-[70px]" style={{ zIndex: 1 }}>
            <div
              className="absolute inset-0 rounded-[50%] border border-brand-500/40"
              style={{ background: "radial-gradient(ellipse at center, rgba(47,111,237,0.22), transparent 70%)" }}
            />
            <div
              className="absolute left-1/2 -translate-x-1/2 top-[14px] w-[220px] h-[46px] rounded-[50%] border border-white/10"
              style={{ background: "linear-gradient(180deg, rgba(30,40,66,0.9), rgba(8,11,22,0.95))" }}
            />
            <div
              className="absolute left-1/2 -translate-x-1/2 top-[30px] w-[220px] h-[3px] rounded-full"
              style={{
                background: "linear-gradient(90deg, transparent, #5b8def, transparent)",
                boxShadow: "0 0 16px 2px rgba(91,141,239,0.8)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="relative max-w-[1360px] mx-auto px-16 py-16 max-lg:px-6 max-lg:py-10">
        <div className="grid grid-cols-[1.05fr_1fr] gap-12 items-start max-lg:grid-cols-1">
          <div>
            <span id="whoEyebrow" className="text-brand-400 text-[13px] font-bold tracking-[2px] uppercase mb-4 block opacity-0">
              Who We Are
            </span>
            <h2 className="font-extrabold text-[30px] leading-[1.25] tracking-[-0.5px] mb-6 max-w-[420px] max-lg:text-[26px]">
              <span className="heading-line">
                <span className="heading-inner">Two Minds. One Vision.</span>
              </span>
              <span className="heading-line">
                <span className="heading-inner">
                  A <span className="text-brand-500">Built for What&apos;s Next</span>
                </span>
              </span>
            </h2>
            <div id="whoText" className="space-y-4 max-w-[440px] opacity-0">
              <p className="text-muted text-[15px] leading-[1.75]">
                Zandrelix started with a simple idea: technology should make ambitious ideas possible, not make them complicated.
              </p>
              <p className="text-muted text-[15px] leading-[1.75]">
                We&apos;re a founder-led digital studio combining development, design and problem-solving to create experiences that are purposeful, scalable and built around the people who use them.
              </p>
            </div>
            <span id="whoSignature" className="font-script text-brand-400 text-[34px] mt-6 block opacity-0" style={{ transform: "rotate(-2deg)" }}>
              Zandrelix
            </span>
          </div>

          <div id="whoStats" className="rounded-2xl border border-white/10 bg-card2/60 p-8 grid grid-cols-4 gap-4 max-sm:grid-cols-2 max-sm:gap-y-8 opacity-0">
            <div className="flex flex-col items-center text-center gap-3">
              <span className="stat-ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <div>
                <b className="stat-num block text-[24px] font-extrabold leading-none mb-1" data-target="2" data-suffix="">
                  0
                </b>
                <span className="text-[12.5px] text-muted">Founders</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <span className="stat-ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="m22 8-4 4-2-2" />
                </svg>
              </span>
              <div>
                <b className="stat-num block text-[24px] font-extrabold leading-none mb-1" data-target="10" data-suffix="+">
                  0+
                </b>
                <span className="text-[12.5px] text-muted">Projects Completed</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <span className="stat-ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
                </svg>
              </span>
              <div>
                <b className="stat-num block text-[24px] font-extrabold leading-none mb-1" data-target="100" data-suffix="%">
                  0%
                </b>
                <span className="text-[12.5px] text-muted">Client Focused</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <span className="stat-ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5b8def" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3.2" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </span>
              <div>
                <b className="stat-num block text-[24px] font-extrabold leading-none mb-1" data-target="1" data-suffix="">
                  0
                </b>
                <span className="text-[12.5px] text-muted">Vision</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MEET THE FOUNDERS ================= */}
      <section className="relative max-w-[1360px] mx-auto px-16 py-16 max-lg:px-6 max-lg:py-10">
        <div className="text-center mb-14">
          <span id="foundersEyebrow" className="text-brand-400 text-[13px] font-bold tracking-[2px] uppercase mb-4 block opacity-0">
            Meet The Founders
          </span>
          <h2 className="font-extrabold text-[30px] leading-tight tracking-[-0.5px] mb-3 max-lg:text-[26px]">
            <span className="heading-line">
              <span className="heading-inner">
                Meet the Team Behind <span className="text-brand-500">Zandrelix</span>
              </span>
            </span>
          </h2>
          <p id="foundersSub" className="text-muted text-[15px] opacity-0">
            Two founders. One vision. Endless possibilities.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
          {founders.map((f) => (
            <div
              key={f.image}
              className="founder-card tilt-card opacity-0 relative rounded-2xl border border-white/10 bg-card2/60 overflow-hidden p-8 flex flex-col items-center text-center"
            >
              {/* ambient glow behind the card content */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[260px] h-[260px] rounded-full opacity-40"
                style={{ background: f.gradient, filter: "blur(70px)" }}
              />

              <div className="relative z-10 flex flex-col items-center">
                {/* monogram avatar — no photo, just brand-styled initials */}
                {/* Founder photo */}
<div className="relative w-24 h-24 rounded-full overflow-hidden mb-5 border border-white/15 shadow-[0_10px_40px_-10px_rgba(47,111,237,0.7)]">
  <Image
    src={f.image}
    alt={`${f.firstName} ${f.lastName}`}
    fill
    sizes="96px"
    quality={100}
    className="object-cover object-center"
  />
</div>

                <h3 className="font-bold text-[21px] mb-1">
                  {f.firstName} <span className="text-brand-500">{f.lastName}</span>
                </h3>
                <p className="text-[13.5px] text-[#c7cbd6] font-medium mb-4 leading-snug">{f.role}</p>
                <p className="text-[13.5px] text-muted leading-relaxed mb-6 max-w-[360px]">{f.bio}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {f.skills.map((skill) => (
                    <span className="skill-pill inline-flex items-center gap-1.5" key={skill}>
                      <span className="text-brand-400">{skillIconMap[skill]}</span>
                      {skill}
                    </span>
                  ))}
                </div>

              <div className="flex items-center gap-3 text-muted">
  {f.socials.map((s) => (
    <a
      key={s.label}
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${f.firstName} ${f.lastName} ${s.label}`}
      className="w-9 h-9 rounded-full border border-white/12 flex items-center justify-center hover:text-white hover:border-brand-500/60 hover:bg-brand-500/10 transition-colors"
    >
      {s.icon}
    </a>
  ))}
</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHAT WE BELIEVE ================= */}
      <section className="relative max-w-[1360px] mx-auto px-16 py-16 max-lg:px-6 max-lg:py-10">
        <span id="believeEyebrow" className="text-brand-400 text-[13px] font-bold tracking-[2px] uppercase mb-6 block opacity-0">
          What We Believe
        </span>
        <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {values.map((v) => (
            <div className="value-card opacity-0 rounded-2xl border border-white/10 bg-card2/50 p-6" key={v.title}>
              <span className="value-ico mb-5 inline-flex">{v.icon}</span>
              <h3 className="font-bold text-[16px] mb-2">{v.title}</h3>
              <p className="text-[13.5px] text-muted leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="relative max-w-[1360px] mx-auto px-16 py-16 max-lg:px-6 max-lg:py-10">
        <div className="text-center mb-14">
          <span id="doEyebrow" className="text-brand-400 text-[13px] font-bold tracking-[2px] uppercase mb-4 block opacity-0">
            What We Do
          </span>
          <h2 className="font-extrabold text-[30px] leading-tight tracking-[-0.5px] max-lg:text-[26px]">
            <span className="heading-line">
              <span className="heading-inner">
                Digital Solutions That <span className="text-brand-500">Drive Results</span>
              </span>
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-5 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {services.map((s) => (
            <div className="service-card opacity-0 text-center flex flex-col items-center" key={s.title}>
              <span className="service-ico mb-5">{s.icon}</span>
              <h3 className="font-bold text-[15px] mb-2">{s.title}</h3>
              <p className="text-[13px] text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* ================= OUR SIMPLE PROCESS ================= */}
      <section className="relative max-w-[1360px] mx-auto px-16 py-16 max-lg:px-6 max-lg:py-10">
        <div className="mb-14">
          <span id="processEyebrow" className="text-brand-400 text-[13px] font-bold tracking-[2px] uppercase mb-4 block opacity-0">
            How We Work
          </span>
          <h2 className="font-extrabold text-[30px] leading-tight tracking-[-0.5px] max-lg:text-[26px]">
            <span className="heading-line">
              <span className="heading-inner">
                Our Simple <span className="text-brand-500">Process</span>
              </span>
            </span>
          </h2>
        </div>

        <div className="relative grid grid-cols-6 gap-4 max-lg:grid-cols-2 max-lg:gap-y-12">
          <div className="timeline-line max-lg:hidden">
            <div id="timelineFill" className="timeline-fill" />
          </div>

          {processSteps.map((step) => (
            <div className="process-step tilt-card flex flex-col items-center text-center opacity-0" key={step.title}>
              <span className="step-ico">{step.icon}</span>
              <span className="step-dot my-3" />
              <h3 className="font-bold text-[14.5px] mb-1.5">{step.title}</h3>
              <p className="text-[12.5px] text-muted leading-relaxed max-w-[140px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative max-w-[1360px] mx-auto px-16 py-10 pb-24 max-lg:px-6">
        <div
          id="ctaCard"
          className="relative rounded-2xl border border-white/10 bg-card2/70 overflow-hidden grid grid-cols-2 items-center max-lg:grid-cols-1 opacity-0"
        >
          <div className="p-12 max-lg:p-8 relative z-10">
            <h2 className="font-extrabold text-[28px] leading-tight tracking-[-0.5px] mb-4 max-lg:text-[24px]">
              Have an idea?
              <br />
              Let&apos;s build something <span className="text-brand-500">remarkable.</span>
            </h2>
            <p className="text-muted text-[15px] leading-relaxed max-w-[380px] mb-7">
              Tell us what you&apos;re building and let&apos;s turn your idea into a digital experience people
              remember.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <MagneticLink
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold text-[14.5px] px-6 py-[13px] rounded-full shadow-[0_8px_30px_-6px_rgba(47,111,237,0.65)] hover:shadow-[0_8px_36px_-2px_rgba(47,111,237,0.85)] transition-shadow"
              >
                Get Free Consultation
                <ArrowIcon />
              </MagneticLink>
             
            </div>
          </div>
          <div className="relative h-[260px] max-lg:h-[220px] flex items-center justify-center overflow-hidden">
            <div
              id="ctaBlob"
              className="blob absolute w-[300px] h-[300px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 32% 28%, #cfe0ff 0%, #5b8def 22%, #1a3d9e 55%, #050a1c 85%)",
                boxShadow: "0 0 90px 10px rgba(47,111,237,0.45), inset -20px -20px 60px rgba(0,0,0,0.5)",
              }}
            />
            <div
              className="absolute w-[300px] h-[300px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(47,111,237,0.35), transparent 70%)", filter: "blur(50px)" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
