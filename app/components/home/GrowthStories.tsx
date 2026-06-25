"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Story = {
  number: string;
  category: string;
  metric: string;
  metricLabel: string;
  result: string;
  title: string;
  href: string;
  accent: string;
};

const stories: Story[] = [
  {
    number: "01",
    category: "Facebook Ads",
    metric: "$280K+",
    metricLabel: "Sales in 30 days",
    result: "4.51× ROAS",
    title:
      "How We Achieved $280K+ in Sales with a 4.51X ROAS in 30 Days Using Facebook Ads",
    href: "/case-studies/facebook-ads-280k",
    accent: "#f264a8",
  },
  {
    number: "02",
    category: "Cross-Border Growth",
    metric: "$750K",
    metricLabel: "Revenue scaled",
    result: "From $0",
    title:
      "How We Scaled a Cross-Border E-Commerce Brand from $0 to $750K in Revenue",
    href: "/case-studies/cross-border-750k",
    accent: "#4c9cf5",
  },
  {
    number: "03",
    category: "Google Ads",
    metric: "62%",
    metricLabel: "Lower CPC",
    result: "+357% ROAS",
    title: "Scaling Google Ads: How We Cut CPC by 62% & Increased ROAS by 357%",
    href: "/case-studies/google-ads-roas",
    accent: "#a855f7",
  },

  // Replace these sample additions with verified client data before publishing.
  {
    number: "04",
    category: "Creative Testing",
    metric: "DTC",
    metricLabel: "Creative growth system",
    result: "Always-on testing",
    title:
      "How We Built a High-Volume Creative Testing System for a Growing DTC Brand",
    href: "/case-studies/creative-testing-system",
    accent: "#f28c4c",
  },
  {
    number: "05",
    category: "Retention Growth",
    metric: "CRM",
    metricLabel: "Lifecycle revenue",
    result: "Repeat purchase strategy",
    title:
      "From First Purchase to Repeat Order: Building a Retention Engine That Scales",
    href: "/case-studies/retention-growth",
    accent: "#22a57a",
  },
  {
    number: "06",
    category: "Conversion Rate",
    metric: "CRO",
    metricLabel: "Shopify optimisation",
    result: "Better checkout flow",
    title:
      "How We Improved Product Page and Checkout Conversion for a Fashion Store",
    href: "/case-studies/shopify-cro",
    accent: "#e46b9d",
  },
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M5 17 17 5M9 5h8v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M4 18 9.5 12.5l3.5 3L20 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7h5v5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StoryCard({ story }: { story: Story }) {
  return (
    <article
      className="
        group relative flex h-full min-h-[410px] flex-col overflow-hidden
        rounded-[1.25rem] border border-[#102957]/10 bg-white p-4
        transition-[border-color,box-shadow] duration-300
        hover:border-[#102957]/30
        hover:shadow-[0_18px_50px_rgba(16,41,87,0.12)]
        sm:min-h-[445px] sm:p-5
        lg:min-h-0 lg:p-6
        xl:p-7
      "
    >
      <span
        className="absolute inset-x-0 top-0 z-20 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ backgroundColor: story.accent }}
      />

      <span
        className="pointer-events-none absolute -bottom-10 -right-3 select-none text-[7rem] font-semibold leading-none tracking-[-0.11em] text-[#102957]/[0.035] sm:text-[9rem]"
        style={{ fontFamily: "var(--font-cormorant), serif" }}
      >
        {story.number}
      </span>

      <div className="relative z-10 flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span
            className="
              grid h-8 w-8 shrink-0 place-items-center rounded-lg text-white
              transition-transform duration-300
              group-hover:rotate-6 group-hover:scale-110
              sm:h-10 sm:w-10 sm:rounded-xl
            "
            style={{ backgroundColor: story.accent }}
          >
            <GrowthIcon />
          </span>

          <span
            className="truncate text-[8px] font-bold uppercase tracking-[0.1em] sm:text-[10px] sm:tracking-[0.14em]"
            style={{ color: story.accent }}
          >
            {story.category}
          </span>
        </div>

        <span className="shrink-0 text-[9px] font-bold tracking-[0.14em] text-[#102957]/35 sm:text-[11px]">
          {story.number}
        </span>
      </div>

      <div className="relative z-10 mt-7 sm:mt-9">
        <p
          className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-none tracking-[-0.08em]"
          style={{
            color: story.accent,
            fontFamily: "var(--font-cormorant), serif",
          }}
        >
          {story.metric}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 sm:mt-3 sm:gap-x-3">
          <span className="text-[8px] font-semibold uppercase tracking-[0.1em] text-[#102957]/45 sm:text-[10px]">
            {story.metricLabel}
          </span>

          <span className="h-1 w-1 rounded-full bg-[#102957]/30" />

          <span className="text-[9px] font-bold text-[#102957] sm:text-[11px]">
            {story.result}
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-auto pt-7 sm:pt-8">
        <h3
          className="
            line-clamp-5 text-[clamp(1.15rem,3.8vw,2.35rem)]
            font-semibold leading-[0.94] tracking-[-0.05em] text-[#102957]
            lg:line-clamp-4 lg:text-[clamp(1.25rem,1.7vw,2.1rem)]
          "
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          {story.title}
        </h3>

        <Link
          href={story.href}
          className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold text-[#102957] transition-all duration-300 hover:gap-3 sm:mt-6 sm:text-sm"
        >
          Read More

          <span className="grid h-7 w-7 place-items-center rounded-full border border-[#102957]/15 transition-all duration-300 group-hover:border-[#102957] group-hover:bg-[#102957] group-hover:text-white sm:h-9 sm:w-9">
            <ArrowUpRight />
          </span>
        </Link>
      </div>
    </article>
  );
}

export default function GrowthStories() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const ctaButtonRef = useRef<HTMLAnchorElement>(null);
  const ctaArrowRef = useRef<HTMLSpanElement>(null);
  const ctaGlowRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const stage = stageRef.current;
      const rail = railRef.current;
      const progress = progressRef.current;
      const ctaButton = ctaButtonRef.current;
      const ctaArrow = ctaArrowRef.current;
      const ctaGlow = ctaGlowRef.current;

      if (!section || !stage || !rail || !progress) return;

      const media = gsap.matchMedia();

      /* Desktop GSAP horizontal flow */
      media.add("(min-width: 1024px)", () => {
        const reduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduceMotion) return;

        const getTravelDistance = () =>
          Math.max(0, rail.scrollWidth - stage.clientWidth);

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () =>
              `+=${Math.max(
                getTravelDistance() * 1.15,
                window.innerHeight * 2.8
              )}`,
            pin: true,
            scrub: 0.9,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to(rail, {
            x: () => -getTravelDistance(),
            duration: 1,
            ease: "none",
          })
          .fromTo(
            progress,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 1,
              ease: "none",
            },
            0
          );

        const observer = new ResizeObserver(() => {
          ScrollTrigger.refresh();
        });

        observer.observe(stage);

        return () => {
          observer.disconnect();
          timeline.scrollTrigger?.kill();
          timeline.kill();
        };
      });

      /* GSAP magnetic effect for last See More button */
      const canHover = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
      ).matches;

      if (ctaButton && ctaArrow && ctaGlow && canHover) {
        const onEnter = () => {
          gsap.to(ctaButton, {
            scale: 1.035,
            duration: 0.35,
            ease: "power3.out",
          });

          gsap.to(ctaArrow, {
            x: 6,
            y: -5,
            rotation: -8,
            duration: 0.35,
            ease: "power3.out",
          });

          gsap.to(ctaGlow, {
            autoAlpha: 0.9,
            scale: 1.2,
            duration: 0.45,
            ease: "power3.out",
          });
        };

        const onMove = (event: MouseEvent) => {
          const rect = ctaButton.getBoundingClientRect();

          const x = (event.clientX - rect.left - rect.width / 2) * 0.1;
          const y = (event.clientY - rect.top - rect.height / 2) * 0.1;

          gsap.to(ctaButton, {
            x,
            y,
            duration: 0.35,
            ease: "power3.out",
          });
        };

        const onLeave = () => {
          gsap.to(ctaButton, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: "elastic.out(1, 0.45)",
          });

          gsap.to(ctaArrow, {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 0.35,
            ease: "power3.out",
          });

          gsap.to(ctaGlow, {
            autoAlpha: 0,
            scale: 0.7,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        ctaButton.addEventListener("mouseenter", onEnter);
        ctaButton.addEventListener("mousemove", onMove);
        ctaButton.addEventListener("mouseleave", onLeave);

        return () => {
          ctaButton.removeEventListener("mouseenter", onEnter);
          ctaButton.removeEventListener("mousemove", onMove);
          ctaButton.removeEventListener("mouseleave", onLeave);
          media.revert();
        };
      }

      return () => media.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f8f9fc] py-11 text-[#102957] sm:py-14 lg:h-[100svh] lg:py-10"
    >
            {/* Beauty background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-48 -top-52 h-[36rem] w-[36rem] rounded-full bg-[#cce5ff]/65 blur-3xl" />
        <div className="absolute -bottom-52 -right-44 h-[40rem] w-[40rem] rounded-full bg-[#ffd1e5]/75 blur-3xl" />
        <div className="absolute left-[42%] top-[30%] h-[22rem] w-[22rem] rounded-full bg-[#efdcff]/50 blur-3xl" />
      </div>

      
      <div className="mx-auto flex min-h-full max-w-[1540px] flex-col px-4 sm:px-7 md:px-10 lg:h-full lg:px-12 xl:px-14">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#102957]/45 sm:text-[10px]">
              Case Studies
            </p>

            <h1
              className="text-[clamp(3rem,5vw,6rem)] font-semibold leading-[0.87] tracking-[-0.06em]"

              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Growth <span className="text-[#f264a8]">Stories</span>
            </h1>
          </div>

          <p className="max-w-[480px] text-sm font-medium leading-relaxed text-[#102957]/60 sm:text-base lg:pb-1">
            Real results from our e-commerce growth strategies, built through
            sharper creative, stronger funnels and performance-led campaigns.
          </p>
        </div>

        {/* Horizontal rail */}
        <div
          ref={stageRef}
          className="
            -mx-4 mt-8 overflow-x-auto px-4 pb-5
            snap-x snap-mandatory
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            sm:-mx-7 sm:px-7
            md:-mx-10 md:px-10
            lg:mx-0 lg:mt-9 lg:min-h-0 lg:flex-1 lg:overflow-hidden lg:px-0 lg:pb-0 lg:snap-none
            motion-reduce:lg:overflow-x-auto
          "
        >
          <div
            ref={railRef}
            className="flex h-auto w-full items-stretch gap-3 sm:gap-4 lg:h-full lg:gap-5 xl:gap-6"
          >
            {stories.map((story) => (
              <div
                key={story.number}
                className="
                  w-[calc((100%_-_0.75rem)_/_2)] shrink-0 snap-start
                  sm:w-[calc((100%_-_1rem)_/_2)]
                  lg:h-full lg:w-[calc((100%_-_2.5rem)_/_3)] lg:snap-none
                  xl:w-[calc((100%_-_3rem)_/_3)]
                "
              >
                <StoryCard story={story} />
              </div>
            ))}

            {/* Last horizontal item: See More CTA */}
            <div
              className="
                w-[calc((100%_-_0.75rem)_/_2)] shrink-0 snap-start
                sm:w-[calc((100%_-_1rem)_/_2)]
                lg:h-full lg:w-[calc((100%_-_2.5rem)_/_3)] lg:snap-none
                xl:w-[calc((100%_-_3rem)_/_3)]
              "
            >
              <article className="relative flex h-full min-h-[410px] flex-col overflow-hidden rounded-[1.25rem] bg-[#102957] p-4 text-white sm:min-h-[445px] sm:p-5 lg:min-h-0 lg:p-6 xl:p-7">
                <span className="absolute -right-14 -top-16 h-48 w-48 rounded-full border border-white/10" />
                <span className="absolute -bottom-16 -left-14 h-52 w-52 rounded-full border border-white/10" />

                <div className="relative z-10">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/45 sm:text-[10px]">
                    More Growth Stories
                  </span>

                  {/* <h3
                    className="mt-5 text-[clamp(2rem,5vw,4rem)] font-semibold leading-[0.88] tracking-[-0.065em]"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    See what happens when strategy meets execution.
                  </h3> */}

                  <p className="mt-5 max-w-sm text-xs leading-relaxed text-white/60 sm:text-sm">
                    Explore the full collection of e-commerce growth stories,
                    campaign breakdowns and performance insights.
                  </p>
                </div>

                <div className="relative z-10 mt-auto pt-8">
                  <Link
                    ref={ctaButtonRef}
                    href="/case-studies"
                    className="relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#f264a8] px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-white hover:text-[#102957] sm:px-6 sm:py-4"
                  >
                    <span
                      ref={ctaGlowRef}
                      className="pointer-events-none absolute inset-0 rounded-full bg-white opacity-0"
                    />

                    <span className="relative z-10">See More Stories</span>

                    <span ref={ctaArrowRef} className="relative z-10">
                      <ArrowUpRight />
                    </span>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* Mobile instruction */}
        <div className="mt-1 flex items-center justify-between lg:hidden">
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#102957]/40">
            Swipe to explore
          </span>
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#102957]/40">
            {stories.length + 1} slides
          </span>
        </div>

        {/* Desktop progress */}
        <div className="mt-7 hidden items-center gap-4 lg:flex">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#102957]/40">
            Scroll to explore
          </span>

          <div className="relative h-px flex-1 overflow-hidden bg-[#102957]/12">
            <div
              ref={progressRef}
              className="absolute inset-y-0 left-0 w-full origin-left bg-[#f264a8]"
            />
          </div>

          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#102957]/40">
            {stories.length} stories + more
          </span>
        </div>
      </div>
    </section>
  );
}