"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CALENDLY_URL = "https://calendly.com/marifulesgiu/30min";
const SCRIPT_SELECTOR = "script[data-calendly-widget]";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

function loadCalendlyWidget() {
  if (window.Calendly) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      SCRIPT_SELECTOR
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), {
        once: true,
      });

      existingScript.addEventListener(
        "error",
        () => reject(new Error("Calendly widget failed to load.")),
        { once: true }
      );

      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.dataset.calendlyWidget = "true";

    script.addEventListener("load", () => resolve(), { once: true });

    script.addEventListener(
      "error",
      () => reject(new Error("Calendly widget failed to load.")),
      { once: true }
    );

    document.head.appendChild(script);
  });
}

export default function ContactReveal() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>(
      "[data-contact-section]"
    );

    if (!section) return;

    const q = gsap.utils.selector(section);

    const panel = section.querySelector<HTMLElement>(
      "[data-contact-form-panel]"
    );

    const calendlyEmbed = section.querySelector<HTMLElement>(
      "[data-calendly-embed]"
    );

    const details = Array.from(
      section.querySelectorAll<HTMLElement>("[data-contact-detail]")
    );

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    let cancelled = false;

    const cleanupFunctions: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const kicker = q("[data-contact-kicker]");
      const title = q("[data-contact-title]");
      const copy = q("[data-contact-copy]");
      const detailWrap = q("[data-contact-details]");
      const formHeading = q("[data-contact-form-heading]");
      const bgFloats = q("[data-contact-bg-float]");
      const bgPaths = q("[data-contact-path]");
      const orbit = q("[data-contact-orbit]");

      if (prefersReducedMotion) {
        gsap.set([kicker, title, copy, detailWrap, panel, formHeading], {
          autoAlpha: 1,
          clearProps: "transform",
        });

        return;
      }

      gsap.set([kicker, title, copy, detailWrap], {
        autoAlpha: 0,
        y: 28,
      });

      gsap.set([panel, formHeading], {
        autoAlpha: 0,
        y: 42,
        scale: 0.97,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 76%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      })
        .to(kicker, {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
        })
        .to(
          title,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "expo.out",
          },
          "-=0.16"
        )
        .to(
          copy,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.42"
        )
        .to(
          detailWrap,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
          },
          "-=0.25"
        )
        .to(
          panel,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: "expo.out",
          },
          "-=0.68"
        )
        .to(
          formHeading,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
          },
          "-=0.45"
        );

      gsap.to(bgFloats, {
        x: (index) => (index % 2 === 0 ? 20 : -20),
        y: (index) => (index % 2 === 0 ? -15 : 15),
        duration: (index) => 7 + index * 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(bgPaths, {
        strokeDashoffset: -180,
        duration: 14,
        repeat: -1,
        ease: "none",
      });

      gsap.to(orbit, {
        rotation: 360,
        duration: 38,
        repeat: -1,
        ease: "none",
      });

      if (canHover && panel) {
        const onEnter = () => {
          gsap.to(panel, {
            y: -8,
            duration: 0.45,
            ease: "power3.out",
            boxShadow: "0 32px 90px rgba(16,41,87,0.14)",
          });
        };

        const onMove = (event: MouseEvent) => {
          const rect = panel.getBoundingClientRect();

          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;

          gsap.to(panel, {
            rotationY: x * 1.25,
            rotationX: y * -1.1,
            transformPerspective: 1100,
            duration: 0.4,
            ease: "power3.out",
          });
        };

        const onLeave = () => {
          gsap.to(panel, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.56)",
            boxShadow: "0 24px 70px rgba(16,41,87,0.08)",
          });
        };

        panel.addEventListener("mouseenter", onEnter);
        panel.addEventListener("mousemove", onMove);
        panel.addEventListener("mouseleave", onLeave);

        cleanupFunctions.push(() => {
          panel.removeEventListener("mouseenter", onEnter);
          panel.removeEventListener("mousemove", onMove);
          panel.removeEventListener("mouseleave", onLeave);
        });
      }

      if (canHover) {
        details.forEach((detail) => {
          const onEnter = () => {
            gsap.to(detail, {
              x: 7,
              duration: 0.3,
              ease: "power3.out",
            });
          };

          const onLeave = () => {
            gsap.to(detail, {
              x: 0,
              duration: 0.45,
              ease: "elastic.out(1, 0.5)",
            });
          };

          detail.addEventListener("mouseenter", onEnter);
          detail.addEventListener("mouseleave", onLeave);

          cleanupFunctions.push(() => {
            detail.removeEventListener("mouseenter", onEnter);
            detail.removeEventListener("mouseleave", onLeave);
          });
        });
      }
    }, section);

    const mountCalendly = async () => {
      if (!calendlyEmbed || calendlyEmbed.dataset.mounted === "true") return;

      try {
        await loadCalendlyWidget();

        if (cancelled || !window.Calendly) return;

        calendlyEmbed.innerHTML = "";
        calendlyEmbed.dataset.mounted = "true";

        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: calendlyEmbed,
        });

        requestAnimationFrame(() => {
          const widget = calendlyEmbed.querySelector<HTMLElement>(
            ".calendly-inline-widget"
          );

          const iframe =
            calendlyEmbed.querySelector<HTMLIFrameElement>("iframe");

          if (widget) {
            widget.style.width = "100%";
            widget.style.height = "100%";
            widget.style.minHeight = "100%";
          }

          if (iframe) {
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.minHeight = "100%";
          }

          ScrollTrigger.refresh();
        });
      } catch {
        const fallback = document.createElement("a");

        fallback.href = CALENDLY_URL;
        fallback.target = "_blank";
        fallback.rel = "noreferrer";
        fallback.textContent = "Open booking calendar";

        fallback.className =
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#102957] px-6 py-4 text-sm font-bold text-white";

        calendlyEmbed.appendChild(fallback);
      }
    };

    void mountCalendly();

    return () => {
      cancelled = true;
      cleanupFunctions.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return null;
}