"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function HeroAnimations() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer:fine)").matches;

    const targets = ["#siteNav", "#heroBadge", ".heading-inner", "#heroDesc", "#heroCtas", "#heroSocial", "#heroVisual"];

    if (reduced) {
      gsap.set(targets, { opacity: 1, y: 0, x: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to("#siteNav", { opacity: 1, y: 0, duration: 0.7 }, 0)
      .to("#heroBadge", { opacity: 1, duration: 0.6 }, 0.25)
      .to(".heading-inner", { y: "0%", duration: 0.9, stagger: 0.12, ease: "power4.out" }, 0.35)
      .to("#heroDesc", { opacity: 1, duration: 0.7 }, 0.75)
      .to("#heroCtas", { opacity: 1, duration: 0.7 }, 0.9)
      .to("#heroSocial", { opacity: 1, duration: 0.7 }, 1.05)
      .to("#heroVisual", { opacity: 1, duration: 0.9, ease: "power2.out" }, 0.6);

    // 3D floating + mouse-parallax tilt for the hero mockup
    const mockup = document.getElementById("heroMockup");
    const glow = document.querySelector(".hero-glow");
    let cleanupStage: (() => void) | undefined;

    if (mockup) {
      gsap.set(mockup, { transformPerspective: 1400, rotateX: 6, rotateY: -10 });
      gsap.to(mockup, { y: -18, rotateZ: 1.2, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.4 });

      if (glow) {
        gsap.to(glow, { scale: 1.12, opacity: 0.75, duration: 3.4, ease: "sine.inOut", yoyo: true, repeat: -1 });
      }

      const stage = mockup.closest("div");
      if (stage && fine) {
        const handleMove = (e: MouseEvent) => {
          const rect = stage.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;
          gsap.to(mockup, { rotateY: -10 + relX * 16, rotateX: 6 - relY * 14, duration: 0.6, ease: "power2.out" });
        };
        const handleLeave = () => {
          gsap.to(mockup, { rotateY: -10, rotateX: 6, duration: 0.9, ease: "power3.out" });
        };
        stage.addEventListener("mousemove", handleMove);
        stage.addEventListener("mouseleave", handleLeave);
        cleanupStage = () => {
          stage.removeEventListener("mousemove", handleMove);
          stage.removeEventListener("mouseleave", handleLeave);
        };
      }
    }

    return () => {
      tl.kill();
      cleanupStage?.();
    };
  }, []);

  return null;
}
