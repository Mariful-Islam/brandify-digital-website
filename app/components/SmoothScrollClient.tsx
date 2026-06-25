"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function SmoothScrollClient() {
  const initialized = useRef(false);

  useGSAP(() => {
    if (initialized.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isTouchDevice) return;

    initialized.current = true;

    // Only one ScrollSmoother instance can exist.
    ScrollSmoother.get()?.kill();

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 0.85,
      smoothTouch: 0,
      effects: false,
      ignoreMobileResize: true,
      normalizeScroll: false,
    });

    const refresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      window.removeEventListener("load", refresh);
      smoother.kill();
      initialized.current = false;
    };
  }, []);

  return null;
}