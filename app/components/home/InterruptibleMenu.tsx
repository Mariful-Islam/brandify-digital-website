"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function InterruptibleMenu() {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const panelRefs = useRef<HTMLDivElement[]>([]);
  const linkRefs = useRef<HTMLAnchorElement[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const [isActive, setIsActive] = useState(false);

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      const panels = panelRefs.current;
      const links = linkRefs.current;

      if (!overlay || !panels.length || !links.length) return;

      // Initial hidden state
      gsap.set(overlay, {
        autoAlpha: 0,
        pointerEvents: "none",
      });

      gsap.set(panels, {
        yPercent: -115,
        rotation: 0,
      });

      gsap.set(links, {
        autoAlpha: 0,
        y: 28,
      });

      const tl = gsap.timeline({
        paused: true,

        onReverseComplete: () => {
          gsap.set(overlay, {
            autoAlpha: 0,
            pointerEvents: "none",
          });

          setIsActive(false);
        },

        onComplete: () => {
          gsap.set(overlay, {
            autoAlpha: 0,
            pointerEvents: "none",
          });

          setIsActive(false);
        },
      });

      tl.set(overlay, {
        autoAlpha: 1,
        pointerEvents: "auto",
      })

        // -------------------------
        // ENTER ANIMATION
        // -------------------------
        .to(panels, {
          yPercent: 0,
          duration: 0.75,
          stagger: 0.09,
          ease: "back.out(1.35)",

          // When user clicks quickly to close,
          // reverse becomes fast and responsive.
          easeReverse: "power3.in",
        })

        .to(
          links,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.07,
            ease: "power3.out",
            easeReverse: "power3.in",
          },
          "-=0.42"
        )

        // Timeline pauses exactly after menu becomes open
        .addLabel("open")
        .addPause("open")

        // -------------------------
        // EXIT ANIMATION
        // -------------------------
        .to(links, {
          autoAlpha: 0,
          y: -22,
          duration: 0.22,
          stagger: 0.04,
          ease: "power2.in",
        })

        .to(
          panels,
          {
            yPercent: 120,
            rotation: () => gsap.utils.random(-16, 16),
            duration: 0.72,
            stagger: 0.1,
            ease: "power3.in",
          },
          "<0.05"
        )

        .set(overlay, {
          autoAlpha: 0,
          pointerEvents: "none",
        });

      timelineRef.current = tl;
    },
    { scope: containerRef }
  );

  const toggleMenu = () => {
    const tl = timelineRef.current;
    if (!tl) return;

    /*
      Initial state: paused at timeline start → play enter
      Fully open: paused at addPause("open") → play exit
      Entering: reverse it immediately
      Reversing: play it forward again
    */
    if (tl.paused()) {
      setIsActive(true);
      tl.play();
      return;
    }

    if (tl.reversed()) {
      tl.play();
    } else {
      tl.reverse();
    }
  };

  return (
    <div ref={containerRef}>
      <button
        type="button"
        className="menu-toggle"
        onClick={toggleMenu}
        aria-expanded={isActive}
        aria-controls="main-navigation"
      >
        <span>{isActive ? "Close" : "Menu"}</span>

        <span className="menu-toggle-lines" aria-hidden="true">
          <i />
          <i />
        </span>
      </button>

      <div
        ref={overlayRef}
        id="main-navigation"
        className="menu-overlay"
        aria-hidden={!isActive}
      >
        <div
          ref={(element) => {
            if (element) panelRefs.current[0] = element;
          }}
          className="menu-panel menu-panel-one"
        />

        <div
          ref={(element) => {
            if (element) panelRefs.current[1] = element;
          }}
          className="menu-panel menu-panel-two"
        />

        <div
          ref={(element) => {
            if (element) panelRefs.current[2] = element;
          }}
          className="menu-panel menu-panel-three"
        />

        <nav className="menu-nav" aria-label="Main navigation">
          {menuLinks.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              ref={(element) => {
                if (element) linkRefs.current[index] = element;
              }}
              onClick={toggleMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}