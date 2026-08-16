"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { ReactNode } from "react";

interface TechMarqueeProps {
  pills: ReactNode[];
  duration?: number;
}

export default function TechMarquee({ pills, duration = 28 }: TechMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const tween = gsap.to(track, { xPercent: -50, duration, ease: "none", repeat: -1 });

    const slow = () => tween.timeScale(0.25);
    const fast = () => tween.timeScale(1);
    track.addEventListener("mouseenter", slow);
    track.addEventListener("mouseleave", fast);

    return () => {
      track.removeEventListener("mouseenter", slow);
      track.removeEventListener("mouseleave", fast);
      tween.kill();
    };
  }, [duration]);

  // duplicate the pill set so the loop is seamless
  const doubled = [...pills, ...pills];

  return (
    <div className="marquee-wrap overflow-hidden">
      <div className="marquee-track" ref={trackRef}>
        {doubled.map((pill, i) => (
          <span className="tech-pill" key={i}>
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}
