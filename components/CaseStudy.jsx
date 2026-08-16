"use client";
import MagneticLink from "@/components/MagneticLink";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ExternalLink,
  Eye,
  Layers,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
  Code2,
  ShoppingBag,
  LayoutDashboard,
  Globe,
  Quote,
  MessageCircle,
  Send,
  Phone,
  Clock,
} from "lucide-react";
const phoneNumber = "92300123456733"; 

const watsappMessage =
  "Hello! I'd like to discuss a project with your team.";
  
const caseStudies = [
  {
    id: 1,
    number: "01",
    title: "JSM Advertising",
    category: "Website Development",
    headline: "Turning an Offline Brand Into a Strong Digital Presence",
    description:
      "JSM Advertising needed a modern digital presence that could showcase their services, improve visibility, and make it easier for potential customers to get in touch.",
    image: "/assets/jsm.png",
    liveUrl: "https://jsmadvertising.com",

    icon: Globe,

    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
    ],

    challenge: [
      "No strong online presence",
      "Low brand visibility and recognition",
      "Manual lead handling",
      "Outdated visual experience",
    ],

    solution: [
      "Modern responsive website",
      "SEO-focused structure",
      "Lead generation system",
      "Performance optimization",
      "Clear service presentation",
      "Mobile-first experience",
    ],

    results: [
      {
        value: "70%",
        label: "Faster Load Time",
        icon: Zap,
      },
      {
        value: "40%",
        label: "More Inquiries",
        icon: TrendingUp,
      },
      {
        value: "100%",
        label: "Responsive",
        icon: Eye,
      },
      {
        value: "5x",
        label: "Better Visibility",
        icon: Target,
      },
    ],

    outcome:
      "The new website gave JSM Advertising a stronger digital identity while creating a faster and more effective path from visitor interest to inquiry.",
  },

  {
    id: 2,
    number: "02",
    title: "Furniture Store",
    category: "E-Commerce Website",
    headline: "Creating a Premium Shopping Experience for Modern Furniture",
    description:
      "The goal was to create a modern furniture store that makes products easy to discover, visually appealing, and simple to manage while delivering a smooth experience across devices.",
    image: "/assets/furniture.png",
    liveUrl: "https://furniture-store-puce.vercel.app/",

    icon: ShoppingBag,

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Sanity",
    ],

    challenge: [
      "Products needed stronger visual presentation",
      "Shopping experience needed better structure",
      "Product categories needed clearer navigation",
      "Experience needed to work smoothly across devices",
    ],

    solution: [
      "Premium product-focused interface",
      "Responsive e-commerce layout",
      "Structured product categories",
      "CMS-powered product management",
      "Clear product discovery experience",
      "Mobile-friendly shopping flow",
    ],

    results: [
      {
        value: "Premium",
        label: "Shopping Experience",
        icon: ShoppingBag,
      },
      {
        value: "100%",
        label: "Responsive",
        icon: Eye,
      },
      {
        value: "Easy",
        label: "Product Management",
        icon: Layers,
      },
      {
        value: "Modern",
        label: "User Experience",
        icon: Sparkles,
      },
    ],

    outcome:
      "The result is a clean and premium furniture shopping experience designed around product discovery, visual presentation, usability, and easy content management.",
  },

  {
    id: 3,
    number: "03",
    title: "Business Nexus",
    category: "Web Application",
    headline: "Connecting Entrepreneurs, Investors and Opportunities in One Platform",
    description:
      "Business Nexus is a networking platform designed to bring entrepreneurs and investors together through dashboards, collaboration requests, messaging, meetings, notifications, and professional profiles.",
    image: "/assets/b-nexus.png",
    liveUrl: "https://nexus-ap-brown.vercel.app/login",

    icon: LayoutDashboard,

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
    ],

    challenge: [
      "Multiple business interactions needed one place",
      "Entrepreneurs needed a clear dashboard",
      "Investor discovery needed to be simple",
      "Communication and meetings needed better organization",
    ],

    solution: [
      "Entrepreneur dashboard",
      "Investor discovery experience",
      "Collaboration request management",
      "Messaging interface",
      "Meeting management",
      "Notifications system",
      "Professional user profiles",
      "Responsive application UI",
    ],

    results: [
      {
        value: "1",
        label: "Centralized Platform",
        icon: LayoutDashboard,
      },
      {
        value: "Faster",
        label: "Collaboration",
        icon: TrendingUp,
      },
      {
        value: "Unified",
        label: "Communication",
        icon: Users,
      },
      {
        value: "Responsive",
        label: "Experience",
        icon: Eye,
      },
    ],

    outcome:
      "Business Nexus brings networking, investor discovery, collaboration, communication, meetings, and profile management into one streamlined digital experience.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="w-full overflow-hidden bg-[#05060d] text-white">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="hero-photo relative isolate min-h-[620px] md:min-h-[700px] flex items-center justify-center overflow-hidden ">

        {/* Background image — same technique used on the Services hero */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/case-study-hero-bg.png')",
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

        {/* Decorative glow */}
        <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-28 text-center md:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-400 backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              Case Studies
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-7 text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl"
          >
            From Ideas to
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-brand-500 to-violet-400 bg-clip-text text-transparent">
              Digital Impact.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#aeb4c3] md:text-lg"
          >
            Explore how we turn real business challenges into thoughtful
            digital experiences through strategy, design, development,
            and problem-solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
          <MagneticLink
                      href="/about"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-violet-500 hover:opacity-90 text-white font-semibold text-[14.5px] px-7 py-[13px] rounded-full transition-opacity shadow-[0_10px_30px_-8px_rgba(139,92,246,0.6)]"
                    >
                      Know About Us
                      <ArrowRight />
                    </MagneticLink>

          </motion.div>

        </div>
      </section>


      {/* =========================================================
          CASE STUDIES INTRO
      ========================================================= */}

      <section
        id="case-studies"
        className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
      >

        <div className="mb-14 max-w-3xl md:mb-20">

          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.18em] text-brand-400"
          >
            Selected Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 text-3xl font-bold md:text-5xl"
          >
            Real projects.
            <br />
            <span className="bg-gradient-to-r from-brand-400 to-violet-400 bg-clip-text text-transparent">
              Real problems solved.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-5 max-w-2xl text-sm leading-7 text-muted md:text-base"
          >
            A closer look at the thinking, design, technology and decisions
            behind some of the digital products we have built.
          </motion.p>

        </div>


        {/* =====================================================
            CASE STUDIES
        ===================================================== */}

        <div className="space-y-28 md:space-y-40">

          {caseStudies.map((project, index) => {

            const ProjectIcon = project.icon;
            const reverse = index % 2 !== 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >

                {/* Number */}
                <div className="mb-6 flex items-center gap-3">

                  <span className="text-sm font-bold text-brand-400">
                    {project.number}
                  </span>

                  <span className="h-px w-12 bg-brand-500/40" />

                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {project.category}
                  </span>

                </div>


                {/* Main Intro */}
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >

                  {/* Image */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.35 }}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0e1f] shadow-2xl shadow-brand-500/5"
                  >

                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#05060d]/80 via-transparent to-transparent opacity-80" />

                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      width={1200}
                      height={750}
                      className="h-full min-h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:min-h-[420px]"
                    />

                    <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                      <ProjectIcon className="h-4 w-4 text-brand-400" />
                      {project.category}
                    </div>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-5 right-5 z-20 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-[#05060d] opacity-0 transition-all duration-300 group-hover:opacity-100"
                    >
                      View Live
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>

                  </motion.div>


                  {/* Copy */}
                  <div>

                    <h3 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                      {project.title}
                    </h3>

                    <h4 className="mt-4 text-xl font-semibold leading-snug text-brand-400 md:text-2xl">
                      {project.headline}
                    </h4>

                    <p className="mt-5 text-sm leading-7 text-[#aeb4c3] md:text-base">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-7">

                      <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
                        <Code2 className="h-4 w-4 text-brand-400" />
                        Technology
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-[#c7cbd6]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-brand-400"
                    >
                      Explore live project
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>

                  </div>

                </div>


                {/* =================================================
                    CHALLENGE + SOLUTION
                ================================================= */}

                <div className="mt-12 grid gap-5 md:grid-cols-2">

                  {/* Challenge */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-red-500/15 bg-gradient-to-br from-[#0a0e1f] to-[#101a33] p-6 md:p-7"
                  >

                    <div className="mb-5 flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                        <Target className="h-5 w-5 text-red-400" />
                      </div>

                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-red-400">
                          The Problem
                        </span>

                        <h4 className="mt-0.5 text-lg font-bold text-white">
                          The Challenge
                        </h4>
                      </div>

                    </div>

                    <div className="space-y-3">
                      {project.challenge.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-xl border border-red-500/10 bg-red-500/[0.03] p-3"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                          </span>

                          <span className="text-sm leading-6 text-[#c7cbd6]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                  </motion.div>


                  {/* Solution */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-green-500/15 bg-gradient-to-br from-[#0a0e1f] to-[#101a33] p-6 md:p-7"
                  >

                    <div className="mb-5 flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
                        <Check className="h-5 w-5 text-green-400" />
                      </div>

                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-green-400">
                          Our Approach
                        </span>

                        <h4 className="mt-0.5 text-lg font-bold text-white">
                          The Solution
                        </h4>
                      </div>

                    </div>

                    <div className="space-y-3">
                      {project.solution.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-xl border border-green-500/10 bg-green-500/[0.03] p-3"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />

                          <span className="text-sm leading-6 text-[#c7cbd6]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                  </motion.div>

                </div>


                {/* =================================================
                    RESULTS
                ================================================= */}

                <div className="mt-6">

                  <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0e1f] to-[#101a33] p-6 md:p-8">

                    <div className="mb-7 flex flex-col justify-between gap-3 md:flex-row md:items-end">

                      <div>

                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400">
                          Project Outcome
                        </span>

                        <h4 className="mt-1 text-2xl font-bold text-white md:text-3xl">
                          What We Delivered
                        </h4>

                      </div>

                      <p className="max-w-xl text-sm leading-6 text-muted">
                        {project.outcome}
                      </p>

                    </div>


                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">

                      {project.results.map((result) => {

                        const ResultIcon = result.icon;

                        return (
                          <motion.div
                            key={result.label}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="rounded-2xl border border-white/10 bg-[#05060d]/50 p-5 text-center transition-colors hover:border-brand-500/30"
                          >

                            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10">
                              <ResultIcon className="h-5 w-5 text-brand-400" />
                            </div>

                            <div className="text-xl font-bold text-white md:text-2xl">
                              {result.value}
                            </div>

                            <div className="mt-1 text-[10px] leading-4 text-muted md:text-xs">
                              {result.label}
                            </div>

                          </motion.div>
                        );
                      })}

                    </div>

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>

      </section>


   {/* Testimonial & CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="bg-gradient-to-br from-[#0a0e1f] to-[#101a33] p-6 md:p-8 rounded-2xl border border-brand-500/20 hover:border-brand-500/40 transition-all relative overflow-hidden shadow-xl shadow-brand-500/5"
          >
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-brand-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
            
            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-brand-500/20 mb-3" />
              </motion.div>
              <p className="text-white text-sm md:text-base lg:text-lg italic leading-relaxed">
                &ldquo;Zandrelix transformed our online presence with a modern website that helped us 
                connect better with our customers and grow our business.&rdquo;
              </p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center gap-3 mt-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center text-white font-bold text-base md:text-lg"
                >
                  JS
                </motion.div>
                <div>
                  <p className="text-white font-semibold text-sm">JSM Advertising</p>
                  <p className="text-low text-xs">Business Owner</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="relative overflow-hidden bg-gradient-to-br from-[#05060d] to-[#0a0e1f] p-6 md:p-8 rounded-2xl border border-brand-500/30 shadow-2xl shadow-brand-500/20"
          >

            <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
            
            <div className="relative z-10">
              <div className="space-y-2 md:space-y-3">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="inline-block"
                >
                  <span className="bg-brand-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] md:text-xs font-semibold text-brand-400 flex items-center gap-1.5 animate-pulse">
                    <MessageCircle className="w-3 h-3" />
                    WhatsApp Business
                  </span>
                </motion.div>
                
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                  Let&apos;s Talk!
                </h3>
                <p className="text-brand-400/70 text-xs md:text-sm">
                  Get instant responses on WhatsApp
                </p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-6"
              >
                <motion.a 
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(watsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-brand-500 to-violet-500 text-white px-5 md:px-8 py-2.5 md:py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-brand-500/20 transition-all flex items-center gap-2 text-xs md:text-sm"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  Message
                  <Send className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a 
                  href={"/contact"}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-brand-500/50 text-brand-400 px-4 md:px-6 py-2.5 md:py-3.5 rounded-full font-semibold hover:bg-brand-500/10 transition-all text-xs md:text-sm flex items-center gap-2"
                >
                  <Phone className="w-3 h-3 md:w-4 md:h-4" />
                  Contact us
                </motion.a>
              </motion.div>

              <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-3 md:mt-4 text-[10px] md:text-xs text-brand-400/70">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-ping"></span>
                  Online Now
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 animate-spin" style={{ animationDuration: '3s' }} />
                  Avg. reply: 30 min
                </span>
              </div>
            </div>
          </motion.div>
        </div>

    </main>
  );
}