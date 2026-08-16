"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface MagneticLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export default function MagneticLink({ children, className, ...rest }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer:fine)").matches;
    const btn = ref.current;
    if (!fine || !btn) return;

    const setX = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3.out" });
    const setY = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3.out" });

    const handleMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      setX(relX * 0.25);
      setY(relY * 0.35);
    };
    const handleLeave = () => {
      setX(0);
      setY(0);
    };

    btn.addEventListener("mousemove", handleMove);
    btn.addEventListener("mouseleave", handleLeave);
    return () => {
      btn.removeEventListener("mousemove", handleMove);
      btn.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <a ref={ref} className={`magnetic-btn ${className ?? ""}`} {...rest}>
      {children}
    </a>
  );
}
