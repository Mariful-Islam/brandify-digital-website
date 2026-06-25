import SitePreloaderAnimator from "./SitePreloaderAnimator";

type SitePreloaderProps = {
  brandName?: string;
};

export default function SitePreloader({
  brandName = "Lumière",
}: SitePreloaderProps) {
  return (
    <>
      <div
        id="site-preloader"
        data-site-preloader
        className="fixed inset-0 z-[9999] overflow-hidden bg-[#fff9fc]"
        role="status"
        aria-label="Website loading"
        aria-live="polite"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            data-loader-orb
            className="absolute -left-40 -top-36 h-[30rem] w-[30rem] rounded-full bg-[#cce5ff]/70 blur-3xl"
          />

          <div
            data-loader-orb
            className="absolute -bottom-40 -right-36 h-[34rem] w-[34rem] rounded-full bg-[#ffd3e7]/75 blur-3xl"
          />

          <div
            data-loader-orb
            className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0dcff]/55 blur-3xl"
          />
        </div>

        <div
          data-loader-content
          className="relative flex min-h-full flex-col justify-between px-6 py-7 sm:px-10 sm:py-10 lg:px-16 lg:py-14"
        >
          <div
            data-loader-eyebrow
            className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#225a98] sm:text-xs"
          >
            <span className="h-px w-9 bg-[#f264a8]" />
            Beauty, beautifully built
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div className="overflow-hidden text-center">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f264a8] sm:text-xs">
                Welcome to
              </p>

              <h1
                className="flex justify-center overflow-hidden text-[clamp(4rem,13vw,12rem)] font-semibold leading-[0.74] tracking-[-0.08em] text-[#102957]"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                {Array.from(brandName).map((letter, index) => (
                  <span
                    data-loader-letter
                    key={`${letter}-${index}`}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </h1>

              <span className="mx-auto mt-8 block h-px w-16 bg-[#f264a8]" />
            </div>
          </div>

          <div
            data-loader-progress-wrap
            className="mx-auto flex w-full max-w-xl items-end gap-5"
          >
            <div className="mb-[7px] h-px flex-1 overflow-hidden bg-[#102957]/15">
              <span
                data-loader-progress-bar
                className="block h-full w-full bg-gradient-to-r from-[#4c9cf5] via-[#f264a8] to-[#102957]"
              />
            </div>

            <span
              data-loader-progress-number
              className="text-lg font-semibold tracking-[-0.05em] text-[#102957]"
            >
              000
            </span>
          </div>
        </div>
      </div>

      {/* Client-side animation controller only */}
      <SitePreloaderAnimator />

      {/* Prevent permanent loader when JavaScript is disabled */}
      <noscript>
        <style>{`
          #site-preloader {
            display: none !important;
          }
        `}</style>
      </noscript>
    </>
  );
}