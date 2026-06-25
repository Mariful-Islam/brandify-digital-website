"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero1 from '@/app/assets/images/hero/Home-Hero-img (1).webp'
import hero2 from '@/app/assets/images/hero/Home-Hero-img.webp'
import hero3 from '@/app/assets/images/hero/hero-img-2.webp'
import hero4 from '@/app/assets/images/hero/hero-img-3.webp'



gsap.registerPlugin(useGSAP, ScrollTrigger);



const rotatingServices = [
  "Paid Media",
  "Conversion",
  "Social Growth",
  "Analytics",
  "Store Design",
];

const stats = [
  { value: 130, prefix: "", suffix: "+", label: "Clients Served" },
  { value: 25, prefix: "$", suffix: "M", label: "Revenue Generated" },
  { value: 500, prefix: "", suffix: "K", label: "Organic Traffic" },
];

const photos = [
  {
    src: hero1,
    title: "Growth Planning",
    tag: "Strategy",
    accent: "bg-[#4c9cf5]",
    size: "h-[176px] w-[138px]",
    x: -205,
    y: -162,
    rotate: -13,
  },
  {
    src: hero2,
    title: "Client Meeting",
    tag: "Partnership",
    accent: "bg-[#f264a8]",
    size: "h-[198px] w-[154px]",
    x: -48,
    y: -186,
    rotate: -5,
  },
  {
    src: hero3,
    title: "Paid Campaigns",
    tag: "Media",
    accent: "bg-[#102957]",
    size: "h-[168px] w-[132px]",
    x: 150,
    y: -154,
    rotate: 11,
  },
  {
    src: hero4,
    title: "Content Direction",
    tag: "Creative",
    accent: "bg-[#f58abb]",
    size: "h-[188px] w-[148px]",
    x: 222,
    y: -12,
    rotate: 15,
  },
  {
    src: hero1,
    title: "Performance Data",
    tag: "Analytics",
    accent: "bg-[#4c9cf5]",
    size: "h-[178px] w-[140px]",
    x: 145,
    y: 158,
    rotate: 8,
  },
  {
    src: hero2,
    title: "Beauty Content",
    tag: "Production",
    accent: "bg-[#f264a8]",
    size: "h-[195px] w-[152px]",
    x: -34,
    y: 178,
    rotate: -5,
  },
  {
    src: hero3,
    title: "Brand Launch",
    tag: "Launch",
    accent: "bg-[#102957]",
    size: "h-[170px] w-[134px]",
    x: -196,
    y: 122,
    rotate: -12,
  },
  {
    src: hero4,
    title: "Growth Review",
    tag: "Results",
    accent: "bg-[#f58abb]",
    size: "h-[183px] w-[144px]",
    x: -231,
    y: -3,
    rotate: -16,
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4"
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

export default function BeautyGrowthHero() {
  const heroRef = useRef<HTMLElement>(null);
  const rotatingWordRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const hero = heroRef.current;
      const rotatingWord = rotatingWordRef.current;

      if (!hero || !rotatingWord) return;

      const q = gsap.utils.selector(hero);

      const eyebrow = q("[data-eyebrow]");
      const titleLines = q("[data-title-line]");
      const description = q("[data-description]");
      const actions = q("[data-actions]");
      const statItems = q("[data-stat]");
      const counters = q("[data-counter]") as HTMLElement[];

      const visual = q("[data-visual]");
      const photoCards = q("[data-photo-card]") as HTMLElement[];
      const photoInnerCards = q("[data-photo-inner]") as HTMLElement[];

      const core = q("[data-core]");
      const coreFloat = q("[data-core-float]");
      const orbit = q("[data-orbit]");
      const scrollHint = q("[data-scroll-hint]");

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const setFinalCounters = () => {
        counters.forEach((counter, index) => {
          const stat = stats[index];

          counter.textContent = `${stat.prefix}${stat.value}${stat.suffix}`;
        });
      };

      if (prefersReducedMotion) {
        gsap.set(
          [
            eyebrow,
            titleLines,
            description,
            actions,
            statItems,
            visual,
            photoCards,
            scrollHint,
          ],
          {
            autoAlpha: 1,
            clearProps: "transform",
          }
        );

        setFinalCounters();
        return;
      }

      /* Initial hero state */
      gsap.set(titleLines, {
        autoAlpha: 0,
        yPercent: 115,
      });

      gsap.set(
        [eyebrow, description, actions, statItems, scrollHint],
        {
          autoAlpha: 0,
          y: 24,
        }
      );

      gsap.set(visual, {
        autoAlpha: 0,
        x: 50,
        scale: 0.94,
      });

      /*
        Cards begin in a small layered stack at the center.
        The tiny x/y offsets make it look like real visual cards,
        not one completely hidden image.
      */
      gsap.set(photoCards, {
        xPercent: -50,
        yPercent: -50,
        autoAlpha: 0,
        scale: 0.58,
        rotation: 0,
        transformOrigin: "center center",
      });

      gsap.set(photoInnerCards, {
        y: 0,
      });

      rotatingWord.textContent = rotatingServices[0];

      const counterTweens: gsap.core.Tween[] = [];

      const animateCounters = () => {
        counters.forEach((counter, index) => {
          const stat = stats[index];
          const count = { value: 0 };

          counter.textContent = `${stat.prefix}0${stat.suffix}`;

          const tween = gsap.to(count, {
            value: stat.value,
            duration: 1.45,
            delay: index * 0.12,
            ease: "power3.out",
            onUpdate: () => {
              counter.textContent = `${stat.prefix}${Math.round(
                count.value
              )}${stat.suffix}`;
            },
          });

          counterTweens.push(tween);
        });
      };

      let serviceIndex = 0;

      const serviceLoop = gsap.timeline({
        paused: true,
        repeat: -1,
        repeatDelay: 0.45,
      });

      serviceLoop
        .to(rotatingWord, {
          autoAlpha: 0,
          yPercent: -115,
          duration: 0.2,
          ease: "power3.in",
        })
        .call(() => {
          serviceIndex = (serviceIndex + 1) % rotatingServices.length;
          rotatingWord.textContent = rotatingServices[serviceIndex];
        })
        .set(rotatingWord, {
          yPercent: 115,
        })
        .to(rotatingWord, {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.32,
          ease: "expo.out",
        });

      /* First-load animation */
      const intro = gsap.timeline({
        paused: true,
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .to(eyebrow, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
        })
        .to(
          titleLines,
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: "expo.out",
          },
          "-=0.14"
        )
        .to(
          description,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
          },
          "-=0.42"
        )
        .to(
          actions,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
        .to(
          statItems,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.08,
          },
          "-=0.22"
        )
        .call(animateCounters, [], "-=0.05")
        .to(
          visual,
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 0.9,
            ease: "expo.out",
          },
          "-=0.82"
        )
        .to(
          photoCards,
          {
            autoAlpha: 1,
            scale: 0.98,
            duration: 0.65,
            stagger: {
              each: 0.07,
              from: "end",
            },
            ease: "back.out(1.45)",
          },
          "-=0.52"
        )
        .to(
          scrollHint,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
          },
          "-=0.1"
        )
        .call(() => {
          serviceLoop.play(0);
        }, [], "+=0.45");

      /* Floating movement inside cards — no conflict with scroll spread */
      const floatingTweens = photoInnerCards.map((card, index) =>
        gsap.to(card, {
          y: index % 2 === 0 ? -7 : 7,
          duration: 2.5 + index * 0.12,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      );

      const orbitTween = gsap.to(orbit, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      const coreFloatTween = gsap.to(coreFloat, {
        y: -9,
        scale: 1.025,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /*
        Sticky hero:
        cards spread only while pinned.
        Once the spread finishes, GSAP releases the hero
        and the next page section scrolls normally.
      */
      const media = gsap.matchMedia();

      media.add("(min-width: 1024px)", () => {
        const spreadTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: () => `+=${Math.max(window.innerHeight * 2.6, 1950)}`,
            pin: true,
            pinSpacing: true,
            scrub: 1.1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        photos.forEach((photo, index) => {
          spreadTimeline.to(
            photoCards[index],
            {
              x: photo.x,
              y: photo.y,
              rotation: photo.rotate,
              scale: 0.96,
              duration: 1,
              ease: "none",
            },
            index * 0.04
          );
        });

        spreadTimeline.to(
          core,
          {
            scale: 0.87,
            autoAlpha: 0.84,
            duration: 1,
            ease: "none",
          },
          0
        );

        spreadTimeline.to(
          scrollHint,
          {
            autoAlpha: 0,
            duration: 0.25,
            ease: "none",
          },
          0.55
        );

        return () => {
          spreadTimeline.kill();
        };
      });

      let started = false;
      let fallbackTimer: gsap.core.Tween | undefined;

      const startHero = () => {
        if (started) return;

        started = true;

        fallbackTimer?.kill();
        intro.play(0);
      };

      /*
        If your preloader dispatches "site-preloader-complete",
        hero starts exactly after loading.
        The fallback prevents an invisible hero if there is no event.
      */
      window.addEventListener("site-preloader-complete", startHero, {
        once: true,
      });

      if (document.body.classList.contains("site-preloader-active")) {
        fallbackTimer = gsap.delayedCall(4, startHero);
      } else {
        fallbackTimer = gsap.delayedCall(0.15, startHero);
      }

      const refresh = () => ScrollTrigger.refresh();

      window.addEventListener("load", refresh);
      requestAnimationFrame(refresh);

      return () => {
        window.removeEventListener("site-preloader-complete", startHero);
        window.removeEventListener("load", refresh);

        intro.kill();
        serviceLoop.kill();
        orbitTween.kill();
        coreFloatTween.kill();
        fallbackTimer?.kill();

        counterTweens.forEach((tween) => tween.kill());
        floatingTweens.forEach((tween) => tween.kill());

        media.revert();
      };
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative h-[100svh] overflow-hidden bg-[#fff9fc] text-[#102957]"
    >
      {/* Beauty background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-48 -top-52 h-[36rem] w-[36rem] rounded-full bg-[#cce5ff]/65 blur-3xl" />
        <div className="absolute -bottom-52 -right-44 h-[40rem] w-[40rem] rounded-full bg-[#ffd1e5]/75 blur-3xl" />
        <div className="absolute left-[42%] top-[30%] h-[22rem] w-[22rem] rounded-full bg-[#efdcff]/50 blur-3xl" />
      </div>

      <div className="relative mx-auto grid h-full max-w-[1500px] items-center gap-8 px-6 lg:grid-cols-[1.02fr_.98fr] lg:gap-10 lg:px-12 xl:px-20">
        {/* Copy */}
        <div className="relative z-10 max-w-[720px]">
          <div
            data-eyebrow
            className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#225a98] sm:text-xs"
          >
            <span className="h-px w-9 bg-[#f264a8]" />
            Beauty eCommerce Growth Studio
          </div>

          <h1
            className="text-[clamp(3rem,5vw,6rem)] font-semibold leading-[0.87] tracking-[-0.06em]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            <span className="block overflow-hidden">
              <span data-title-line className="block">
                Beauty brands
              </span>
            </span>

            <span className="block overflow-hidden">
              <span data-title-line className="block">
                grow through
              </span>
            </span>

            <span className="block h-[0.92em] overflow-hidden">
              <span
                ref={rotatingWordRef}
                data-title-line
                className="block text-[#f264a8]"
              >
                Paid Media
              </span>
            </span>
          </h1>

          <p
            data-description
            className="mt-6 max-w-[590px] text-[15px] font-medium leading-7 text-[#102957]/72 sm:text-base sm:leading-8"
          >
            We create high-performing campaigns, conversion systems, tracking,
            and storefronts that turn beauty attention into measurable revenue.
          </p>

          <div data-actions className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#102957] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f264a8]"
            >
              Start Your Growth Audit

              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#f264a8] transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#f264a8]">
                <ArrowIcon />
              </span>
            </a>

            <a
              href="#expertise"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#225a98] transition-colors hover:text-[#f264a8]"
            >
              Explore capabilities <span>↓</span>
            </a>
          </div>

          {/* Animated counters */}
          <div className="mt-8 grid max-w-[590px] grid-cols-3 border-t border-[#102957]/12 pt-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-stat
                className="border-l border-[#102957]/12 pl-3 first:border-l-0 first:pl-0 sm:pl-4"
              >
                <p
                  data-counter
                  className="text-xl font-bold tracking-[-0.055em] text-[#102957] sm:text-3xl"
                >
                  0
                </p>

                <p className="mt-1 text-[8px] font-bold uppercase leading-3 tracking-[0.12em] text-[#102957]/52 sm:text-[10px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual canvas */}
        <div
          data-visual
          className="relative mx-auto hidden h-[min(65svh,570px)] w-full max-w-[650px] lg:block"
        >
          <div className="absolute inset-[2%] rounded-[3rem] border border-white/80 bg-white/35 shadow-[0_28px_100px_rgba(16,41,87,0.12)] backdrop-blur-xl" />

          <div
            data-orbit
            className="absolute inset-[7%] rounded-full border border-dashed border-[#225a98]/30"
          >
            <span className="absolute -left-2 top-1/2 h-4 w-4 rounded-full bg-[#f264a8] shadow-[0_0_0_8px_rgba(242,100,168,0.15)]" />
            <span className="absolute right-[10%] top-[9%] h-3.5 w-3.5 rounded-full bg-[#4c9cf5] shadow-[0_0_0_8px_rgba(76,156,245,0.14)]" />
            <span className="absolute bottom-[9%] right-[20%] h-5 w-5 rounded-full bg-[#ffd2e4] shadow-[0_0_0_8px_rgba(255,210,228,0.4)]" />
          </div>

          {/* Center growth core */}
          <div
            data-core
            className="absolute left-1/2 top-1/2 z-[5] -translate-x-1/2 -translate-y-1/2"
          >
            <div
              data-core-float
              className="grid h-[172px] w-[172px] place-items-center rounded-full bg-gradient-to-br from-[#102957] via-[#225a98] to-[#f264a8] p-[1px] shadow-[0_25px_75px_rgba(16,41,87,0.24)]"
            >
              <div className="grid h-full w-full place-items-center rounded-full bg-[#fffafd] text-center">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#f264a8]">
                    Growth System
                  </p>

                  <p
                    className="mt-2 text-4xl font-semibold leading-[0.82] tracking-[-0.07em]"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Beauty
                    <br />
                    Growth
                  </p>

                  <span className="mx-auto mt-4 block h-px w-10 bg-[#f264a8]" />
                </div>
              </div>
            </div>
          </div>

          {/* Eight stacked image cards */}
          {photos.map((photo, index) => (
            <article
              key={photo.title}
              data-photo-card
              className={`absolute left-1/2 top-1/2 z-20 overflow-hidden rounded-[1.35rem] border border-white/90 bg-[#dcecff] shadow-[0_18px_55px_rgba(16,41,87,0.2)] ${photo.size}`}
              style={{ zIndex: 20 + index }}
            >
              <div data-photo-inner className="relative h-full w-full">
                <img
                  src={photo.src.src}
                  alt={photo.title}
                  loading="eager"
                  className="h-full w-full object-cover"
                  onLoad={() => ScrollTrigger.refresh()}
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102957]/90 via-[#102957]/35 to-transparent px-3 pb-3 pt-11 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] font-bold uppercase tracking-[0.14em] text-white/70">
                      {photo.tag}
                    </span>

                    <span className={`h-2 w-2 rounded-full ${photo.accent}`} />
                  </div>

                  <p className="mt-1 text-[11px] font-semibold leading-3">
                    {photo.title}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        data-scroll-hint
        className="absolute bottom-5 left-1/2 z-40 -translate-x-1/2 text-center"
      >
        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#102957]/45">
          Scroll to unfold the system
        </p>

        <span className="mx-auto mt-2 block h-7 w-px bg-gradient-to-b from-[#f264a8] to-transparent" />
      </div>
    </section>
  );
}