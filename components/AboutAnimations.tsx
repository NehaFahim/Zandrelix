"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer:fine)").matches;

    const triggers: ScrollTrigger[] = [];
    const cleanups: Array<() => void> = [];

    if (reduced) {
      gsap.set(".opacity-0, .heading-inner", { opacity: 1, y: 0, x: 0, scale: 1 });
      gsap.set("#timelineFill", { width: "100%" });
      document.querySelectorAll<HTMLElement>(".stat-num").forEach((el) => {
        el.textContent = (el.getAttribute("data-target") || "") + (el.getAttribute("data-suffix") || "");
      });
      return;
    }

    /* ---------------- HERO entrance ---------------- */
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTl
      .to("#heroBadge", { opacity: 1, duration: 0.6 }, 0)
      .to("section:nth-of-type(1) .heading-inner", { y: "0%", duration: 0.9, stagger: 0.12, ease: "power4.out" }, 0.15)
      .to("#heroDesc", { opacity: 1, duration: 0.7 }, 0.55)
      .to("#heroCtas", { opacity: 1, duration: 0.7 }, 0.7)
      .to("#heroVisual", { opacity: 1, duration: 1, ease: "power2.out" }, 0.35);

    // floating hero logo
    const logoTween = gsap.to("#heroLogo", { y: "+=14", duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.2 });

    // orbit dots along paths
    const path1 = document.getElementById("orbitPath1") as unknown as SVGPathElement | null;
    const path2 = document.getElementById("orbitPath2") as unknown as SVGPathElement | null;
    let orbitTween1: gsap.core.Tween | undefined;
    let orbitTween2: gsap.core.Tween | undefined;
    if (path1 && path2) {
      const len1 = path1.getTotalLength();
      const len2 = path2.getTotalLength();
      const obj1 = { p: 0 };
      const obj2 = { p: 0 };
      orbitTween1 = gsap.to(obj1, {
        p: 1,
        duration: 5,
        repeat: -1,
        ease: "sine.inOut",
        yoyo: true,
        onUpdate: () => {
          const pt = path1.getPointAtLength(obj1.p * len1);
          document.getElementById("orbitDot1")?.setAttribute("cx", String(pt.x));
          document.getElementById("orbitDot1")?.setAttribute("cy", String(pt.y));
        },
      });
      orbitTween2 = gsap.to(obj2, {
        p: 1,
        duration: 4.5,
        repeat: -1,
        ease: "sine.inOut",
        yoyo: true,
        delay: 0.4,
        onUpdate: () => {
          const pt = path2.getPointAtLength(obj2.p * len2);
          document.getElementById("orbitDot2")?.setAttribute("cx", String(pt.x));
          document.getElementById("orbitDot2")?.setAttribute("cy", String(pt.y));
        },
      });
    }

    /* ---------------- generic scroll reveal helper ---------------- */
    function revealOnScroll(selector: string, opts?: { y?: number }) {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        gsap.set(el, { y: opts?.y ?? 24 });
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          once: true,
          onEnter: () => {
            gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" });
          },
        });
        triggers.push(st);
      });
    }

    // eyebrow labels
    ["#whoEyebrow", "#foundersEyebrow", "#foundersSub", "#believeEyebrow", "#doEyebrow", "#techEyebrow", "#processEyebrow"].forEach(
      (sel) => {
        const el = document.querySelector<HTMLElement>(sel);
        if (!el) return;
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          once: true,
          onEnter: () => gsap.to(el, { opacity: 1, duration: 0.6, ease: "power2.out" }),
        });
        triggers.push(st);
      }
    );

    // section headings (line reveal)
    document.querySelectorAll<HTMLElement>("section").forEach((sec) => {
      const lines = sec.querySelectorAll(".heading-inner");
      if (!lines.length) return;
      const st = ScrollTrigger.create({
        trigger: sec,
        start: "top 82%",
        once: true,
        onEnter: () => gsap.to(lines, { y: "0%", duration: 0.9, stagger: 0.1, ease: "power4.out" }),
      });
      triggers.push(st);
    });

    revealOnScroll("#whoText", { y: 16 });
    revealOnScroll("#whoSignature", { y: 10 });
    revealOnScroll("#whoStats", { y: 20 });
    revealOnScroll("#ctaCard", { y: 24 });

    /* stagger groups */
    gsap.set(".value-card", { y: 24 });
    triggers.push(
      ScrollTrigger.create({
        trigger: ".value-card",
        start: "top 88%",
        once: true,
        onEnter: () => gsap.to(".value-card", { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }),
      })
    );
    gsap.set(".service-card", { y: 24 });
    triggers.push(
      ScrollTrigger.create({
        trigger: ".service-card",
        start: "top 88%",
        once: true,
        onEnter: () => gsap.to(".service-card", { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" }),
      })
    );
    gsap.set(".founder-card", { y: 30 });
    triggers.push(
      ScrollTrigger.create({
        trigger: ".founder-card",
        start: "top 85%",
        once: true,
        onEnter: () => gsap.to(".founder-card", { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out" }),
      })
    );

    // count-up stats
    document.querySelectorAll<HTMLElement>(".stat-num").forEach((el) => {
      const target = parseFloat(el.getAttribute("data-target") || "0");
      const suffix = el.getAttribute("data-suffix") || "";
      const counter = { val: 0 };
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            val: target,
            duration: 1.4,
            delay: 0.3,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = Math.round(counter.val) + suffix;
            },
          });
        },
      });
      triggers.push(st);
    });

    /* ---------------- process timeline ---------------- */
    gsap.set(".process-step", { y: 28 });
    triggers.push(
      ScrollTrigger.create({
        trigger: "#timelineFill",
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to("#timelineFill", { width: "100%", duration: 1.6, ease: "power2.inOut" });
          gsap.to(".process-step", { opacity: 1, y: 0, duration: 0.65, stagger: 0.13, ease: "power3.out" });
          gsap.fromTo(".step-dot", { scale: 0 }, { scale: 1, duration: 0.4, stagger: 0.13, delay: 0.3, ease: "back.out(3)" });
        },
      })
    );
    const stepIcoTween = gsap.to(".step-ico", {
      y: -5,
      duration: 2.4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: { each: 0.2, from: "start" },
    });

    /* ---------------- CTA blob slow rotation ---------------- */
    const blobRotate = gsap.to("#ctaBlob", { rotate: 360, duration: 40, ease: "none", repeat: -1 });
    const blobScale = gsap.to("#ctaBlob", { scale: 1.05, duration: 4, ease: "sine.inOut", yoyo: true, repeat: -1 });

    /* ---------------- 3D tilt on hover ---------------- */
    if (fine) {
      document.querySelectorAll<HTMLElement>(".tilt-card").forEach((card) => {
        const setRX = gsap.quickTo(card, "rotateX", { duration: 0.4, ease: "power2.out" });
        const setRY = gsap.quickTo(card, "rotateY", { duration: 0.4, ease: "power2.out" });
        card.style.perspective = "700px";
        const handleMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;
          setRY(relX * 10);
          setRX(-relY * 10);
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
      logoTween.kill();
      orbitTween1?.kill();
      orbitTween2?.kill();
      stepIcoTween.kill();
      blobRotate.kill();
      blobScale.kill();
      triggers.forEach((st) => st.kill());
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
