"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
        group relative flex h-full min-h-[415px] flex-col overflow-hidden
        rounded-[1.5rem] border border-[#102957]/12 bg-white/90 p-5
        shadow-[0_14px_40px_rgba(16,41,87,0.06)] backdrop-blur-md
        transition-[border-color,box-shadow,transform] duration-300
        hover:-translate-y-1 hover:border-[#102957]/30
        hover:shadow-[0_24px_60px_rgba(16,41,87,0.14)]
        sm:min-h-[460px] sm:p-6
        lg:min-h-0 lg:p-6
        xl:p-7
      "
    >
      <span
        className="absolute inset-x-0 top-0 z-20 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ backgroundColor: story.accent }}
      />

      <span
        className="pointer-events-none absolute -bottom-10 -right-2 select-none text-[8rem] font-semibold leading-none tracking-[-0.11em] text-[#102957]/[0.035] sm:text-[10rem]"
        style={{ fontFamily: "var(--font-cormorant), serif" }}
      >
        {story.number}
      </span>

      <div className="relative z-10 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className="
              grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white
              transition-transform duration-300
              group-hover:rotate-6 group-hover:scale-110
              xl:h-11 xl:w-11
            "
            style={{ backgroundColor: story.accent }}
          >
            <GrowthIcon />
          </span>

          <span
            className="truncate text-[9px] font-bold uppercase tracking-[0.13em] sm:text-[10px] sm:tracking-[0.16em]"
            style={{ color: story.accent }}
          >
            {story.category}
          </span>
        </div>

        <span className="shrink-0 text-[10px] font-bold tracking-[0.14em] text-[#102957]/35">
          {story.number}
        </span>
      </div>

      <div className="relative z-10 mt-8 sm:mt-10">
        <p
          className="text-[clamp(3rem,7vw,5.8rem)] font-semibold leading-none tracking-[-0.08em]"
          style={{
            color: story.accent,
            fontFamily: "var(--font-cormorant), serif",
          }}
        >
          {story.metric}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#102957]/45 sm:text-[10px]">
            {story.metricLabel}
          </span>

          <span className="h-1 w-1 rounded-full bg-[#102957]/30" />

          <span className="text-[10px] font-bold text-[#102957] sm:text-[11px]">
            {story.result}
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-auto pt-8">
        <h3
          className="
            line-clamp-4 text-[clamp(1.35rem,3.7vw,2.35rem)]
            font-semibold leading-[0.92] tracking-[-0.055em] text-[#102957]
            sm:text-[clamp(1.6rem,3vw,2.5rem)]
            lg:text-[clamp(1.25rem,1.72vw,2.15rem)]
          "
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          {story.title}
        </h3>

        <Link
          href={story.href}
          className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#102957] transition-all duration-300 hover:gap-3 sm:text-sm"
        >
          Read More

          <span className="grid h-9 w-9 place-items-center rounded-full border border-[#102957]/15 transition-all duration-300 group-hover:border-[#102957] group-hover:bg-[#102957] group-hover:text-white">
            <ArrowUpRight />
          </span>
        </Link>
      </div>
    </article>
  );
}

function GrowthBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Same background shading as previous sections */}
      <div
        data-bg-float
        className="absolute -left-48 -top-52 h-[36rem] w-[36rem] rounded-full bg-[#cce5ff]/65 blur-3xl"
      />

      <div
        data-bg-float
        className="absolute -bottom-52 -right-44 h-[40rem] w-[40rem] rounded-full bg-[#ffd1e5]/75 blur-3xl"
      />

      <div
        data-bg-float
        className="absolute left-[42%] top-[30%] h-[22rem] w-[22rem] rounded-full bg-[#efdcff]/50 blur-3xl"
      />

      {/* Soft growth graph visualization */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-70"
      >
        <path
          data-bg-path
          d="M-50 690 C 140 530, 280 710, 490 520 S 780 330, 1000 455 S 1270 250, 1510 95"
          fill="none"
          stroke="#225a98"
          strokeOpacity="0.13"
          strokeWidth="2"
          strokeDasharray="10 16"
        />

        <path
          data-bg-path
          d="M-40 770 C 180 620, 330 770, 550 610 S 850 450, 1080 550 S 1300 410, 1510 280"
          fill="none"
          stroke="#f264a8"
          strokeOpacity="0.15"
          strokeWidth="2"
          strokeDasharray="6 18"
        />

        <path
          data-bg-path
          d="M100 80 C 330 170, 520 80, 710 165 S 1080 220, 1360 70"
          fill="none"
          stroke="#4c9cf5"
          strokeOpacity="0.12"
          strokeWidth="2"
          strokeDasharray="8 17"
        />

        <circle cx="490" cy="520" r="8" fill="#f264a8" fillOpacity="0.22" />
        <circle cx="1000" cy="455" r="8" fill="#4c9cf5" fillOpacity="0.2" />
        <circle cx="1080" cy="550" r="8" fill="#a855f7" fillOpacity="0.18" />
      </svg>

      <div
        data-bg-orbit
        className="absolute left-[7%] top-[19%] hidden h-44 w-44 rounded-full border border-dashed border-[#225a98]/20 lg:block"
      >
        <span className="absolute -left-2 top-1/2 h-3 w-3 rounded-full bg-[#f264a8]/70 shadow-[0_0_0_8px_rgba(242,100,168,0.1)]" />
        <span className="absolute right-3 top-6 h-2.5 w-2.5 rounded-full bg-[#4c9cf5]/70 shadow-[0_0_0_8px_rgba(76,156,245,0.1)]" />
      </div>
    </div>
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
      const section = sectionRef.current;
      const stage = stageRef.current;
      const rail = railRef.current;
      const progress = progressRef.current;

      const ctaButton = ctaButtonRef.current;
      const ctaArrow = ctaArrowRef.current;
      const ctaGlow = ctaGlowRef.current;

      if (!section || !stage || !rail || !progress) return;

      const q = gsap.utils.selector(section);

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const bgFloats = q("[data-bg-float]");
      const bgPaths = q("[data-bg-path]");
      const bgOrbits = q("[data-bg-orbit]");
      const mobileCards = q("[data-mobile-card]");

      const ambientTweens: gsap.core.Tween[] = [];

      if (!reduceMotion) {
        ambientTweens.push(
          gsap.to(bgFloats, {
            x: (index) => (index % 2 === 0 ? 20 : -20),
            y: (index) => (index % 2 === 0 ? -15 : 15),
            duration: (index) => 7 + index * 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          })
        );

        ambientTweens.push(
          gsap.to(bgPaths, {
            strokeDashoffset: -180,
            duration: 14,
            repeat: -1,
            ease: "none",
          })
        );

        ambientTweens.push(
          gsap.to(bgOrbits, {
            rotation: 360,
            duration: 38,
            repeat: -1,
            ease: "none",
          })
        );
      }

      const media = gsap.matchMedia();

      /* Mobile + tablet normal scroll layout */
      media.add("(max-width: 1023px)", () => {
        if (reduceMotion) return;

        const mobileIntro = gsap.fromTo(
          mobileCards,
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );

        return () => mobileIntro.kill();
      });

      /* Desktop pinned horizontal story rail */
      media.add("(min-width: 1024px)", () => {
        if (reduceMotion) {
          gsap.set(progress, { scaleX: 1 });
          gsap.set(stage, { overflowX: "auto" });
          return;
        }

        gsap.set(rail, { x: 0 });
        gsap.set(progress, { scaleX: 0 });

        const getTravelDistance = () =>
          Math.max(0, rail.scrollWidth - stage.clientWidth);

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () =>
              `+=${Math.max(
                getTravelDistance() * 1.12,
                window.innerHeight * 2.75
              )}`,
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
            rail,
            {
              x: () => -getTravelDistance(),
              duration: 1,
              ease: "none",
            },
            0
          )
          .to(
            progress,
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

      /* CTA hover */
      const canHover = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
      ).matches;

      if (ctaButton && ctaArrow && ctaGlow && canHover && !reduceMotion) {
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

          gsap.to(ctaButton, {
            x: (event.clientX - rect.left - rect.width / 2) * 0.08,
            y: (event.clientY - rect.top - rect.height / 2) * 0.08,
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

          ambientTweens.forEach((tween) => tween.kill());
          media.revert();
        };
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
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
        relative min-h-[100svh] overflow-x-clip bg-[#fff9fc] text-[#102957]
        lg:h-[100svh] lg:min-h-0 lg:overflow-hidden
      "
    >
      <GrowthBackground />

      <div
        className="
          relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col px-5 py-16
          sm:px-8 sm:py-20
          md:px-10 md:py-24
          lg:h-full lg:min-h-0 lg:px-12 lg:py-[clamp(1.75rem,4vh,3.5rem)]
          xl:px-16
        "
      >
        {/* Header */}
        <header className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[720px]">
            <p className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#225a98] sm:text-xs">
              <span className="h-px w-9 bg-[#f264a8]" />
              Case Studies
            </p>

            <h1
              className="
                text-[clamp(2.9rem,10vw,5.4rem)]
                font-semibold leading-[0.86] tracking-[-0.065em] text-[#102957]
                sm:text-[clamp(3.7rem,7vw,5.8rem)]
                lg:text-[clamp(3.5rem,5vw,6rem)]
              "
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Growth <span className="text-[#f264a8]">Stories</span>
            </h1>
          </div>

          <p className="max-w-[480px] text-sm font-medium leading-6 text-[#102957]/62 sm:text-base sm:leading-7 lg:pb-1">
            Real results from our e-commerce growth strategies, built through
            sharper creative, stronger funnels and performance-led campaigns.
          </p>
        </header>

        {/* Card rail */}
        <div
          ref={stageRef}
          className="
            -mx-5 mt-9 overflow-x-auto px-5 pb-5
            snap-x snap-mandatory
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            sm:-mx-8 sm:px-8
            md:-mx-10 md:px-10
            lg:mx-0 lg:mt-8 lg:min-h-0 lg:flex-1 lg:overflow-hidden lg:px-0 lg:pb-0 lg:snap-none
          "
        >
          <div
            ref={railRef}
            className="
              flex h-auto w-max items-stretch gap-4 pr-5
              sm:gap-5 sm:pr-8
              lg:h-full lg:gap-6 lg:pr-[10vw]
            "
          >
            {stories.map((story) => (
              <div
                key={story.number}
                data-mobile-card
                className="
                  w-[84vw] shrink-0 snap-start
                  sm:w-[min(47vw,390px)]
                  md:w-[min(42vw,420px)]
                  lg:h-full lg:w-[clamp(290px,29vw,450px)] lg:snap-none
                "
              >
                <StoryCard story={story} />
              </div>
            ))}

            {/* CTA card */}
            <div
              data-mobile-card
              className="
                w-[84vw] shrink-0 snap-start
                sm:w-[min(47vw,390px)]
                md:w-[min(42vw,420px)]
                lg:h-full lg:w-[clamp(290px,29vw,450px)] lg:snap-none
              "
            >
              <article
                className="
                  relative flex h-full min-h-[415px] flex-col overflow-hidden rounded-[1.5rem]
                  bg-[#102957] p-5 text-white shadow-[0_18px_55px_rgba(16,41,87,0.20)]
                  sm:min-h-[460px] sm:p-6
                  lg:min-h-0 lg:p-7
                "
              >
                <span className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
                <span className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full border border-white/10" />

                <div className="relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                    More Growth Stories
                  </span>

                  <h3
                    className="mt-7 text-[clamp(2.1rem,5vw,3.8rem)] font-semibold leading-[0.88] tracking-[-0.065em]"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    More results.
                    <br />
                    More growth.
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-6 text-white/62">
                    Explore campaign breakdowns, conversion wins, strategic
                    experiments and real e-commerce performance stories.
                  </p>
                </div>

                <div className="relative z-10 mt-auto pt-8">
                  <Link
                    ref={ctaButtonRef}
                    href="/case-studies"
                    className="relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#f264a8] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-white hover:text-[#102957]"
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
        <div className="mt-2 flex items-center justify-between lg:hidden">
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#102957]/40">
            Swipe to explore
          </span>

          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#102957]/40">
            {stories.length + 1} stories
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