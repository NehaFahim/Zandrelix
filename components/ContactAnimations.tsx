"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer:fine)").matches;
    const triggers: ScrollTrigger[] = [];
    const cleanups: Array<() => void> = [];

    if (reduced) {
      gsap.set(".opacity-0, .heading-inner", { opacity: 1, y: 0, x: 0, scale: 1 });
      return;
    }

    /* ---------------- HERO entrance ---------------- */
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTl
      .to("#heroBadge", { opacity: 1, duration: 0.6 }, 0)
      .to("#contactHero .heading-inner", { y: "0%", duration: 0.9, stagger: 0.12, ease: "power4.out" }, 0.15)
      .to("#heroDesc", { opacity: 1, duration: 0.7 }, 0.5)
      .to("#heroDivider", { opacity: 1, scaleX: 1, duration: 0.5, ease: "power2.out" }, 0.7)
      .to("#heroNote", { opacity: 1, duration: 0.6 }, 0.8)
      .to("#formCard", { opacity: 1, y: 0, duration: 0.7 }, 0.55)
      .to("#infoCard", { opacity: 1, y: 0, duration: 0.7 }, 0.68);

    gsap.set("#heroDivider", { scaleX: 0, transformOrigin: "left center" });
    gsap.set("#formCard", { y: 24 });
    gsap.set("#infoCard", { y: 24 });

    // envelope hero image is now a static background (no floating / parallax tilt)

    /* ---------------- feature strip ---------------- */
    gsap.set(".feature-item", { y: 20 });
    triggers.push(
      ScrollTrigger.create({
        trigger: "#featureStrip",
        start: "top 90%",
        once: true,
        onEnter: () => gsap.to(".feature-item", { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }),
      })
    );

    /* ---------------- more ways to connect ---------------- */
    const moreDivider = document.getElementById("moreWaysDivider");
    if (moreDivider) {
      triggers.push(
        ScrollTrigger.create({
          trigger: moreDivider,
          start: "top 92%",
          once: true,
          onEnter: () => gsap.to(moreDivider, { opacity: 1, duration: 0.6 }),
        })
      );
    }
    gsap.set(".social-chip", { y: 16, scale: 0.9 });
    triggers.push(
      ScrollTrigger.create({
        trigger: "#socialRow",
        start: "top 92%",
        once: true,
        onEnter: () => gsap.to(".social-chip", { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: "back.out(2.2)" }),
      })
    );

    /* ---------------- FAQ heading + items ---------------- */
    const faqEyebrow = document.getElementById("faqEyebrow");
    if (faqEyebrow) {
      triggers.push(
        ScrollTrigger.create({
          trigger: faqEyebrow,
          start: "top 88%",
          once: true,
          onEnter: () => gsap.to(faqEyebrow, { opacity: 1, duration: 0.6 }),
        })
      );
    }
    document.querySelectorAll<HTMLElement>("#faqSection .heading-inner").forEach((line) => {
      const st = ScrollTrigger.create({
        trigger: line,
        start: "top 88%",
        once: true,
        onEnter: () => gsap.to(line, { y: "0%", duration: 0.8, ease: "power4.out" }),
      });
      triggers.push(st);
    });
    gsap.set(".faq-item", { y: 16 });
    triggers.push(
      ScrollTrigger.create({
        trigger: "#faqSection",
        start: "top 75%",
        once: true,
        onEnter: () => gsap.to(".faq-item", { opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: "power3.out" }),
      })
    );

    /* ---------------- CTA card ---------------- */
    gsap.set("#ctaBanner", { y: 24 });
    triggers.push(
      ScrollTrigger.create({
        trigger: "#ctaBanner",
        start: "top 88%",
        once: true,
        onEnter: () => gsap.to("#ctaBanner", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }),
      })
    );
    const planeTween = gsap.to("#ctaPlane", {
      y: -12,
      rotate: -4,
      duration: 2.6,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 0.6,
    });

    /* ---------------- subtle tilt on form/info cards ---------------- */
    if (fine) {
      document.querySelectorAll<HTMLElement>(".tilt-card").forEach((card) => {
        const setRX = gsap.quickTo(card, "rotateX", { duration: 0.4, ease: "power2.out" });
        const setRY = gsap.quickTo(card, "rotateY", { duration: 0.4, ease: "power2.out" });
        card.style.perspective = "900px";
        const handleMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;
          setRY(relX * 5);
          setRX(-relY * 5);
        };
        const handleLeave = () => {
          setRX(0);
          setRY(0);
        };
        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseleave", handleLeave);
        cleanups.push(() => {
          card.removeEventListener("mousemove", handleMove);
          card.removeEventListener("mouseleave", handleLeave);
        });
      });
    }

    return () => {
      heroTl.kill();
      planeTween.kill();
      triggers.forEach((st) => st.kill());
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
