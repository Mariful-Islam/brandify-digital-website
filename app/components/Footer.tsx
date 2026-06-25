import Link from "next/link";
import type { ReactNode } from "react";

const services = [
  { label: "Media Buying", href: "/services" },
  { label: "Organic Growth", href: "/services" },
  { label: "Conversion Optimization", href: "/services" },
  { label: "Tracking & Analytics", href: "/services" },
  { label: "Design & Development", href: "/services" },
];

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Growth Stories", href: "/blog" },
  { label: "Contact", href: "/contact-us#contact" },
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

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M13.7 21v-8h2.7l.4-3.1h-3.1V7.92c0-.9.25-1.51 1.55-1.51H16.9V3.63c-.29-.04-1.27-.13-2.42-.13-2.4 0-4.05 1.47-4.05 4.17v2.23H7.72V13h2.71v8h3.27Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M6.25 8.08A2.08 2.08 0 1 0 6.25 3.92a2.08 2.08 0 0 0 0 4.16ZM4.45 20h3.6V9.45h-3.6V20Zm5.86 0h3.59v-5.87c0-1.55.29-3.06 2.21-3.06 1.89 0 1.91 1.77 1.91 3.16V20h3.6v-6.49c0-3.19-.69-5.64-4.42-5.64-1.79 0-2.99.98-3.48 1.91h-.05V9.45h-3.44V20Z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M20.52 3.48A11.88 11.88 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.31-1.66a11.88 11.88 0 0 0 5.75 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.48ZM12.07 21.8a9.86 9.86 0 0 1-5.03-1.37l-.36-.21-3.75.98 1-3.65-.24-.37a9.88 9.88 0 1 1 8.38 4.62Zm5.41-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.65.08-.3-.15-1.26-.47-2.4-1.5a9 9 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        group relative inline-flex w-fit py-1
        text-[15px] font-medium leading-6 text-white/80
        transition-colors duration-300 hover:text-white
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-[#f264a8] focus-visible:ring-offset-2
        focus-visible:ring-offset-[#102957]
      "
    >
      <span>{children}</span>

      {/* Hover: left → right | Hover out: right → left */}
      <span
        aria-hidden="true"
        className="
          absolute -bottom-0.5 left-0 h-px w-full bg-[#f264a8]
          origin-left scale-x-0
          transition-transform duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-x-100
        "
      />
    </Link>
  );
}

function FooterTextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="
        group relative inline-flex w-fit py-0.5
        text-[15px] font-medium text-white/85
        transition-colors duration-300 hover:text-white
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-[#f264a8] focus-visible:ring-offset-2
        focus-visible:ring-offset-[#102957]
      "
    >
      <span>{children}</span>

      {/* Hover: left → right | Hover out: right → left */}
      <span
        aria-hidden="true"
        className="
          absolute -bottom-0.5 left-0 h-px w-full bg-[#f264a8]
          origin-left scale-x-0
          transition-transform duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-x-100
        "
      />
    </a>
  );
}

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#102957] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-[#225a98]/35 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-[34rem] w-[34rem] rounded-full bg-[#f264a8]/15 blur-3xl" />
        <div className="absolute left-[43%] top-[42%] h-[20rem] w-[20rem] rounded-full bg-[#a855f7]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1540px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-14">
        {/* CTA */}
        <div className="flex flex-col gap-7 border-b border-white/15 py-12 sm:py-14 lg:flex-row lg:items-end lg:justify-between lg:py-16">
          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f264a8]">
              <span className="h-px w-8 bg-[#f264a8]" />
              Let&apos;s build growth
            </p>

            <h2
              className="text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.84] tracking-[-0.075em]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Ready to turn more traffic into{" "}
              <span className="text-[#f264a8]">revenue?</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
              Get a focused growth conversation and discover where your
              e-commerce brand can scale faster.
            </p>
          </div>

          <Link
            href="/contact-us#contact"
            className="
              group inline-flex w-fit items-center gap-3 rounded-full
              bg-[#f264a8] px-6 py-4 text-xs font-bold uppercase
              tracking-[0.14em] text-white transition-all duration-300
              hover:-translate-y-1 hover:bg-white hover:text-[#102957]
              hover:shadow-[0_18px_40px_rgba(242,100,168,0.30)]
            "
          >
            Schedule a Growth Call

            <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              <ArrowUpRight />
            </span>
          </Link>
        </div>

        {/* Footer content */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 sm:py-14 lg:grid-cols-[1.45fr_1fr_1fr_1.3fr] lg:gap-12 lg:py-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex flex-col leading-none"
              aria-label="Brandify Digital Home"
            >
              <span
                className="text-[clamp(2.3rem,3vw,3.4rem)] font-semibold tracking-[-0.08em]"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Brandify<span className="text-[#f264a8]">.</span>
              </span>

              <span className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
                Digital
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-[15px] leading-7 text-white/70">
              Performance-driven digital marketing for e-commerce brands ready
              to grow smarter, scale stronger and convert more.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://web.facebook.com/BrandifyDotDigital"
                target="_blank"
                rel="noreferrer"
                aria-label="Brandify Digital on Facebook"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/85 transition-all duration-300 hover:-translate-y-1 hover:border-[#f264a8] hover:bg-[#f264a8] hover:text-white"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://www.linkedin.com/company/brandifydotdigital"
                target="_blank"
                rel="noreferrer"
                aria-label="Brandify Digital on LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/85 transition-all duration-300 hover:-translate-y-1 hover:border-[#4c9cf5] hover:bg-[#4c9cf5] hover:text-white"
              >
                <LinkedinIcon />
              </a>

              <a
                href="https://wa.me/15053784744"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with Brandify Digital on WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/85 transition-all duration-300 hover:-translate-y-1 hover:border-[#22a57a] hover:bg-[#22a57a] hover:text-white"
              >
                <WhatsappIcon />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
              Services
            </p>

            <nav className="mt-6 flex flex-col gap-3" aria-label="Services">
              {services.map((service) => (
                <FooterLink key={service.label} href={service.href}>
                  {service.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
              Explore
            </p>

            <nav
              className="mt-6 flex flex-col gap-3"
              aria-label="Footer navigation"
            >
              {links.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
              Contact
            </p>

            <div className="mt-6 space-y-6 text-sm leading-relaxed text-white/70">
              <div>
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-white/45">
                  Email
                </span>

                <FooterTextLink href="mailto:hello@brandify.digital">
                  hello@brandify.digital
                </FooterTextLink>
              </div>

              <div>
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-white/45">
                  Hotline
                </span>

                <div className="flex flex-col gap-2">
                  <FooterTextLink href="tel:+8801788744115">
                    +880 1788 744115
                  </FooterTextLink>

                  <FooterTextLink href="tel:+15053784744">
                    +1 505 378 4744
                  </FooterTextLink>
                </div>
              </div>

              <div>
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-white/45">
                  Offices
                </span>

                <p className="max-w-sm text-[14px] leading-6 text-white/72">
                  Suite R, 1209 Mountain Road Pl NE,
                  <br />
                  Albuquerque, NM 87110, USA
                </p>

                <p className="mt-4 max-w-sm text-[14px] leading-6 text-white/72">
                  House No–1151, Road–10, Avenue–11,
                  <br />
                  Mirpur DOHS, Dhaka 1216, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/15 py-7 text-[10px] font-bold uppercase tracking-[0.14em] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Brandify Digital. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms-condition">
              Terms & Conditions
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}