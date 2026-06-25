"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Social Media Marketing",
    label: "Social Growth",
    description:
      "Build a beauty brand presence that feels premium, consistent, and impossible to scroll past.",
    card: "bg-[#fff3f8] border-[#ffd6e8]",
    icon: "bg-[#f264a8]",
    accent: "bg-[#f264a8]",
    labelColor: "text-[#d63e83]",
  },
  {
    number: "02",
    title: "Media Buying",
    label: "Paid Growth",
    description:
      "High-intent ad campaigns designed to turn attention into profitable beauty sales.",
    card: "bg-[#f0f7ff] border-[#d6e9ff]",
    icon: "bg-[#4c9cf5]",
    accent: "bg-[#4c9cf5]",
    labelColor: "text-[#256ebc]",
  },
  {
    number: "03",
    title: "Ecommerce SEO",
    label: "Organic Discovery",
    description:
      "Help your products appear where beauty customers are already searching.",
    card: "bg-[#fffafc] border-[#ecd9e5]",
    icon: "bg-[#102957]",
    accent: "bg-[#102957]",
    labelColor: "text-[#102957]",
  },
  {
    number: "04",
    title: "Conversion Rate Optimization",
    label: "Conversion System",
    description:
      "Refine every touchpoint so more visitors become confident customers.",
    card: "bg-[#fff3f8] border-[#ffd6e8]",
    icon: "bg-[#f264a8]",
    accent: "bg-[#f264a8]",
    labelColor: "text-[#d63e83]",
  },
  {
    number: "05",
    title: "Analytics & Tracking",
    label: "Growth Intelligence",
    description:
      "See what drives results, understand buyer behavior, and make smarter decisions.",
    card: "bg-[#f0f7ff] border-[#d6e9ff]",
    icon: "bg-[#4c9cf5]",
    accent: "bg-[#4c9cf5]",
    labelColor: "text-[#256ebc]",
  },
  {
    number: "06",
    title: "Store Design & Development",
    label: "Digital Experience",
    description:
      "Beautiful, high-converting storefronts built for modern beauty brands.",
    card: "bg-[#102957] border-[#102957]",
    icon: "bg-[#f264a8]",
    accent: "bg-[#f8b7d3]",
    labelColor: "text-[#ffc6df]",
    dark: true,
  },
];

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        d="M12 2.8 13.8 10l7.4 2-7.4 1.9L12 21.2l-1.8-7.3-7.4-1.9 7.4-2L12 2.8Z"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
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

export default function ExpertiseHorizontal() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;

      const cards = cardRefs.current.filter(
        (card): card is HTMLDivElement => Boolean(card)
      );

      if (!section || !viewport || !track || !cards.length) return;

      const q = gsap.utils.selector(section);

      const kicker = q("[data-expertise-kicker]");
      const title = q("[data-expertise-title]");
      const description = q("[data-expertise-description]");
      const button = q("[data-expertise-button]");
      const rail = q("[data-expertise-rail]");
      const progress = q("[data-progress]");
      const activeCount = q("[data-active-count]");

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set([kicker, title, description, button, rail, ...cards], {
          autoAlpha: 1,
          clearProps: "transform",
        });

        gsap.set(progress, { scaleX: 1 });

        return;
      }

      gsap.set([kicker, title, description, button, rail], {
        autoAlpha: 0,
        y: 28,
      });

      gsap.set(cards, {
        autoAlpha: 0,
        y: 42,
        scale: 0.96,
      });

      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      intro
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
            duration: 0.75,
            ease: "expo.out",
          },
          "-=0.15"
        )
        .to(
          description,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.42"
        )
        .to(
          button,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
          },
          "-=0.28"
        )
        .to(
          rail,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.45"
        )
        .to(
          cards,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: "back.out(1.35)",
          },
          "-=0.3"
        );

      const hoverCleanups = cards.map((card) => {
        const surface = card.querySelector<HTMLElement>(
          "[data-card-surface]"
        );
        const icon = card.querySelector<HTMLElement>("[data-card-icon]");
        const arrow = card.querySelector<HTMLElement>("[data-card-arrow]");
        const glow = card.querySelector<HTMLElement>("[data-card-glow]");

        if (!surface || !icon || !arrow || !glow) return () => {};

        const canHover = window.matchMedia(
          "(hover: hover) and (pointer: fine)"
        ).matches;

        if (!canHover) return () => {};

        gsap.set(surface, {
          transformPerspective: 1000,
          transformOrigin: "center center",
        });

        const rotateX = gsap.quickTo(surface, "rotationX", {
          duration: 0.4,
          ease: "power3.out",
        });

        const rotateY = gsap.quickTo(surface, "rotationY", {
          duration: 0.4,
          ease: "power3.out",
        });

        const onEnter = () => {
          gsap.to(surface, {
            y: -9,
            scale: 1.015,
            duration: 0.4,
            ease: "power3.out",
            boxShadow: "0 28px 70px rgba(16,41,87,0.16)",
          });

          gsap.to(icon, {
            scale: 1.1,
            rotate: 10,
            duration: 0.38,
            ease: "back.out(2)",
          });

          gsap.to(arrow, {
            x: 5,
            y: -5,
            rotate: 10,
            duration: 0.35,
            ease: "power3.out",
          });

          gsap.to(glow, {
            autoAlpha: 1,
            scale: 1.15,
            duration: 0.38,
            ease: "power3.out",
          });
        };

        const onMove = (event: MouseEvent) => {
          const rect = surface.getBoundingClientRect();

          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;

          rotateY(x * 6);
          rotateX(y * -5);
        };

        const onLeave = () => {
          gsap.to(surface, {
            y: 0,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            duration: 0.65,
            ease: "elastic.out(1, 0.58)",
            boxShadow: "0 14px 35px rgba(16,41,87,0.08)",
          });

          gsap.to(icon, {
            scale: 1,
            rotate: 0,
            duration: 0.3,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 0,
            y: 0,
            rotate: 0,
            duration: 0.3,
            ease: "power3.out",
          });

          gsap.to(glow, {
            autoAlpha: 0,
            scale: 0.75,
            duration: 0.3,
            ease: "power3.out",
          });
        };

        surface.addEventListener("mouseenter", onEnter);
        surface.addEventListener("mousemove", onMove);
        surface.addEventListener("mouseleave", onLeave);

        return () => {
          surface.removeEventListener("mouseenter", onEnter);
          surface.removeEventListener("mousemove", onMove);
          surface.removeEventListener("mouseleave", onLeave);
        };
      });

      const media = gsap.matchMedia();

      media.add("(min-width: 1024px)", () => {
        const getTravelDistance = () =>
          Math.max(0, track.scrollWidth - viewport.clientWidth);

        const horizontalTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () =>
              `+=${Math.max(
                getTravelDistance() + window.innerHeight * 1.35,
                window.innerHeight * 2.65
              )}`,
            pin: true,
            pinSpacing: true,
            scrub: 1.15,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        horizontalTimeline
          .to(
            track,
            {
              x: () => -getTravelDistance(),
              duration: 0.78,
              ease: "none",
            },
            0
          )
          .to(
            progress,
            {
              scaleX: 1,
              duration: 0.78,
              ease: "none",
            },
            0
          )
          .to(
            rail,
            {
              y: -8,
              duration: 0.78,
              ease: "none",
            },
            0
          );

        horizontalTimeline.eventCallback("onUpdate", () => {
          if (!activeCount.length) return;

          const serviceProgress = Math.min(
            horizontalTimeline.progress() / 0.78,
            0.999
          );

          const activeIndex = Math.min(
            services.length,
            Math.max(1, Math.floor(serviceProgress * services.length) + 1)
          );

          activeCount[0].textContent = String(activeIndex).padStart(2, "0");
        });

        return () => {
          horizontalTimeline.kill();
        };
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        intro.kill();
        hoverCleanups.forEach((cleanup) => cleanup());
        media.revert();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="
        relative min-h-[100svh] overflow-x-clip
        bg-[#fff9fc] text-[#102957]
        lg:h-[100svh] lg:min-h-0 lg:overflow-hidden
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-48 top-[-12rem] h-[33rem] w-[33rem] rounded-full bg-[#cce5ff]/60 blur-3xl" />
        <div className="absolute -bottom-56 -right-40 h-[38rem] w-[38rem] rounded-full bg-[#ffd4e7]/70 blur-3xl" />
        <div className="absolute left-[42%] top-[34%] h-[20rem] w-[20rem] rounded-full bg-[#f0ddff]/50 blur-3xl" />
      </div>

      <div
        className="
          relative mx-auto grid max-w-[1600px] gap-12 px-6 py-20
          sm:gap-14 sm:px-8 sm:py-24
          md:px-10 md:py-24
          lg:h-full lg:grid-cols-[0.72fr_1.5fr] lg:items-center
          lg:gap-10 lg:px-12 lg:py-0
          xl:px-20
        "
      >
        {/* Left content */}
        <div className="relative z-10 max-w-[580px] lg:max-w-[470px]">
          <div
            data-expertise-kicker
            className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#225a98] sm:mb-5 sm:text-xs"
          >
            <span className="h-px w-9 bg-[#f264a8]" />
            Beauty Growth Expertise
          </div>

          <h2
            data-expertise-title
            className="
              text-[clamp(2.8rem,11vw,4.25rem)]
              font-semibold leading-[0.86] tracking-[-0.065em] text-[#102957]
              sm:text-[clamp(3.5rem,8vw,4.85rem)]
              lg:text-[clamp(3rem,4.2vw,5.25rem)]
            "
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Everything your beauty brand needs to grow beautifully.
          </h2>

          <p
            data-expertise-description
            className="mt-5 max-w-md text-[14px] font-medium leading-6 text-[#102957]/68 sm:mt-6 sm:text-base sm:leading-8"
          >
            From attention to conversion, every service is designed to connect
            the complete growth journey.
          </p>

          <a
            data-expertise-button
            href="#contact"
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#102957] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f264a8] sm:mt-7"
          >
            Build Your Growth System

            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#f264a8] transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#f264a8]">
              <ArrowIcon />
            </span>
          </a>

          <div className="mt-12 hidden items-end justify-between lg:flex">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#102957]/42">
                Service journey
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span
                  data-active-count
                  className="text-5xl font-semibold tracking-[-0.08em]"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  01
                </span>

                <span className="mb-1 text-xs font-bold text-[#102957]/35">
                  / 06
                </span>
              </div>
            </div>

            <p className="max-w-[140px] text-right text-xs font-semibold leading-5 text-[#102957]/45">
              Scroll down to explore. Scroll up to reverse.
            </p>
          </div>
        </div>

        {/* Service rail */}
        <div data-expertise-rail className="relative min-w-0">
          <div
            ref={viewportRef}
            className="
              relative -mr-6 overflow-x-auto pb-4 pr-6
              sm:-mr-8 sm:pr-8
              md:-mr-10 md:pr-10
              lg:mr-0 lg:h-[60svh] lg:overflow-hidden lg:p-0
            "
          >
            <div
              ref={trackRef}
              className="
                flex w-max items-stretch gap-4 pr-6
                sm:gap-5 sm:pr-8
                lg:h-full lg:items-center lg:gap-7 lg:pr-[18vw]
              "
            >
              {services.map((service, index) => (
                <div
                  key={service.title}
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
                  className="
                    h-[380px] shrink-0 basis-[82vw] snap-start
                    sm:h-[395px] sm:basis-[min(70vw,360px)]
                    md:h-[410px] md:basis-[min(47vw,390px)]
                    lg:h-full lg:basis-[min(27vw,370px)] lg:snap-none
                  "
                >
                  <article
                    data-card-surface
                    className={`relative flex h-full flex-col overflow-hidden rounded-[1.7rem] border p-6 shadow-[0_14px_35px_rgba(16,41,87,0.08)] sm:rounded-[2rem] sm:p-7 lg:p-8 ${service.card}`}
                  >
                    <div
                      data-card-glow
                      className={`absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl ${
                        service.dark ? "bg-[#f264a8]" : "bg-[#f5c3dd]"
                      }`}
                    />

                    <div className="relative z-10 flex items-start justify-between">
                      <span
                        data-card-icon
                        className={`grid h-11 w-11 place-items-center rounded-2xl text-white sm:h-12 sm:w-12 ${service.icon}`}
                      >
                        <SparkIcon />
                      </span>

                      <span
                        className={`text-xs font-bold tracking-[0.14em] ${
                          service.dark ? "text-white/45" : "text-[#102957]/35"
                        }`}
                      >
                        {service.number}
                      </span>
                    </div>

                    <div className="relative z-10 mt-auto">
                      <p
                        className={`text-[9px] font-bold uppercase tracking-[0.16em] sm:text-[10px] ${service.labelColor}`}
                      >
                        {service.label}
                      </p>

                      <h3
                        className={`mt-4 text-[1.85rem] font-semibold leading-[0.9] tracking-[-0.06em] sm:text-[2.2rem] lg:text-[2.45rem] ${
                          service.dark ? "text-white" : "text-[#102957]"
                        }`}
                        style={{ fontFamily: "var(--font-cormorant), serif" }}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={`mt-4 text-[14px] font-medium leading-6 sm:mt-5 sm:text-[15px] sm:leading-7 ${
                          service.dark
                            ? "text-white/70"
                            : "text-[#102957]/62"
                        }`}
                      >
                        {service.description}
                      </p>

                      <div className="mt-6 flex items-center justify-between sm:mt-8">
                        <span
                          className={`h-px w-16 sm:w-20 ${
                            service.dark ? "bg-[#f8b7d3]" : service.accent
                          }`}
                        />

                        <span
                          data-card-arrow
                          className={`grid h-10 w-10 place-items-center rounded-full border ${
                            service.dark
                              ? "border-white/20 text-white"
                              : "border-[#102957]/15 text-[#102957]"
                          }`}
                        >
                          <ArrowIcon />
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop-only progress */}
          <div className="absolute bottom-0 left-0 hidden w-full lg:block">
            <div className="h-px bg-[#102957]/10" />

            <div
              data-progress
              className="mt-[-1px] h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#4c9cf5] via-[#f264a8] to-[#102957]"
            />
          </div>

          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#102957]/40 lg:hidden">
            Swipe to explore services →
          </p>
        </div>
      </div>
    </section>
  );
}