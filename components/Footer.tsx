import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  ClockIcon,
} from "./FooterIcons";
import { Globe2, LinkedinIcon } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  "Website Development",
  "Mobile App Development",
  "Shopify Development",
  "E-Commerce Development",
  "AI Solutions",
  "UI/UX Design",
  "Custom Digital Solutions",
];
const socials = [
  { icon: <LinkedinIcon />, label: "LinkedIn", href: "https://www.linkedin.com/company/zandrelix/" },
  { icon: <FacebookIcon />, label: "Facebook", href: "https://www.facebook.com/share/1DNZD6xZu6/" },
  { icon: <InstagramIcon />, label: "Instagram", href: "https://www.instagram.com/zandrelix?igsh=MW0wMHp2M2hnOGtndA==" },
  { icon: <FaXTwitter/>, label: "Twitter", href: "https://x.com/zandrelix?s=20" },
  // { icon: <YoutubeIcon />, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-bg0">
      {/* decorative dotted "map" backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[60%] max-lg:w-full opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(rgba(91,141,239,0.55) 1px, transparent 1.5px)",
          backgroundSize: "16px 16px",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 75% at 78% 45%, #000 40%, transparent 78%)",
          maskImage: "radial-gradient(ellipse 75% 75% at 78% 45%, #000 40%, transparent 78%)",
        }}
      />

      <div className="relative max-w-[1360px] mx-auto px-16 pt-16 pb-10 max-lg:px-6 max-lg:pt-12">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1.1fr] gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-10">
          {/* Brand */}
          <div className="max-w-[300px]">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image src="/images/logo.png" alt="Zandrelix logo" width={130} height={30} className="site-logo h-10 w-auto" />
            </Link>
            <p className="text-muted text-[13.5px] leading-relaxed mb-6">
              Zandrelix is a digital solutions company that helps businesses grow with modern websites, apps and
              creative design.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-white/12 flex items-center justify-center text-[#c7cbd6] hover:text-white hover:border-brand-500/60 hover:bg-brand-500/10 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */} 
          <div>
            <h3 className="font-bold text-[15px] mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted text-[13.5px] hover:text-brand-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold text-[15px] mb-5">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-muted text-[13.5px] hover:text-brand-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-[15px] mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MailIcon />
                <a href="mailto:hello@zandrelix.com" className="text-muted text-[13.5px] hover:text-brand-400 transition-colors">
                  hello@zandrelix.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <a href="https://wa.me/03172588129" className="text-muted text-[13.5px] hover:text-brand-400 transition-colors">
                  +92 3172588129
                </a>
              </li>
             <li className="flex items-center gap-3">
  <Globe2
    size={16}
    strokeWidth={1.7}
    className="text-[#5b8def]"
  />
  <span className="text-muted text-[13.5px]">
    Worldwide
  </span>
</li>
              <li className="flex items-center gap-3">
                <ClockIcon />
                <span className="text-muted text-[13.5px]">Available 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-4">
          <span className="text-low text-[13px]">© 2026 Zandrelix. All Rights Reserved.</span>
          <div className="flex items-center gap-6">
           <a
  href="/privacy-policy"
  className="text-low text-[13px] hover:text-white transition-colors"
>
  Privacy Policy
</a>

<a
  href="/terms"
  className="text-low text-[13px] hover:text-white transition-colors"
>
  Terms &amp; Conditions
</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
