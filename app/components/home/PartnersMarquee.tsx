"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaMeta, FaShopify } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

gsap.registerPlugin(useGSAP);

const partners = [
  {
    name: "Shopify",
    Icon: FaShopify,
    iconClass: "text-[#95bf47]",
  },
  {
    name: "Google",
    Icon: FcGoogle,
    iconClass: "",
  },
  {
    name: "Meta",
    Icon: FaMeta,
    iconClass: "text-[#1877f2]",
  },
];

export default function PartnersMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const marqueeTweenRef = useRef<gsap.core.Tween | null>(null);

  const [activeItem, setActiveItem] = useState<string | null>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const firstGroup = track.querySelector<HTMLElement>(
        "[data-marquee-group='first']"
      );

      if (!firstGroup) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const createMarquee = () => {
        marqueeTweenRef.current?.kill();

        gsap.set(track, { x: 0 });

        if (reduceMotion) return;

        const distance = firstGroup.getBoundingClientRect().width;

        marqueeTweenRef.current = gsap.to(track, {
          x: -distance,
          duration: Math.max(distance / 52, 20),
          repeat: -1,
          ease: "none",
        });
      };

      createMarquee();

      const observer = new ResizeObserver(createMarquee);
      observer.observe(firstGroup);

      return () => {
        observer.disconnect();
        marqueeTweenRef.current?.kill();
      };
    },
    { scope: sectionRef }
  );

  const handleEnter = (id: string) => {
    setActiveItem(id);
    marqueeTweenRef.current?.pause();
  };

  const handleLeave = () => {
    setActiveItem(null);
    marqueeTweenRef.current?.play();
  };

  const PartnerItems = ({ clone = false }: { clone?: boolean }) => (
    <>
      {partners.map(({ name, Icon, iconClass }) => {
        const itemId = `${clone ? "clone" : "original"}-${name}`;

        const isAnyItemHovered = activeItem !== null;
        const isHovered = activeItem === itemId;

        return (
          <div
            key={itemId}
            onMouseEnter={() => handleEnter(itemId)}
            onMouseLeave={handleLeave}
            className={`
              flex shrink-0 items-center gap-3
              sm:gap-4

              ${
                isAnyItemHovered && !isHovered
                  ? "grayscale opacity-45"
                  : "grayscale-0 opacity-100"
              }

              transition-[filter,opacity] duration-200
            `}
          >
            <Icon
              className={`
                shrink-0 text-[31px]
                sm:text-[39px]
                md:text-[44px]
                lg:text-[50px]
                ${iconClass}
              `}
            />

            <span
              className="
                whitespace-nowrap
                text-[21px] font-semibold tracking-[-0.045em]
                text-[#102957]
                sm:text-[26px]
                md:text-[30px]
                lg:text-[34px]
              "
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              {name}
            </span>
          </div>
        );
      })}
    </>
  );

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white py-12 text-[#102957] sm:py-14 md:py-16 lg:py-20"
    >
      <div className="mx-auto mb-8 max-w-6xl px-5 text-center sm:mb-10 sm:px-6 lg:px-12">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#f264a8] sm:text-[10px] md:text-xs">
          Trusted Growth Partners
        </p>

        <h2
          className="mt-3 text-[clamp(2.2rem,6vw,4.25rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[#102957]"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Partners in success.
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-20 lg:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-20 lg:w-32" />

        <div ref={trackRef} className="flex w-max will-change-transform">
          <div
            data-marquee-group="first"
            className="
              flex shrink-0 items-center
              gap-12 pr-12
              sm:gap-16 sm:pr-16
              md:gap-20 md:pr-20
              lg:gap-28 lg:pr-28
            "
          >
            <PartnerItems />
          </div>

          <div
            aria-hidden="true"
            className="
              flex shrink-0 items-center
              gap-12 pr-12
              sm:gap-16 sm:pr-16
              md:gap-20 md:pr-20
              lg:gap-28 lg:pr-28
            "
          >
            <PartnerItems clone />
          </div>
        </div>
      </div>
    </section>
  );
}