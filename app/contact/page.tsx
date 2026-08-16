import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MagneticLink from "@/components/MagneticLink";
import ContactAnimations from "@/components/ContactAnimations";
import ParticleField from "@/components/ParticleField";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";
import {
  LightningIcon,
  ShieldIcon,
  UsersIcon,
  RocketIcon,
  ArrowRightSmall,
  MailGlowIcon,
  PhoneGlowIcon,
  PinGlowIcon,
  WhatsappIcon,
  LinkedinFillIcon,
  InstagramFillIcon,
} from "@/components/ContactIcons";
import { YoutubeIcon } from "@/components/FooterIcons";
import { FaXTwitter } from "react-icons/fa6";

export const metadata: Metadata = {
  description:
    "Ready to elevate your digital presence? Our team of experts is standing by to transform your vision into reality. Reach out today and let's start the conversation.",
  alternates: { canonical: "/contact" },
};

const contactInfo = [
{
  icon: <MailGlowIcon />,
  label: "Email Us",
  value: "hello@zandrelix.com",
  note: "We usually respond within 24 hours.",
  href: "mailto:hello@zandrelix.com",
},
  {
    icon: <PhoneGlowIcon />,
    label: "Call Us",
    value: "+1 (800) 123-4567",
    note: "Available 24/7",
    href: "https://wa.me/18001234567",
    external: true,
  },
  {
    icon: <PinGlowIcon />,
    label: "Our Location",
    value: "Pakistan",
    note: "Based in Pakistan. Working Globally.",
  },
];

const features = [
  { icon: <LightningIcon />, title: "Fast Response", desc: "We reply within 24 hours" },
  { icon: <ShieldIcon />, title: "Secure & Private", desc: "Your information is always protected" },
  { icon: <UsersIcon />, title: "Client Focused", desc: "We listen, understand and deliver" },
  { icon: <RocketIcon />, title: "Results Driven", desc: "We build solutions that drive real results" },
];

const socials = [
  { icon: <WhatsappIcon />, label: "WhatsApp", href: "#" },
  { icon: <LinkedinFillIcon />, label: "LinkedIn", href: "#" },
  { icon: <InstagramFillIcon />, label: "Instagram", href: "#" },
  { icon: <FaXTwitter />, label: "Twitter", href: "#" },
   { icon: <YoutubeIcon />, label: "YouTube", href: "#" },

];

const faqItems = [
 { 
  question: "How long does a project take?", 
  answer: "We work with a fast and focused approach, without compromising quality. Timelines depend on the project's scope and complexity, and we'll agree on a clear delivery plan before we begin."
},

{ 
  question: "What technologies do you work with?", 
  answer: "We use modern technologies including Next.js, React, TypeScript, Node.js, Tailwind CSS, Shopify, Firebase, and AI tools — choosing the right stack based on what your project actually needs."
},

{ 
  question: "What information do you need to start?", 
  answer: "Just a clear idea of what you want to achieve, your goals, and any references or brand assets you have. We'll help you shape the rest and turn your idea into the right solution."
},

{ 
  question: "How much does a project cost?", 
  answer: "Every project is different. We first understand your goals, scope, and requirements, then provide a clear and tailored estimate with no unnecessary surprises."
},

{ 
  question: "Do you provide post-launch support?", 
  answer: "Yes. We're here beyond launch with ongoing support, maintenance, improvements, and new features to help your digital product continue to grow."
},

{ 
  question: "Can you redesign my existing website?", 
  answer: "Absolutely. We can modernize your website, improve its design, performance, user experience, and functionality while preserving the content and SEO value that already works."
},
];

export default function ContactPage() {
  return (
    <>
      <ContactAnimations />

      {/* ================= NAVBAR ================= */}
      <Navbar active="Contact Us" />

      {/* ================= HERO ================= */}
      {/* the envelope is a static full-bleed background image behind the copy (no motion),
          on every breakpoint, with a gradient mask so text always stays legible */}
      <section id="contactHero" className="hero-photo relative overflow-hidden max-w-[1360px] mx-auto px-16 pt-16 pb-14 min-h-[420px] flex items-center justify-center max-lg:px-6 max-lg:pt-28 max-lg:pb-16 max-lg:min-h-[520px]">
        {/* Background image */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/contact-hero-bg-new.png')",
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

        <ParticleField count={220} />

        <div className="relative z-10 max-w-[560px] mx-auto text-center">
          <span id="heroBadge" className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-violet-400/25 px-4 py-2 mb-6 opacity-0">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span className="text-[12px] font-bold tracking-[1.5px] uppercase text-[#c7cbd6]">Let&apos;s Connect</span>
          </span>
          <h1 className="font-extrabold text-[54px] leading-[1.05] tracking-[-1.5px] mb-6 max-lg:text-[38px] max-sm:text-[32px]">
            <span className="heading-line">
              <span className="heading-inner">
                GET IN <span className="grad-text">TOUCH</span>
              </span>
            </span>
          </h1>
          <p id="heroDesc" className="text-muted text-[16px] leading-[1.75] max-w-[460px] mx-auto mb-5 opacity-0">
           Whether you&apos;re launching something new, improving an existing product or simply exploring what&apos;s possible, we&apos;d love to hear what you&apos;re working on.
          </p>
          <span id="heroDivider" className="block w-10 h-[2px] bg-white/20 mb-5 mx-auto opacity-0" />
          <p id="heroNote" className="flex items-center justify-center gap-2 text-[13px] text-muted opacity-0">
            <span className="text-violet-400">
              <LightningIcon />
            </span>
            We typically reply within a few hours
          </p>
        </div>
      </section>

      {/* ================= FORM + CONTACT INFO ================= */}
      <section className="relative max-w-[1360px] mx-auto px-16 pb-16 grid grid-cols-[1.4fr_1fr] gap-6 items-start max-lg:grid-cols-1 max-lg:px-6">
        {/* Send Us a Message */}
        <ContactForm />

        {/* Contact Information */}
        <div id="infoCard" className="tilt-card opacity-0 relative overflow-hidden rounded-2xl border border-white/10 bg-card2/60 p-8 max-sm:p-6">
          <div
            aria-hidden
            className="dot-texture pointer-events-none absolute inset-y-0 right-0 w-2/3 opacity-20"
            style={{
              WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 85% 50%, #000 40%, transparent 80%)",
              maskImage: "radial-gradient(ellipse 70% 70% at 85% 50%, #000 40%, transparent 80%)",
            }}
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              <h2 className="font-bold text-[13px] tracking-[1.5px] uppercase">Reach Us Directly</h2>
            </span>
            <ul className="divide-y divide-white/[0.07]">
              {contactInfo.map((item) => {
                const content = (
                  <>
                    <span className="info-ico">{item.icon}</span>
                    <div>
                      <span className="block text-[11px] font-bold tracking-[1px] uppercase text-low mb-1">{item.label}</span>
                      <b className="block text-[15px] font-bold mb-0.5">{item.value}</b>
                      <span className="text-[12.5px] text-muted">{item.note}</span>
                    </div>
                  </>
                );
                return (
                  <li key={item.label} className="py-5 first:pt-0 last:pb-0">
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-4 -m-2 p-2 rounded-xl hover:bg-white/[0.03] transition-colors"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FEATURE STRIP ================= */}
      <section id="featureStrip" className="relative max-w-[1360px] mx-auto px-16 pb-4 grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:px-6">
        {features.map((f) => (
          <div className="feature-item opacity-0 flex items-start gap-4" key={f.title}>
            <span className="feature-ico">{f.icon}</span>
            <div>
              <h3 className="font-bold text-[15px] mb-1">{f.title}</h3>
              <p className="text-[13px] text-muted leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ================= MORE WAYS TO CONNECT ================= */}
      <section className="relative max-w-[1360px] mx-auto px-16 pt-16 max-lg:px-6">
        <div id="moreWaysDivider" className="relative flex items-center justify-center opacity-0">
          <span className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
          <span className="relative bg-bg0 px-5 inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[2px] uppercase text-muted">
            <span className="w-1 h-1 rounded-full bg-violet-400" />
            More Ways to Connect
            <span className="w-1 h-1 rounded-full bg-violet-400" />
          </span>
        </div>
        <div id="socialRow" className="flex items-center justify-center gap-4 py-10">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="social-chip opacity-0 w-12 h-12 rounded-full border border-white/12 bg-white/[0.02] flex items-center justify-center text-[#c7cbd6] hover:text-white hover:border-brand-400/50 hover:bg-brand-500/10 transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faqSection" className="relative max-w-[1360px] mx-auto px-6 pb-16">
        <div className="rounded-2xl border border-white/10 bg-card2/30 p-10 max-sm:p-6">
          <div className="text-center mb-12">
            <span id="faqEyebrow" className="inline-flex items-center gap-2 mb-4 opacity-0">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              <span className="text-brand-400 text-[12px] font-bold tracking-[2px] uppercase">FAQs</span>
            </span>
            <h2 className="font-extrabold text-[28px] leading-tight tracking-[-0.5px] mb-3 max-lg:text-[24px]">
              <span className="heading-line">
                <span className="heading-inner">
                  Frequently Asked <span className="text-brand-400">Questions</span>
                </span>
              </span>
            </h2>
            <p className="text-muted text-[14.5px]">Quick answers to help you learn more about working with us.</p>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="relative max-w-[1360px] mx-auto px-16 pb-24 max-lg:px-6">
        <div
          id="ctaBanner"
          className="opacity-0 relative rounded-2xl border border-white/10 overflow-hidden grid grid-cols-2 items-center max-lg:grid-cols-1"
          style={{ background: "linear-gradient(135deg, #150b2e 0%, #05060d 65%)" }}
        >
          <div className="p-12 max-lg:p-8 relative z-10">
            <span className="text-[12.5px] font-semibold text-muted mb-3 block">Have a project in mind?</span>
            <h2 className="font-extrabold text-[27px] leading-tight tracking-[-0.5px] mb-4 max-lg:text-[23px]">
              Your Next Big <span className="text-brand-400">ideas</span> Starts Here
            </h2>
            <p className="text-muted text-[14.5px] leading-relaxed max-w-[380px] mb-7">
             Tell us what you&apos;re building. We&apos;ll help you figure out what comes next.
            </p>
            <MagneticLink
              href="/services"
              className="inline-flex items-center gap-2 bg-white text-[#0a0d1a] font-semibold text-[14.5px] px-6 py-[13px] rounded-full hover:bg-white/90 transition-colors"
            >
              Explore Solutions
              <ArrowRightSmall />
            </MagneticLink>
          </div>

          <div className="relative h-[260px] max-lg:h-[220px] flex items-center justify-center overflow-hidden">
            <div
              aria-hidden
              className="dot-texture pointer-events-none absolute inset-0 opacity-25"
              style={{
                WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 70% 30%, #000 30%, transparent 75%)",
                maskImage: "radial-gradient(ellipse 70% 70% at 70% 30%, #000 30%, transparent 75%)",
              }}
            />
            <div
              className="absolute w-[260px] h-[260px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(124,58,237,0.3), transparent 70%)", filter: "blur(45px)" }}
            />
            <div id="ctaPlane" className="relative z-10 text-white" style={{ transform: "rotate(-25deg)" }}>
              <svg width="96" height="96" viewBox="0 0 24 24" fill="white" style={{ filter: "drop-shadow(0 14px 30px rgba(124,58,237,0.55))" }}>
                <path d="m2 12 19-9-6 19-4.5-7L2 12Z" />
              </svg>
            </div>
            <div
              className="absolute bottom-8 w-[220px] h-[54px] rounded-[50%] border border-brand-400/40"
              style={{ background: "radial-gradient(ellipse at center, rgba(124,58,237,0.22), transparent 70%)" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
