"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactReveal() {
  useGSAP(() => {
    const section = document.querySelector<HTMLElement>(
      "[data-contact-section]"
    );

    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const context = gsap.context(() => {
      const kicker = section.querySelector<HTMLElement>(
        "[data-contact-kicker]"
      );
      const title = section.querySelector<HTMLElement>("[data-contact-title]");
      const copy = section.querySelector<HTMLElement>("[data-contact-copy]");
      const details = section.querySelector<HTMLElement>(
        "[data-contact-details]"
      );
      const panel = section.querySelector<HTMLElement>(
        "[data-contact-form-panel]"
      );
      const formHeading = section.querySelector<HTMLElement>(
        "[data-contact-form-heading]"
      );

      const fields = Array.from(
        section.querySelectorAll<HTMLElement>("[data-contact-field]")
      );

      if (!kicker || !title || !copy || !details || !panel || !formHeading) {
        return;
      }

      gsap.set([kicker, title, copy, details], {
        autoAlpha: 0,
        y: 34,
      });

      gsap.set(panel, {
        autoAlpha: 0,
        y: 48,
        rotateX: 4,
        transformPerspective: 1000,
      });

      gsap.set([formHeading, ...fields], {
        autoAlpha: 0,
        y: 18,
      });

      const timeline = gsap.timeline({
        paused: true,
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
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
          },
          "-=0.15"
        )
        .to(
          copy,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
          },
          "-=0.4"
        )
        .to(
          details,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.35"
        )
        .to(
          panel,
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.85,
            ease: "expo.out",
          },
          0.1
        )
        .to(
          formHeading,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
          },
          "-=0.45"
        )
        .to(
          fields,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.42,
            stagger: 0.07,
          },
          "-=0.25"
        );

      ScrollTrigger.create({
        trigger: section,
        start: "top 78%",
        once: true,
        onEnter: () => timeline.play(),
      });
    }, section);

    return () => context.revert();
  }, []);

  return null;
}