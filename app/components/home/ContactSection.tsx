import ContactReveal from "./ContactReveal";

type ContactSectionProps = {
  status?: "success" | "error";
  returnTo?: string;
};

const CALENDLY_URL = "https://calendly.com/marifulesgiu/30min";

export default function ContactSection({
  status,
  returnTo = "/",
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      data-contact-section
      data-return-to={returnTo}
      className="relative overflow-x-clip bg-[#fff9fc] text-[#102957]"
    >
      {/* Same background shading */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          data-contact-bg-float
          className="absolute -left-48 -top-52 h-[36rem] w-[36rem] rounded-full bg-[#cce5ff]/65 blur-3xl"
        />
        <div
          data-contact-bg-float
          className="absolute -bottom-52 -right-44 h-[40rem] w-[40rem] rounded-full bg-[#ffd1e5]/75 blur-3xl"
        />
        <div
          data-contact-bg-float
          className="absolute left-[42%] top-[30%] h-[22rem] w-[22rem] rounded-full bg-[#efdcff]/50 blur-3xl"
        />

        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full opacity-60"
          aria-hidden="true"
        >
          <path
            data-contact-path
            d="M-40 730 C 190 540, 330 740, 560 560 S 920 380, 1110 470 S 1320 280, 1500 120"
            fill="none"
            stroke="#225a98"
            strokeOpacity="0.14"
            strokeWidth="2"
            strokeDasharray="10 16"
          />

          <path
            data-contact-path
            d="M-30 790 C 180 620, 350 790, 570 640 S 900 500, 1110 570 S 1320 430, 1500 310"
            fill="none"
            stroke="#f264a8"
            strokeOpacity="0.15"
            strokeWidth="2"
            strokeDasharray="6 18"
          />
        </svg>

        <div
          data-contact-orbit
          className="absolute left-[7%] top-[22%] hidden h-44 w-44 rounded-full border border-dashed border-[#225a98]/20 lg:block"
        >
          <span className="absolute -left-2 top-1/2 h-3 w-3 rounded-full bg-[#f264a8]/70 shadow-[0_0_0_8px_rgba(242,100,168,0.1)]" />
          <span className="absolute right-3 top-6 h-2.5 w-2.5 rounded-full bg-[#4c9cf5]/70 shadow-[0_0_0_8px_rgba(76,156,245,0.1)]" />
        </div>
      </div>

      <div
        className="
          relative mx-auto grid max-w-[1540px] gap-10 px-4 py-16
          sm:px-7 sm:py-20
          md:px-10
          lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-12 lg:py-12
          xl:px-14
        "
      >
        {/* Left side: around 600px on desktop */}
        <div className="relative z-10 lg:flex lg:min-h-[600px] lg:flex-col lg:justify-center">
          <p
            data-contact-kicker
            className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#225a98]"
          >
            <span className="h-px w-9 bg-[#f264a8]" />
            Let&apos;s build growth
          </p>

          <h2
            data-contact-title
            className="mt-5 max-w-xl text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.84] tracking-[-0.075em] text-[#102957]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Let&apos;s turn your next move into{" "}
            <span className="text-[#f264a8]">real growth.</span>
          </h2>

          <p
            data-contact-copy
            className="mt-7 max-w-md text-sm font-medium leading-relaxed text-[#102957]/60 sm:text-base"
          >
            Book a focused growth call with our team. We will understand your
            current challenge, identify opportunity areas, and discuss the best
            next steps for your brand.
          </p>

          <div
            data-contact-details
            className="mt-10 grid max-w-md gap-6 border-t border-[#102957]/10 pt-7 sm:grid-cols-2"
          >
            <div data-contact-detail className="group">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#102957]/40">
                Email us
              </p>

              <a
                href="mailto:hello@brandify.digital"
                className="mt-2 inline-block text-sm font-semibold text-[#102957] transition-colors duration-300 group-hover:text-[#f264a8]"
              >
                hello@brandify.digital
              </a>
            </div>

            <div data-contact-detail className="group">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#102957]/40">
                Strategy call
              </p>

              <p className="mt-2 text-sm font-semibold text-[#102957]">
                30-minute growth session
              </p>
            </div>
          </div>
        </div>

        {/* Calendly panel */}
        <div
          data-contact-form-panel
          className="
            relative z-10 -mx-4 overflow-hidden rounded-none
            border-y border-[#102957]/10 bg-white/90
            shadow-[0_24px_70px_rgba(16,41,87,0.08)] backdrop-blur-md
            sm:mx-0 sm:rounded-[1.5rem] sm:border
            lg:my-8
          "
        >
          <div className="border-b border-[#102957]/10 px-5 py-6 sm:px-7 sm:py-7 lg:px-9">
            {status === "success" && (
              <div
                role="status"
                className="mb-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
              >
                Thanks. Your message has been sent successfully.
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
              >
                Something went wrong. Please try again.
              </div>
            )}

            <div data-contact-form-heading>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f264a8]">
                Book a strategy call
              </p>

              <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
                <h3
                  className="text-[clamp(2rem,3vw,3.5rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[#102957]"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Choose your time.
                </h3>

                <span className="rounded-full border border-[#f264a8]/25 bg-[#fff3f8] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#d63e83]">
                  30 minutes
                </span>
              </div>

              <p className="mt-3 max-w-md text-sm font-medium leading-6 text-[#102957]/55">
                Select a suitable time and schedule your growth call directly.
              </p>
            </div>
          </div>

          {/* Larger Calendly area */}
          <div
            data-calendar-shell
            className="
              group relative h-[720px] overflow-hidden bg-[#fff9fc]
              sm:h-[780px]
              lg:h-[860px] lg:transition-transform lg:duration-500 lg:hover:-translate-y-1
            "
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#cce5ff]/45 blur-3xl transition-transform duration-700 group-hover:scale-125" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#ffd3e7]/45 blur-3xl transition-transform duration-700 group-hover:scale-125" />

            <div
              data-calendly-embed
              className="
                relative z-10 h-full w-full
                [&_.calendly-inline-widget]:!h-full
                [&_.calendly-inline-widget]:!min-h-full
                [&_.calendly-inline-widget]:!w-full
                [&_iframe]:!h-full
                [&_iframe]:!min-h-full
                [&_iframe]:!w-full
              "
            />

            <noscript>
              <div className="flex h-full items-center justify-center p-8 text-center">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#102957] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#f264a8]"
                >
                  Schedule your 30-minute call
                </a>
              </div>
            </noscript>
          </div>
        </div>
      </div>

      <ContactReveal />
    </section>
  );
}