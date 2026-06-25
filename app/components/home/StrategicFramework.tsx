"use client";

import { useRef, type ComponentType } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  {
    number: "01",
    label: "Foundation",
    title: "Audit & Setup",
    description: "Check ads, tracking, funnels, and landing pages.",
    color: "#f264a8",
  },
  {
    number: "02",
    label: "Intelligence",
    title: "Research & Insight",
    description: "Find buyer pain points, offers, and market gaps.",
    color: "#4c9cf5",
  },
  {
    number: "03",
    label: "Execution",
    title: "Plan & Launch",
    description: "Launch structured campaigns with clear KPIs.",
    color: "#102957",
  },
  {
    number: "04",
    label: "Scale",
    title: "Optimize & Scale",
    description: "Improve winners and scale profitable growth.",
    color: "#a855f7",
  },
];

type Step = (typeof steps)[number];

type LayoutPosition = {
  x: number;
  y: number;
  scale: number;
};

function AuditIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <rect
        x="5"
        y="3.5"
        width="14"
        height="17"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m8.5 10 1.7 1.7 3.3-3.3M8.5 15.5h6.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ResearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <circle
        cx="10.5"
        cy="10.5"
        r="5.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m15 15 4.2 4.2M8 10.5h5M10.5 8v5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlanIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M5 19V8m0 11h14M8 15l3-3 2.5 1.8L18 8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="8" r="1.5" fill="currentColor" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M5 18 10 13l3 3 6-7M14 9h5v5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M5 17 17 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 5h8v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const icons: ComponentType[] = [
  AuditIcon,
  ResearchIcon,
  PlanIcon,
  ScaleIcon,
];

function AmbientGrowthBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Same pastel background shading */}
      <div
        data-background-float
        className="absolute -left-52 -top-52 h-[38rem] w-[38rem] rounded-full bg-[#cce5ff]/65 blur-3xl"
      />

      <div
        data-background-float
        className="absolute -bottom-64 -right-52 h-[43rem] w-[43rem] rounded-full bg-[#ffd4e7]/75 blur-3xl"
      />

      <div
        data-background-float
        className="absolute left-[34%] top-[28%] h-[28rem] w-[28rem] rounded-full bg-[#f0ddff]/55 blur-3xl"
      />

      {/* Growth graph visual */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-70"
      >
        <path
          data-ambient-path
          d="M-40 680 C 190 500, 280 700, 495 520 S 800 340, 1010 470 S 1270 280, 1500 110"
          fill="none"
          stroke="#225a98"
          strokeOpacity="0.14"
          strokeWidth="2"
          strokeDasharray="9 14"
        />

        <path
          data-ambient-path
          d="M-20 740 C 190 620, 330 770, 555 600 S 845 480, 1090 550 S 1310 400, 1500 290"
          fill="none"
          stroke="#f264a8"
          strokeOpacity="0.16"
          strokeWidth="2"
          strokeDasharray="5 16"
        />

        <path
          data-ambient-path
          d="M120 80 C 360 180, 500 70, 700 170 S 1100 210, 1330 70"
          fill="none"
          stroke="#4c9cf5"
          strokeOpacity="0.13"
          strokeWidth="2"
          strokeDasharray="8 16"
        />

        <circle cx="495" cy="520" r="8" fill="#f264a8" fillOpacity="0.22" />
        <circle cx="1010" cy="470" r="8" fill="#4c9cf5" fillOpacity="0.22" />
        <circle cx="1090" cy="550" r="8" fill="#a855f7" fillOpacity="0.2" />
      </svg>

      <div
        data-ambient-orbit
        className="absolute left-[8%] top-[18%] hidden h-44 w-44 rounded-full border border-dashed border-[#225a98]/20 lg:block"
      >
        <span className="absolute -left-2 top-1/2 h-3 w-3 rounded-full bg-[#f264a8]/70 shadow-[0_0_0_8px_rgba(242,100,168,0.10)]" />
        <span className="absolute right-2 top-6 h-2.5 w-2.5 rounded-full bg-[#4c9cf5]/70 shadow-[0_0_0_8px_rgba(76,156,245,0.10)]" />
      </div>

      <div
        data-ambient-orbit
        className="absolute bottom-[12%] right-[8%] hidden h-56 w-56 rounded-full border border-dashed border-[#f264a8]/20 lg:block"
      >
        <span className="absolute bottom-8 left-4 h-3 w-3 rounded-full bg-[#a855f7]/60 shadow-[0_0_0_8px_rgba(168,85,247,0.10)]" />
      </div>
    </div>
  );
}

function FrameworkCard({
  step,
  Icon,
  mode,
}: {
  step: Step;
  Icon: ComponentType;
  mode: "mobile" | "desktop";
}) {
  const isMobile = mode === "mobile";

  return (
    <article
      className={`
        group relative flex h-full flex-col overflow-hidden rounded-[1.5rem]
        border border-[#102957]/12 bg-white/90 backdrop-blur-md
        transition-[border-color,box-shadow,background-color] duration-300
        hover:border-[#102957]/30
        hover:shadow-[0_24px_60px_rgba(16,41,87,0.14)]
        ${
          isMobile
            ? "min-h-[235px] p-6 sm:min-h-[270px] sm:p-7"
            : "p-5 xl:p-6 2xl:p-7"
        }
      `}
    >
      <div
        className="absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundColor: `${step.color}38` }}
      />

      <span
        className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ backgroundColor: step.color }}
      />

      <div className="relative z-10 flex items-center justify-between">
        <span
          className={`
            grid place-items-center rounded-2xl text-white
            transition-transform duration-300
            group-hover:rotate-6 group-hover:scale-110
            ${
              isMobile
                ? "h-11 w-11"
                : "h-11 w-11 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14"
            }
          `}
          style={{ backgroundColor: step.color }}
        >
          <Icon />
        </span>

        <span
          className={`font-bold tracking-[0.16em] text-[#102957]/35 ${
            isMobile ? "text-[11px]" : "text-[10px] xl:text-[11px]"
          }`}
        >
          {step.number}
        </span>
      </div>

      <div className="relative z-10 mt-auto">
        <p
          className={`font-bold uppercase tracking-[0.16em] ${
            isMobile ? "text-[10px]" : "text-[9px] xl:text-[10px]"
          }`}
          style={{ color: step.color }}
        >
          {step.label}
        </p>

        <h3
          className={`
            [text-wrap:balance] font-semibold leading-[0.88]
            tracking-[-0.06em] text-[#102957]
            ${
              isMobile
                ? "mt-2 text-[1.85rem] sm:text-[2.2rem]"
                : "mt-3 text-[clamp(1.5rem,2.15vw,2.65rem)]"
            }
          `}
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          {step.title}
        </h3>

        <p
          className={`
            font-medium text-[#102957]/62
            ${
              isMobile
                ? "mt-3 text-[13px] leading-[1.5] sm:text-sm"
                : "mt-3 text-[11px] leading-5 xl:text-[13px] xl:leading-6 2xl:text-[14px]"
            }
          `}
        >
          {step.description}
        </p>

        <div
          className={`flex items-center justify-between ${
            isMobile ? "mt-6" : "mt-5 xl:mt-6"
          }`}
        >
          <span
            className="h-px w-10 transition-all duration-300 group-hover:w-20"
            style={{ backgroundColor: step.color }}
          />

          <span className="text-[#102957]/45 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#102957]">
            <ArrowIcon />
          </span>
        </div>
      </div>
    </article>
  );
}

export default function StrategicFramework() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(SVGPathElement | null)[]>([]);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const stage = stageRef.current;

      if (!section || !stage) return;

      const q = gsap.utils.selector(section);

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const ambientOrbit = q("[data-ambient-orbit]");
      const ambientFloat = q("[data-background-float]");
      const ambientPaths = q("[data-ambient-path]");

      const ambientTweens: gsap.core.Tween[] = [];

      if (!prefersReducedMotion) {
        ambientTweens.push(
          gsap.to(ambientOrbit, {
            rotation: 360,
            duration: 38,
            repeat: -1,
            ease: "none",
          })
        );

        ambientTweens.push(
          gsap.to(ambientFloat, {
            x: (index) => (index % 2 === 0 ? 22 : -22),
            y: (index) => (index % 2 === 0 ? -16 : 16),
            duration: (index) => 7 + index * 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          })
        );

        ambientTweens.push(
          gsap.to(ambientPaths, {
            strokeDashoffset: -180,
            duration: 12,
            repeat: -1,
            ease: "none",
          })
        );
      }

      const media = gsap.matchMedia();

      /* Mobile + tablet card entrance */
      media.add("(max-width: 1023px)", () => {
        if (prefersReducedMotion) return;

        const mobileCards = q("[data-mobile-card]");

        const mobileIntro = gsap.fromTo(
          mobileCards,
          {
            autoAlpha: 0,
            y: 28,
          },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );

        return () => {
          mobileIntro.kill();
        };
      });

      /* Desktop connected card animation */
      media.add("(min-width: 1024px)", () => {
        const cards = cardRefs.current.filter(
          (card): card is HTMLDivElement => card !== null
        );

        const lines = lineRefs.current.filter(
          (line): line is SVGPathElement => line !== null
        );

        const nodes = nodeRefs.current.filter(
          (node): node is HTMLSpanElement => node !== null
        );

        const growthCore = q("[data-growth-core]");

        if (
          cards.length !== steps.length ||
          lines.length !== 3 ||
          nodes.length !== 6
        ) {
          return;
        }

        let timeline: gsap.core.Timeline | null = null;
        let resizeFrame: number | null = null;

        const toSvgPoint = (
          point: { x: number; y: number },
          width: number,
          height: number
        ) => ({
          x: (point.x / width) * 1000,
          y: (point.y / height) * 1000,
        });

        const buildTimeline = () => {
          timeline?.scrollTrigger?.kill();
          timeline?.kill();

          const stageWidth = stage.clientWidth;
          const stageHeight = stage.clientHeight;

          if (!stageWidth || !stageHeight) return;

          const cardWidth = cards[0].offsetWidth;
          const cardHeight = cards[0].offsetHeight;

          const edgeX = Math.max(20, stageWidth * 0.02);
          const edgeY = Math.max(18, stageHeight * 0.035);

          /* Enough center space for the growth visual */
          const gapX = Math.max(125, Math.min(180, stageWidth * 0.12));
          const gapY = Math.max(38, Math.min(72, stageHeight * 0.085));

          const widthScale =
            (stageWidth - edgeX * 2 - gapX) / (cardWidth * 2);

          const heightScale =
            (stageHeight - edgeY * 2 - gapY) / (cardHeight * 2);

          const fitScale = Math.min(1, widthScale, heightScale);

          const finalCardWidth = cardWidth * fitScale;
          const finalCardHeight = cardHeight * fitScale;

          const xDistance = finalCardWidth / 2 + gapX / 2;
          const yDistance = finalCardHeight / 2 + gapY / 2;

          const layout: LayoutPosition[] = [
            { x: -xDistance, y: -yDistance, scale: fitScale },
            { x: xDistance, y: -yDistance, scale: fitScale },
            { x: xDistance, y: yDistance, scale: fitScale },
            { x: -xDistance, y: yDistance, scale: fitScale },
          ];

          const centerX = stageWidth / 2;
          const centerY = stageHeight / 2;

          const cardCenters = layout.map((item) => ({
            x: centerX + item.x,
            y: centerY + item.y,
          }));

          const points = [
            {
              x: cardCenters[0].x + finalCardWidth / 2,
              y: cardCenters[0].y,
            },
            {
              x: cardCenters[1].x - finalCardWidth / 2,
              y: cardCenters[1].y,
            },
            {
              x: cardCenters[1].x,
              y: cardCenters[1].y + finalCardHeight / 2,
            },
            {
              x: cardCenters[2].x,
              y: cardCenters[2].y - finalCardHeight / 2,
            },
            {
              x: cardCenters[2].x - finalCardWidth / 2,
              y: cardCenters[2].y,
            },
            {
              x: cardCenters[3].x + finalCardWidth / 2,
              y: cardCenters[3].y,
            },
          ];

          const linePairs = [
            [points[0], points[1]],
            [points[2], points[3]],
            [points[4], points[5]],
          ];

          cards.forEach((card, index) => {
            gsap.set(card, {
              xPercent: -50,
              yPercent: -50,
              x: layout[index].x,
              y: stageHeight * 0.62,
              scale: layout[index].scale * 0.88,
              autoAlpha: 0,
              transformOrigin: "center center",
            });
          });

          gsap.set(growthCore, {
            autoAlpha: 0,
            scale: 0.72,
          });

          nodes.forEach((node, index) => {
            gsap.set(node, {
              xPercent: -50,
              yPercent: -50,
              x: points[index].x - centerX,
              y: points[index].y - centerY,
              scale: 0,
              autoAlpha: 0,
            });
          });

          lines.forEach((line, index) => {
            const [from, to] = linePairs[index];

            const start = toSvgPoint(from, stageWidth, stageHeight);
            const end = toSvgPoint(to, stageWidth, stageHeight);

            line.setAttribute(
              "d",
              `M ${start.x} ${start.y} L ${end.x} ${end.y}`
            );

            const length = line.getTotalLength();

            gsap.set(line, {
              autoAlpha: 0,
              strokeDasharray: length,
              strokeDashoffset: length,
            });
          });

          if (prefersReducedMotion) {
            cards.forEach((card, index) => {
              gsap.set(card, {
                y: layout[index].y,
                scale: layout[index].scale,
                autoAlpha: 1,
              });
            });

            gsap.set(growthCore, {
              autoAlpha: 0.75,
              scale: 1,
            });

            nodes.forEach((node) => {
              gsap.set(node, {
                scale: 1,
                autoAlpha: 1,
              });
            });

            lines.forEach((line) => {
              gsap.set(line, {
                autoAlpha: 1,
                strokeDashoffset: 0,
              });
            });

            return;
          }

          timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${Math.max(window.innerHeight * 3.2, 2100)}`,
              pin: true,
              pinSpacing: true,
              scrub: 0.9,
              anticipatePin: 1,
              fastScrollEnd: true,
              invalidateOnRefresh: true,
            },
          });

          timeline
            .to(
              growthCore,
              {
                autoAlpha: 0.75,
                scale: 1,
                duration: 0.2,
                ease: "power3.out",
              },
              0
            )
            .to(cards[0], {
              y: layout[0].y,
              scale: layout[0].scale,
              autoAlpha: 1,
              duration: 0.27,
              ease: "power3.out",
            })
            .to(nodes[0], {
              scale: 1,
              autoAlpha: 1,
              duration: 0.09,
              ease: "back.out(2)",
            })
            .to(lines[0], {
              autoAlpha: 1,
              strokeDashoffset: 0,
              duration: 0.24,
              ease: "power2.out",
            })
            .to(nodes[1], {
              scale: 1,
              autoAlpha: 1,
              duration: 0.09,
              ease: "back.out(2)",
            })
            .to(cards[1], {
              y: layout[1].y,
              scale: layout[1].scale,
              autoAlpha: 1,
              duration: 0.25,
              ease: "power3.out",
            })
            .to(nodes[2], {
              scale: 1,
              autoAlpha: 1,
              duration: 0.09,
              ease: "back.out(2)",
            })
            .to(lines[1], {
              autoAlpha: 1,
              strokeDashoffset: 0,
              duration: 0.24,
              ease: "power2.out",
            })
            .to(nodes[3], {
              scale: 1,
              autoAlpha: 1,
              duration: 0.09,
              ease: "back.out(2)",
            })
            .to(cards[2], {
              y: layout[2].y,
              scale: layout[2].scale,
              autoAlpha: 1,
              duration: 0.25,
              ease: "power3.out",
            })
            .to(nodes[4], {
              scale: 1,
              autoAlpha: 1,
              duration: 0.09,
              ease: "back.out(2)",
            })
            .to(lines[2], {
              autoAlpha: 1,
              strokeDashoffset: 0,
              duration: 0.24,
              ease: "power2.out",
            })
            .to(nodes[5], {
              scale: 1,
              autoAlpha: 1,
              duration: 0.09,
              ease: "back.out(2)",
            })
            .to(cards[3], {
              y: layout[3].y,
              scale: layout[3].scale,
              autoAlpha: 1,
              duration: 0.25,
              ease: "power3.out",
            });
        };

        buildTimeline();

        const resizeObserver = new ResizeObserver(() => {
          if (resizeFrame) cancelAnimationFrame(resizeFrame);

          resizeFrame = requestAnimationFrame(() => {
            buildTimeline();
            ScrollTrigger.refresh();
          });
        });

        resizeObserver.observe(stage);

        return () => {
          if (resizeFrame) cancelAnimationFrame(resizeFrame);

          resizeObserver.disconnect();
          timeline?.scrollTrigger?.kill();
          timeline?.kill();
        };
      });

      const refresh = () => ScrollTrigger.refresh();

      window.addEventListener("load", refresh);
      requestAnimationFrame(refresh);

      return () => {
        window.removeEventListener("load", refresh);

        ambientTweens.forEach((tween) => tween.kill());
        media.revert();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative min-h-[100svh] overflow-x-hidden
        bg-[#fff9fc] text-[#102957]
        lg:h-[100svh] lg:min-h-0 lg:overflow-hidden
      "
    >
      <AmbientGrowthBackground />

      <div
        className="
          relative z-10 mx-auto max-w-[1560px] px-5 py-16
          sm:px-8 sm:py-20
          md:px-10 md:py-24
          lg:grid lg:h-full lg:grid-rows-[auto_minmax(0,1fr)]
          lg:gap-5 lg:px-12 lg:py-[clamp(1.75rem,4vh,3.5rem)]
          xl:px-16
        "
      >
        <header className="relative z-30 max-w-[830px]">
          <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#225a98] sm:text-xs">
            <span className="h-px w-9 bg-[#f264a8]" />
            The Growth Process
          </div>

          <h2
            className="
              text-[clamp(2.8rem,10vw,5rem)]
              font-semibold leading-[0.86] tracking-[-0.065em]
              sm:text-[clamp(3.5rem,7vw,5.5rem)]
              lg:text-[clamp(3.3rem,5vw,6rem)]
            "
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Growth <span className="text-[#f264a8]">Framework</span>
          </h2>

          <p className="mt-4 max-w-[560px] text-sm font-medium leading-6 text-[#102957]/62 sm:text-base sm:leading-7">
            A clear, connected system that turns insights into consistent,
            measurable growth.
          </p>
        </header>

        {/* Mobile + tablet */}
        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:hidden">
          {steps.map((step, index) => {
            const Icon = icons[index];

            return (
              <div key={step.number} data-mobile-card>
                <FrameworkCard step={step} Icon={Icon} mode="mobile" />
              </div>
            );
          })}
        </div>

        {/* Desktop */}
        <div ref={stageRef} className="relative mt-5 hidden min-h-0 lg:block">
          <div
            data-growth-core
            className="
              pointer-events-none absolute left-1/2 top-1/2 z-0
              grid h-[clamp(115px,13vw,175px)] w-[clamp(115px,13vw,175px)]
              -translate-x-1/2 -translate-y-1/2 place-items-center
              rounded-full border border-[#102957]/10 bg-white/35
              text-center backdrop-blur-sm
            "
          >
            <div className="absolute inset-3 rounded-full border border-dashed border-[#225a98]/25" />
            <div className="absolute inset-7 rounded-full bg-gradient-to-br from-[#cce5ff]/70 via-white/75 to-[#ffd4e7]/65" />

            <div className="relative z-10">
              <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#f264a8]">
                Growth System
              </p>

              <p
                className="mt-1 text-[clamp(1.3rem,2vw,2rem)] font-semibold leading-[0.83] tracking-[-0.06em] text-[#102957]"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Insight
                <br />
                to Scale
              </p>
            </div>
          </div>

          <svg
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            aria-hidden="true"
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <path
                key={index}
                ref={(node) => {
                  lineRefs.current[index] = node;
                }}
                fill="none"
                stroke="#102957"
                strokeOpacity="0.35"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ))}
          </svg>

          {Array.from({ length: 6 }).map((_, index) => {
            const colors = [
              "#f264a8",
              "#4c9cf5",
              "#4c9cf5",
              "#102957",
              "#102957",
              "#a855f7",
            ];

            return (
              <span
                key={index}
                ref={(node) => {
                  nodeRefs.current[index] = node;
                }}
                className="
                  pointer-events-none absolute left-1/2 top-1/2 z-30
                  grid h-5 w-5 place-items-center rounded-full
                  border border-[#102957]/20 bg-white
                  shadow-[0_8px_18px_rgba(16,41,87,0.10)]
                "
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: colors[index] }}
                />
              </span>
            );
          })}

          {steps.map((step, index) => {
            const Icon = icons[index];

            return (
              <div
                key={step.number}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                className="
                  absolute left-1/2 top-1/2 z-20
                  h-[clamp(205px,29svh,345px)]
                  w-[clamp(290px,28vw,445px)]
                  will-change-transform
                "
              >
                <FrameworkCard step={step} Icon={Icon} mode="desktop" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}