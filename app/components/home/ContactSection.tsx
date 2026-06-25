import ContactReveal from "./ContactReveal";

type ContactSectionProps = {
  status?: "success" | "error";
  returnTo?: string;
};

export default function ContactSection({
  status,
  returnTo = "/",
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      data-contact-section
      className="relative overflow-hidden bg-[#f8f9fc] py-16 text-[#102957] sm:py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-12 h-[28rem] w-[28rem] rounded-full bg-[#cce5ff]/45 blur-3xl" />
        <div className="absolute -bottom-48 -right-32 h-[32rem] w-[32rem] rounded-full bg-[#ffd3e7]/50 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-[1540px] gap-10 px-4 sm:px-7 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 xl:px-14">
        {/* Left content */}
        <div className="lg:pt-8">
          <p
            data-contact-kicker
            className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f264a8]"
          >
            Let&apos;s build growth
          </p>

          <h2
            data-contact-title
            className="mt-5 max-w-xl text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.84] tracking-[-0.075em]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Let&apos;s turn your next move into{" "}
            <span className="text-[#f264a8]">real growth.</span>
          </h2>

          <p
            data-contact-copy
            className="mt-7 max-w-md text-sm font-medium leading-relaxed text-[#102957]/60 sm:text-base"
          >
            Tell us where your e-commerce growth is stuck. We will help you find
            the right strategy, creative direction and performance system.
          </p>

          <div
            data-contact-details
            className="mt-10 grid max-w-md gap-6 border-t border-[#102957]/10 pt-7 sm:grid-cols-2"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#102957]/40">
                Email us
              </p>

              <a
                href="mailto:team.brandifydigital@gmail.com"
                className="mt-2 inline-block text-sm font-semibold text-[#102957] transition-colors hover:text-[#f264a8]"
              >
                team.brandifydigital@gmail.com
              </a>
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#102957]/40">
                Response time
              </p>

              <p className="mt-2 text-sm font-semibold text-[#102957]">
                Within 1 business day
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div
          data-contact-form-panel
          className="rounded-[1.5rem] border border-[#102957]/10 bg-white p-5 shadow-[0_24px_70px_rgba(16,41,87,0.08)] sm:p-7 lg:p-9"
        >
          {status === "success" && (
            <div
              role="status"
              className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
            >
              Thanks. Your message has been sent successfully.
            </div>
          )}

          {status === "error" && (
            <div
              role="alert"
              className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
            >
              Something went wrong. Please review your details and try again.
            </div>
          )}

          <div data-contact-form-heading>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f264a8]">
              Start a conversation
            </p>

            <h3
              className="mt-3 text-[clamp(2rem,3vw,3.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Tell us about your brand.
            </h3>
          </div>

          <form className="mt-8 space-y-5">
            <input type="hidden" name="returnTo" value={returnTo} />

            {/* Honeypot */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="pointer-events-none absolute h-px w-px opacity-0"
              aria-hidden="true"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <label data-contact-field className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#102957]/45">
                  Your name
                </span>

                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className="h-12 w-full rounded-xl border border-[#102957]/12 bg-[#f8f9fc] px-4 text-sm font-medium text-[#102957] outline-none transition-all placeholder:text-[#102957]/35 focus:border-[#f264a8] focus:bg-white focus:ring-4 focus:ring-[#f264a8]/10"
                />
              </label>

              <label data-contact-field className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#102957]/45">
                  Work email
                </span>

                <input
                  required
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="h-12 w-full rounded-xl border border-[#102957]/12 bg-[#f8f9fc] px-4 text-sm font-medium text-[#102957] outline-none transition-all placeholder:text-[#102957]/35 focus:border-[#f264a8] focus:bg-white focus:ring-4 focus:ring-[#f264a8]/10"
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label data-contact-field className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#102957]/45">
                  Brand / Website
                </span>

                <input
                  name="brand"
                  type="text"
                  placeholder="Your brand name"
                  className="h-12 w-full rounded-xl border border-[#102957]/12 bg-[#f8f9fc] px-4 text-sm font-medium text-[#102957] outline-none transition-all placeholder:text-[#102957]/35 focus:border-[#f264a8] focus:bg-white focus:ring-4 focus:ring-[#f264a8]/10"
                />
              </label>

              <label data-contact-field className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#102957]/45">
                  Monthly ad spend
                </span>

                <select
                  name="budget"
                  defaultValue=""
                  className="h-12 w-full rounded-xl border border-[#102957]/12 bg-[#f8f9fc] px-4 text-sm font-medium text-[#102957] outline-none transition-all focus:border-[#f264a8] focus:bg-white focus:ring-4 focus:ring-[#f264a8]/10"
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000 – $5,000">$1,000 – $5,000</option>
                  <option value="$5,000 – $20,000">$5,000 – $20,000</option>
                  <option value="$20,000+">$20,000+</option>
                </select>
              </label>
            </div>

            <label data-contact-field className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#102957]/45">
                What do you need help with?
              </span>

              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell us about your business, current challenge and growth goal."
                className="w-full resize-none rounded-xl border border-[#102957]/12 bg-[#f8f9fc] px-4 py-3 text-sm font-medium leading-relaxed text-[#102957] outline-none transition-all placeholder:text-[#102957]/35 focus:border-[#f264a8] focus:bg-white focus:ring-4 focus:ring-[#f264a8]/10"
              />
            </label>

            <div data-contact-field className="pt-2">
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#102957] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f264a8] hover:shadow-[0_16px_32px_rgba(242,100,168,0.26)]"
              >
                Send Growth Inquiry

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  <path
                    d="M5 17 17 5M9 5h8v8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <p className="mt-4 text-center text-[11px] leading-relaxed text-[#102957]/45">
                By submitting, you agree to be contacted about your inquiry.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Client-only animation controller */}
      <ContactReveal />
    </section>
  );
}