"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function SitePreloaderAnimator() {
  useGSAP(() => {
    const preloader = document.querySelector<HTMLElement>(
      "[data-site-preloader]"
    );

    if (!preloader) return;

    const letters = gsap.utils.toArray<HTMLElement>("[data-loader-letter]");
    const eyebrow = preloader.querySelector<HTMLElement>(
      "[data-loader-eyebrow]"
    );
    const progressWrap = preloader.querySelector<HTMLElement>(
      "[data-loader-progress-wrap]"
    );
    const progressBar = preloader.querySelector<HTMLElement>(
      "[data-loader-progress-bar]"
    );
    const progressNumber = preloader.querySelector<HTMLElement>(
      "[data-loader-progress-number]"
    );
    const content = preloader.querySelector<HTMLElement>(
      "[data-loader-content]"
    );
    const orbs = gsap.utils.toArray<HTMLElement>("[data-loader-orb]");

    if (
      !eyebrow ||
      !progressWrap ||
      !progressBar ||
      !progressNumber ||
      !content
    ) {
      return;
    }

    document.body.classList.add("site-preloader-active");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const progress = { value: 0 };

    const updateProgress = () => {
      const value = Math.round(progress.value);

      progressNumber.textContent = String(value).padStart(3, "0");

      gsap.set(progressBar, {
        scaleX: value / 100,
      });
    };

    const wait = (milliseconds: number) =>
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, milliseconds);
      });

    const waitForAssets = () =>
      new Promise<void>((resolve) => {
        const finish = async () => {
          try {
            await document.fonts.ready;
          } catch {
            // Continue even if font loading fails.
          }

          resolve();
        };

        if (document.readyState === "complete") {
          finish();
        } else {
          window.addEventListener("load", finish, { once: true });
        }
      });

    const animateProgress = (
      target: number,
      duration: number,
      ease: string
    ) =>
      new Promise<void>((resolve) => {
        gsap.to(progress, {
          value: target,
          duration,
          ease,
          onUpdate: updateProgress,
          onComplete: resolve,
        });
      });

    const hidePreloader = () => {
      document.body.classList.remove("site-preloader-active");

      gsap.set(preloader, {
        display: "none",
        pointerEvents: "none",
      });

      preloader.setAttribute("aria-hidden", "true");
    };

    gsap.set([eyebrow, progressWrap], {
      autoAlpha: 0,
      y: 20,
    });

    gsap.set(letters, {
      autoAlpha: 0,
      yPercent: 120,
    });

    gsap.set(progressBar, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    if (reducedMotion) {
      gsap.set([eyebrow, progressWrap, ...letters], {
        autoAlpha: 1,
        y: 0,
        yPercent: 0,
      });

      waitForAssets().then(hidePreloader);
      return;
    }

    const introTimeline = gsap.timeline();

    introTimeline
      .to(eyebrow, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      })
      .to(
        letters,
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1.05,
          stagger: 0.055,
          ease: "expo.out",
        },
        "-=0.2"
      )
      .to(
        progressWrap,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        "-=0.45"
      );

    const orbAnimations = orbs.map((orb, index) =>
      gsap.to(orb, {
        x: index % 2 === 0 ? 35 : -35,
        y: index % 2 === 0 ? -28 : 28,
        scale: 1.1,
        duration: 4 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    );

    const runLoader = async () => {
      await Promise.all([
        animateProgress(78, 1.3, "power2.out"),
        waitForAssets(),
        wait(1200),
      ]);

      await animateProgress(100, 0.45, "power3.inOut");
      await wait(180);

      gsap.timeline({
        onComplete: hidePreloader,
      })
        .to(progressWrap, {
          autoAlpha: 0,
          y: -12,
          duration: 0.35,
          ease: "power3.in",
        })
        .to(
          content,
          {
            y: -22,
            autoAlpha: 0,
            duration: 0.5,
            ease: "power3.in",
          },
          0.05
        )
        .to(
          preloader,
          {
            yPercent: -100,
            duration: 1.1,
            ease: "expo.inOut",
          },
          0.18
        );
    };

    runLoader();

    return () => {
      introTimeline.kill();

      orbAnimations.forEach((animation) => animation.kill());

      document.body.classList.remove("site-preloader-active");
    };
  }, []);

  return null;
}