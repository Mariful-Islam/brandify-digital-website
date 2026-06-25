"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const navItems = [
  { index: "01", label: "Our Story", href: "/about" },
  { index: "02", label: "Beauty Rituals", href: "/services" },
  { index: "03", label: "The Collection", href: "/shop" },
  { index: "04", label: "Book Your Glow", href: "/contact" },
];

export default function BeautyMenu() {
  const router = useRouter();

  const rootRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const topLineRef = useRef<HTMLSpanElement>(null);
  const middleLineRef = useRef<HTMLSpanElement>(null);
  const bottomLineRef = useRef<HTMLSpanElement>(null);

  const metaRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const signalRef = useRef<HTMLSpanElement>(null);

  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const showOverlay = () => {
    if (!overlayRef.current) return;

    gsap.set(overlayRef.current, {
      autoAlpha: 1,
      pointerEvents: "auto",
    });

    document.body.classList.add("beauty-menu-open");
    setIsOpen(true);
  };

  const hideOverlay = () => {
    if (overlayRef.current) {
      gsap.set(overlayRef.current, {
        autoAlpha: 0,
        pointerEvents: "none",
      });
    }

    document.body.classList.remove("beauty-menu-open");
    setIsOpen(false);
  };

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[];
      const navLinks = navItemRefs.current.filter(
        Boolean
      ) as HTMLAnchorElement[];

      const topLine = topLineRef.current;
      const middleLine = middleLineRef.current;
      const bottomLine = bottomLineRef.current;

      const meta = metaRef.current;
      const footer = footerRef.current;
      const signal = signalRef.current;

      if (
        !overlay ||
        panels.length !== 4 ||
        navLinks.length !== navItems.length ||
        !topLine ||
        !middleLine ||
        !bottomLine ||
        !meta ||
        !footer ||
        !signal
      ) {
        return;
      }

      gsap.set(overlay, {
        autoAlpha: 0,
        pointerEvents: "none",
      });

      gsap.set(panels, {
        yPercent: -115,
        rotation: 0,
        transformOrigin: "50% 0%",
      });

      gsap.set(navLinks, {
        autoAlpha: 0,
        y: 55,
        rotationX: -18,
        transformPerspective: 1000,
        transformOrigin: "50% 100%",
      });

      gsap.set([meta, footer], {
        autoAlpha: 0,
        y: 20,
      });

      gsap.set(signal, {
        autoAlpha: 0,
        scale: 0,
      });

      const timeline = gsap.timeline({
        paused: true,

        onReverseComplete: hideOverlay,
        onComplete: hideOverlay,
      });

      timeline
        /* Reset values every time timeline starts */
        .set(
          panels,
          {
            yPercent: -115,
            rotation: 0,
          },
          0
        )
        .set(
          navLinks,
          {
            autoAlpha: 0,
            y: 55,
            rotationX: -18,
          },
          0
        )
        .set(
          [meta, footer],
          {
            autoAlpha: 0,
            y: 20,
          },
          0
        )
        .set(
          signal,
          {
            autoAlpha: 0,
            scale: 0,
          },
          0
        )

        /* HAMBURGER → CROSS */
        .to(
          topLine,
          {
            y: 8,
            rotation: 45,
            duration: 0.28,
            ease: "power3.out",
            easeReverse: "power3.in",
          },
          0
        )
        .to(
          middleLine,
          {
            autoAlpha: 0,
            scaleX: 0,
            duration: 0.18,
            ease: "power2.out",
            easeReverse: "power2.in",
          },
          0
        )
        .to(
          bottomLine,
          {
            y: -8,
            rotation: -45,
            duration: 0.28,
            ease: "power3.out",
            easeReverse: "power3.in",
          },
          0
        )

        /* PANEL ENTRY */
        .to(
          panels,
          {
            yPercent: 0,
            duration: 0.9,
            stagger: 0.075,
            ease: "back.out(1.22)",
            easeReverse: "power4.in",
          },
          0
        )

        /* NAVIGATION ENTRY */
        .to(
          navLinks,
          {
            autoAlpha: 1,
            y: 0,
            rotationX: 0,
            duration: 0.72,
            stagger: 0.075,
            ease: "expo.out",
            easeReverse: "power4.in",
          },
          0.22
        )

        .to(
          [meta, footer],
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.48,
            stagger: 0.08,
            ease: "power3.out",
            easeReverse: "power3.in",
          },
          0.4
        )

        .to(
          signal,
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.45,
            ease: "back.out(2)",
            easeReverse: "power3.in",
          },
          0.56
        )

        /* FULLY OPEN */
        .addLabel("open")
        .addPause("open")

        /* EXIT TEXT */
        .to(navLinks, {
          autoAlpha: 0,
          y: -30,
          rotationX: 10,
          duration: 0.24,
          stagger: {
            each: 0.035,
            from: "end",
          },
          ease: "power3.in",
        })

        .to(
          [meta, footer, signal],
          {
            autoAlpha: 0,
            y: 18,
            scale: 0.96,
            duration: 0.22,
            ease: "power2.in",
          },
          "<0.03"
        )

        /* PANEL EXIT */
        .to(
          panels,
          {
            yPercent: 120,
            rotation: () => gsap.utils.random(-12, 12, 1),
            duration: 0.82,
            stagger: 0.085,
            ease: "power4.in",
          },
          "<0.05"
        )

        /* CROSS → HAMBURGER */
        .to(
          topLine,
          {
            y: 0,
            rotation: 0,
            duration: 0.22,
            ease: "power2.inOut",
          },
          "<0.12"
        )
        .to(
          middleLine,
          {
            autoAlpha: 1,
            scaleX: 1,
            duration: 0.18,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          bottomLine,
          {
            y: 0,
            rotation: 0,
            duration: 0.22,
            ease: "power2.inOut",
          },
          "<"
        );

      timelineRef.current = timeline;

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key !== "Escape") return;

        const tl = timelineRef.current;
        if (!tl || tl.progress() === 0) return;

        if (tl.time() < tl.labels.open) {
          tl.reverse();
        } else {
          tl.play();
        }
      };

      window.addEventListener("keydown", handleEscape);

      return () => {
        window.removeEventListener("keydown", handleEscape);
        document.body.classList.remove("beauty-menu-open");
        timeline.kill();
      };
    },
    { scope: rootRef }
  );

  const toggleMenu = () => {
    const tl = timelineRef.current;
    if (!tl) return;

    const openTime = tl.labels.open;

    /* Finished exit → open again */
    if (tl.progress() >= 0.999) {
      showOverlay();
      tl.restart();
      return;
    }

    /* First opening */
    if (tl.time() <= 0.001 && tl.paused()) {
      showOverlay();
      tl.play();
      return;
    }

    /* Fully open → run custom exit */
    if (tl.paused() && Math.abs(tl.time() - openTime) < 0.03) {
      tl.play();
      return;
    }

    /* Reversing → open again */
    if (tl.reversed()) {
      showOverlay();
      tl.play();
      return;
    }

    /* Opening or exiting → reverse */
    tl.reverse();
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const tl = timelineRef.current;

    if (!tl) {
      router.push(href);
      return;
    }

    tl.eventCallback("onComplete", () => {
      hideOverlay();
      tl.eventCallback("onComplete", hideOverlay);
      router.push(href);
    });

    tl.play();
  };

  return (
    <div ref={rootRef}>
      {/* NO BACKGROUND HAMBURGER BUTTON */}
      <button
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-controls="beauty-navigation"
        className="
          group fixed right-5 top-5 z-[100]
          grid h-12 w-12 place-items-center
          bg-transparent p-0
          text-[#102957]
          outline-none
          transition-colors duration-300
          hover:text-[#f264a8]
          focus-visible:ring-2 focus-visible:ring-[#f264a8]/50
          md:right-8 md:top-8
        "
      >
        <span
          className="flex h-7 w-8 flex-col justify-center gap-[7px]"
          aria-hidden="true"
        >
          {/* Top line */}
          <span
            ref={topLineRef}
            className={`
              block h-[1.5px] rounded-full bg-current
              transition-[width] duration-300 ease-out
              ${isOpen ? "w-8" : "w-8"}
            `}
          />

          {/* Middle line */}
          <span
            ref={middleLineRef}
            className={`
              block h-[1.5px] self-end rounded-full bg-current
              transition-[width] duration-300 ease-out
              ${isOpen ? "w-8" : "w-[18px] group-hover:w-8"}
            `}
          />

          {/* Bottom line */}
          <span
            ref={bottomLineRef}
            className={`
              block h-[1.5px] rounded-full bg-current
              transition-[width] duration-300 ease-out
              ${isOpen ? "w-8" : "w-6 group-hover:w-8"}
            `}
          />
        </span>
      </button>

      <div
        ref={overlayRef}
        id="beauty-navigation"
        aria-hidden={!isOpen}
        className="fixed inset-0 z-[90] isolate overflow-hidden invisible opacity-0"
      >
        {/* Soft blue */}
        <div
          ref={(element) => {
            panelRefs.current[0] = element;
          }}
          className="
            absolute inset-0 z-[1] bg-[#eff6ff]
            [clip-path:polygon(0_0,100%_0,92%_100%,0_100%)]
          "
        />

        {/* Powder blue */}
        <div
          ref={(element) => {
            panelRefs.current[1] = element;
          }}
          className="
            absolute inset-0 z-[2] bg-[#cce5ff]
            [clip-path:polygon(25%_0,100%_0,100%_100%,19%_100%)]
            max-md:[clip-path:polygon(18%_0,100%_0,100%_100%,10%_100%)]
          "
        />

        {/* Blush pink */}
        <div
          ref={(element) => {
            panelRefs.current[2] = element;
          }}
          className="
            absolute inset-0 z-[3] bg-[#ffd9e9]
            [clip-path:polygon(52%_0,100%_0,100%_100%,45%_100%)]
            max-md:[clip-path:polygon(48%_0,100%_0,100%_100%,38%_100%)]
          "
        />

        {/* Rose pink */}
        <div
          ref={(element) => {
            panelRefs.current[3] = element;
          }}
          className="
            absolute inset-0 z-[4] bg-[#f58abb]
            [clip-path:polygon(78%_0,100%_0,100%_100%,72%_100%)]
            max-md:[clip-path:polygon(73%_0,100%_0,100%_100%,63%_100%)]
          "
        />

        <div
          className="
            relative z-10 flex min-h-full flex-col justify-between
            px-6 py-6 text-[#102957]
            md:px-[clamp(24px,6vw,96px)] md:py-9
          "
        >
          <div
            ref={metaRef}
            className="
              flex w-fit items-center gap-2.5
              text-[9px] font-bold uppercase tracking-[0.14em]
              text-[#102957]/75 md:text-[11px]
            "
          >
            <span>Beauty Beyond Routine</span>
            <span className="h-px w-9 bg-[#f264a8]" />
            <span>Glow With Confidence</span>
          </div>

          <nav
            aria-label="Primary Navigation"
            className="my-auto grid w-full max-w-[1120px] gap-3 md:gap-1"
          >
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                ref={(element) => {
                  navItemRefs.current[index] = element;
                }}
                onClick={(event) => handleNavClick(event, item.href)}
                className="
                  group grid w-full grid-cols-[32px_1fr_35px]
                  items-center gap-2 py-1.5 no-underline
                  md:grid-cols-[52px_1fr_50px] md:gap-3.5
                "
              >
                <span className="text-[10px] font-bold tracking-[0.12em] text-[#f264a8] md:text-[11px]">
                  {item.index}
                </span>

                <span
                  style={{ fontFamily: "var(--font-cormorant)" }}
                  className="
                    w-fit text-[clamp(3rem,14vw,5.8rem)]
                    font-semibold leading-[0.82] tracking-[-0.055em]
                    text-[#102957]
                    transition-all duration-300
                    group-hover:translate-x-3 group-hover:text-[#f264a8]
                    md:text-[clamp(4rem,8.5vw,9rem)]
                    md:group-hover:translate-x-[18px]
                  "
                >
                  {item.label}
                </span>

                <span
                  className="
                    grid aspect-square w-[34px] place-items-center
                    rounded-full border border-[#102957]/20
                    bg-white/30 text-[15px] text-[#102957]
                    transition-all duration-300
                    group-hover:rotate-45
                    group-hover:border-[#f264a8]
                    group-hover:bg-[#f264a8]
                    group-hover:text-white
                    md:w-11 md:text-[19px]
                  "
                >
                  ↗
                </span>
              </a>
            ))}
          </nav>

          <div
            ref={footerRef}
            className="
              flex flex-col items-start justify-between gap-6
              text-xs font-semibold tracking-[0.02em] text-[#102957]
              md:flex-row md:items-end
            "
          >
            <div className="inline-flex items-center gap-2">
              <span
                ref={signalRef}
                className="h-2.5 w-2.5 rounded-full bg-[#f264a8]"
              />
              <span>Curated beauty. Visible confidence.</span>
            </div>

            <div className="flex flex-col gap-1.5 text-left text-[#102957]/70 md:items-end md:text-right">
              <a
                href="mailto:hello@yourbeautybrand.com"
                className="transition-colors hover:text-[#f264a8]"
              >
                hello@yourbeautybrand.com
              </a>

              <span>Beauty · Skincare · Self-care</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}