"use client";

import { useRef, type ComponentType } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        group relative flex h-full flex-col overflow-hidden rounded-[1.25rem]
        border border-[#102957]/12 bg-white
        transition-[border-color,box-shadow,background-color] duration-300 ease-out
        hover:border-[#102957]/30
        hover:shadow-[0_18px_45px_rgba(16,41,87,0.12)]
        ${
          isMobile
            ? "min-h-[185px] p-5 sm:min-h-[210px] sm:p-6"
            : "p-4 xl:p-5"
        }
      `}
    >
      <span
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
        style={{ backgroundColor: step.color }}
      />

      <div className="flex items-center justify-between">
        <span
          className={`
            grid place-items-center rounded-xl text-white
            transition-transform duration-300 ease-out
            group-hover:rotate-6 group-hover:scale-110
            ${isMobile ? "h-10 w-10" : "h-8 w-8 xl:h-9 xl:w-9"}
          `}
          style={{ backgroundColor: step.color }}
        >
          <Icon />
        </span>

        <span
          className={`font-bold tracking-[0.16em] text-[#102957]/35 ${
            isMobile ? "text-[11px]" : "text-[9px]"
          }`}
        >
          {step.number}
        </span>
      </div>

      <div className="mt-auto">
        <p
          className={`font-bold uppercase tracking-[0.16em] ${
            isMobile ? "text-[10px]" : "text-[8px]"
          }`}
          style={{ color: step.color }}
        >
          {step.label}
        </p>

        <h3
          className={`
            font-semibold leading-[0.92] tracking-[-0.045em] text-[#102957]
            ${isMobile ? "mt-2 text-[1.7rem] sm:text-[2rem]" : "mt-1.5 text-[clamp(1rem,1.55vw,1.45rem)]"}
          `}
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          {step.title}
        </h3>

        <p
          className={`font-medium leading-[1.45] text-[#102957]/60 ${
            isMobile
              ? "mt-3 text-[13px] sm:text-sm"
              : "mt-2 line-clamp-2 text-[8px] xl:text-[10px]"
          }`}
        >
          {step.description}
        </p>

        <div className={`flex items-center justify-between ${isMobile ? "mt-5" : "mt-3"}`}>
          <span
            className="h-px w-8 transition-all duration-300 group-hover:w-14"
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
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const stage = stageRef.current;

      if (!section || !stage) return;

      const media = gsap.matchMedia();

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

        if (cards.length !== 4 || lines.length !== 3 || nodes.length !== 6) {
          return;
        }

        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

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

          const edgeX = 32;
          const edgeY = 24;
          const gapX = 42;
          const gapY = 40;

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

          const centers = layout.map((item) => ({
            x: centerX + item.x,
            y: centerY + item.y,
          }));

          const connectionPoints = [
            {
              x: centers[0].x + finalCardWidth / 2,
              y: centers[0].y,
            },
            {
              x: centers[1].x - finalCardWidth / 2,
              y: centers[1].y,
            },
            {
              x: centers[1].x,
              y: centers[1].y + finalCardHeight / 2,
            },
            {
              x: centers[2].x,
              y: centers[2].y - finalCardHeight / 2,
            },
            {
              x: centers[2].x - finalCardWidth / 2,
              y: centers[2].y,
            },
            {
              x: centers[3].x + finalCardWidth / 2,
              y: centers[3].y,
            },
          ];

          const linePairs = [
            [connectionPoints[0], connectionPoints[1]],
            [connectionPoints[2], connectionPoints[3]],
            [connectionPoints[4], connectionPoints[5]],
          ];

          cards.forEach((card, index) => {
            gsap.set(card, {
              xPercent: -50,
              yPercent: -50,
              x: layout[index].x,
              y: stageHeight * 0.72,
              scale: layout[index].scale * 0.92,
              autoAlpha: 0,
              transformOrigin: "center center",
            });
          });

          nodes.forEach((node, index) => {
            gsap.set(node, {
              xPercent: -50,
              yPercent: -50,
              x: connectionPoints[index].x - centerX,
              y: connectionPoints[index].y - centerY,
              scale: 0,
              autoAlpha: 0,
            });
          });

          lines.forEach((line, index) => {
            const [from, to] = linePairs[index];

            const start = toSvgPoint(from, stageWidth, stageHeight);
            const end = toSvgPoint(to, stageWidth, stageHeight);

            line.setAttribute("d", `M ${start.x} ${start.y} L ${end.x} ${end.y}`);

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

            nodes.forEach((node) => {
              gsap.set(node, { scale: 1, autoAlpha: 1 });
            });

            lines.forEach((line) => {
              gsap.set(line, { autoAlpha: 1, strokeDashoffset: 0 });
            });

            return;
          }

          timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${Math.max(window.innerHeight * 3.5, 2200)}`,
              pin: true,
              scrub: 0.85,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          timeline
            .to(cards[0], {
              y: layout[0].y,
              scale: layout[0].scale,
              autoAlpha: 1,
              duration: 0.28,
              ease: "power3.out",
            })
            .to(nodes[0], {
              scale: 1,
              autoAlpha: 1,
              duration: 0.1,
              ease: "back.out(2)",
            })
            .to(lines[0], {
              autoAlpha: 1,
              strokeDashoffset: 0,
              duration: 0.25,
              ease: "power2.out",
            })
            .to(nodes[1], {
              scale: 1,
              autoAlpha: 1,
              duration: 0.1,
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
              duration: 0.1,
              ease: "back.out(2)",
            })
            .to(lines[1], {
              autoAlpha: 1,
              strokeDashoffset: 0,
              duration: 0.25,
              ease: "power2.out",
            })
            .to(nodes[3], {
              scale: 1,
              autoAlpha: 1,
              duration: 0.1,
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
              duration: 0.1,
              ease: "back.out(2)",
            })
            .to(lines[2], {
              autoAlpha: 1,
              strokeDashoffset: 0,
              duration: 0.25,
              ease: "power2.out",
            })
            .to(nodes[5], {
              scale: 1,
              autoAlpha: 1,
              duration: 0.1,
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

        const observer = new ResizeObserver(() => {
          if (resizeFrame) cancelAnimationFrame(resizeFrame);

          resizeFrame = requestAnimationFrame(() => {
            buildTimeline();
            ScrollTrigger.refresh();
          });
        });

        observer.observe(stage);

        return () => {
          if (resizeFrame) cancelAnimationFrame(resizeFrame);

          observer.disconnect();
          timeline?.scrollTrigger?.kill();
          timeline?.kill();
        };
      });

      return () => media.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-[#102957] lg:h-screen lg:overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-7 sm:py-10 lg:grid lg:h-full lg:grid-rows-[auto_minmax(0,1fr)] lg:gap-4 lg:px-12 lg:py-10">
        <header className="relative z-30">
          <h1
            className="text-[clamp(3rem,5vw,6rem)] font-semibold leading-[0.87] tracking-[-0.06em]"

            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Growth <span className="text-[#f264a8]">Framework</span>
          </h1>
        </header>

        {/* Mobile + Tablet: normal natural-height layout */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:hidden">
          {steps.map((step, index) => {
            const Icon = icons[index];

            return (
              <FrameworkCard
                key={step.number}
                step={step}
                Icon={Icon}
                mode="mobile"
              />
            );
          })}
        </div>

        {/* Desktop: fixed 100vh GSAP animation */}
        <div ref={stageRef} className="relative hidden min-h-0 lg:block">
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
                strokeOpacity="0.42"
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
                className="pointer-events-none absolute left-1/2 top-1/2 z-30 grid h-5 w-5 place-items-center rounded-full border border-[#102957]/20 bg-white"
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
                className="absolute left-1/2 top-1/2 h-[clamp(155px,21svh,225px)] w-[clamp(210px,21vw,300px)]"
                style={{ zIndex: 20 + index }}
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