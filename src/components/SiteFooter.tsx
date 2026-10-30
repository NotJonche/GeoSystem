import Image from "next/image";
import Link from "next/link";
import CopyrightYear from "@/components/CopyrightYear";

const footerLinks = [
  { href: "/", label: "Ballina" },
  { href: "/Services", label: "Shërbimet" },
  { href: "/Products", label: "Produktet" },
  { href: "/Quote", label: "Shporta / Kërko ofertë" },
  { href: "/Contact", label: "Kontakt" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
        <div className="grid gap-x-10 gap-y-12 border-b border-white/15 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* COLUMN 1 — GEOSYSTEM */}
          <div className="lg:pt-12">
            {/* Centered official logo */}
            <div className="flex justify-start">
              <Link
                href="/"
                aria-label="GeoSystem - Ballina"
                className="inline-flex rounded-xl bg-[#EEF4E5] p-3 transition-colors hover:bg-white"
              >
                <Image
                  src="/images/geosystem-logo-transparent.png"
                  alt="GeoSystem"
                  width={1850}
                  height={820}
                  className="h-16 w-auto max-w-[190px] object-contain"
                />
              </Link>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/75">
              Shërbime profesionale gjeodezike, matje kadastrale dhe pajisje për
              punime gjeodezike në Kosovë.
            </p>

            <p className="mt-4 text-sm text-lime-200">Podujevë · Kosovë</p>
          </div>

          {/* COLUMN 2 — NAVIGATION */}
          <div className="lg:pt-12">
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-lime-200">
              Navigimi
            </h2>

            <nav
              aria-label="Navigimi në fund të faqes"
              className="mt-6 flex flex-col items-start gap-4"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-lime-200 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* COLUMN 3 — CONTACT */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-lime-200">
              Kontakti
            </h2>

            <div className="mt-6 space-y-6 text-sm">
              {/* Phone numbers */}
              <div>
                <h3 className="mb-2 font-semibold text-white">Telefoni</h3>

                <div className="flex flex-col items-start gap-2">
                  <a
                    href="tel:+38344196086"
                    className="text-white/75 transition-colors hover:text-lime-200"
                  >
                    +383 44 196 086
                  </a>

                  <a
                    href="tel:+38344162197"
                    className="text-white/75 transition-colors hover:text-lime-200"
                  >
                    +383 44 162 197
                  </a>
                </div>
              </div>

              {/* Email addresses */}
              <div>
                <h3 className="mb-2 font-semibold text-white">Email</h3>

                <div className="flex flex-col items-start gap-2">
                  <a
                    href="mailto:info@geosystem-ks.com"
                    className="break-all text-white/75 transition-colors hover:text-lime-200"
                  >
                    info@geosystem-ks.com
                  </a>

                  <a
                    href="mailto:v.ademi@geosystem-ks.com"
                    className="break-all text-white/75 transition-colors hover:text-lime-200"
                  >
                    v.ademi@geosystem-ks.com
                  </a>
                </div>
              </div>

              {/* Business hours */}
              <div>
                <h3 className="mb-2 font-semibold text-white">Orari i punës</h3>

                <p className="text-white/75">E hënë – E premte</p>

                <p className="mt-1 font-semibold text-lime-200">
                  08:00 – 16:00
                </p>

                <p className="mt-1 text-xs text-white/55">
                  E shtunë dhe e diel: Mbyllur
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 4 — ALPHAGEO & SOCIAL MEDIA */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-lime-200">
              AlphaGeo
            </h2>

            {/* Authorization */}
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-200/30 bg-white/10 px-3 py-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-lime-200"
                >
                  <path d="M9 12l2 2 4-4" />
                  <path d="M12 22c5-2 8-6 8-11V5l-8-3-8 3v6c0 5 3 9 8 11z" />
                </svg>

                <span className="text-xs font-semibold text-lime-200">
                  Distributor i autorizuar
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/75">
                GeoSystem është distributor i autorizuar i produkteve AlphaGeo
                në Kosovë dhe Shqipëri, sipas certifikatës së prodhuesit.
              </p>

              <p className="mt-3 text-xs text-white/55">
                Autorizimi i vlefshëm deri më 30 tetor 2027.
              </p>
            </div>

            {/* Centered social media section */}
            <div className="mt-8">
              <h3 className="mb-4 text-sm font-semibold text-white">
                Na ndiqni
              </h3>

              <div className="flex flex-wrap gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/geosystem.ks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GeoSystem në Instagram"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-all hover:border-lime-200 hover:bg-white/20 hover:text-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-200"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61592437737975"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GeoSystem në Facebook"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-all hover:border-lime-200 hover:bg-white/20 hover:text-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-200"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.1 0 2.25.2 2.25.2v2.47H15.2c-1.25 0-1.64.78-1.64 1.57V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-3 pt-7 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> GeoSystem. Të gjitha të drejtat e rezervuara.
          </p>

          <p>GeoSystem · Podujevë, Kosovë</p>
        </div>
      </div>
    </footer>
  );
}
