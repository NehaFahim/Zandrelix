"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SimpleProcessAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) {
      gsap.set(".process-step", {
        opacity: 1,
        y: 0,
      });

      gsap.set("#timelineFill", {
        width: "100%",
      });

      gsap.set(".step-dot", {
        scale: 1,
      });

      return;
    }

    const triggers: ScrollTrigger[] = [];

    /*
     * Process steps entrance
     */
    gsap.set(".process-step", {
      y: 28,
    });

    const processTrigger = ScrollTrigger.create({
      trigger: "#timelineFill",
      start: "top 80%",
      once: true,

      onEnter: () => {
        gsap.to("#timelineFill", {
          width: "100%",
          duration: 1.6,
          ease: "power2.inOut",
        });

        gsap.to(".process-step", {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.13,
          ease: "power3.out",
        });

        gsap.fromTo(
          ".step-dot",
          {
            scale: 0,
          },
          {
            scale: 1,
            duration: 0.4,
            stagger: 0.13,
            delay: 0.3,
            ease: "back.out(3)",
          }
        );
      },
    });

    triggers.push(processTrigger);

    /*
     * Floating process icons
     */
    const stepIcoTween = gsap.to(".step-ico", {
      y: -5,
      duration: 2.4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: {
        each: 0.2,
        from: "start",
      },
    });

    return () => {
      stepIcoTween.kill();
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}