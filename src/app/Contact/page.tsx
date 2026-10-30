import type { Metadata } from "next";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktoni GeoSystem në Podujevë për shërbime gjeodezike dhe kadastrale.",
};

const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1461.1315854980005!2d21.1927664!3d42.9094904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354af5fe6ca5e17%3A0x4b5959a58d62ce93!2sGjeodet%20i%20licensuar%20-%20GeoSystem!5e0!3m2!1sen!2s!4v1793113843130!5m2!1sen!2s";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="bg-white">
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          {/* Page heading */}
          <div className="mb-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              GEOSYSTEM · PODUJEVË
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              Na kontaktoni
            </h1>

            <div className="mt-6 h-1 w-16 rounded-full bg-accent" />
          </div>

          <div className="grid min-w-0 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/* Contact form */}
            <div className="min-w-0">
              <h2 className="mb-6 text-xl font-semibold text-primary">
                Na dërgoni një mesazh
              </h2>

              <ContactForm />
            </div>

            {/* Contact information */}
            <aside className="min-w-0">
              <p className="mb-10 text-base leading-8 text-muted">
                Keni pyetje rreth shërbimeve gjeodezike, matjeve kadastrale apo
                kufijve të parcelave? Na kontaktoni për më shumë informacion.
              </p>

              <div className="space-y-10">
                {/* Office */}
                <section>
                  <h2 className="mb-5 text-xl font-semibold text-primary">
                    Zyra jonë
                  </h2>

                  <div className="border-l-[3px] border-accent pl-5">
                    <p className="font-semibold text-primary">GeoSystem</p>

                    <address className="mt-2 not-italic leading-7 text-muted">
                      Rruga Nuhi Gashi, nr. 154
                      <br />
                      Podujevë, 11000
                      <br />
                      Kosovë
                    </address>
                  </div>
                </section>

                {/* Contact details */}
                <section>
                  <h2 className="mb-5 text-xl font-semibold text-primary">
                    Informacionet e kontaktit
                  </h2>

                  <div className="space-y-6">
                    {/* Phone numbers */}
                    <div>
                      <h3 className="text-sm font-semibold text-primary">
                        Telefoni
                      </h3>

                      <div className="mt-2 flex flex-col gap-2">
                        <a
                          href="tel:+38344196086"
                          className="w-fit text-muted hover:text-primary-light hover:underline"
                        >
                          +383 44 196 086
                        </a>

                        <a
                          href="tel:+38344162197"
                          className="w-fit text-muted hover:text-primary-light hover:underline"
                        >
                          +383 44 162 197
                        </a>
                      </div>
                    </div>

                    {/* Email addresses */}
                    <div>
                      <h3 className="text-sm font-semibold text-primary">
                        Email — në planifikim
                      </h3>

                      <div className="mt-2 space-y-2 text-sm text-muted">
                        <p>info@geosystem-ks.com</p>
                        <p>v.ademi@geosystem-ks.com</p>
                      </div>

                      <p className="mt-2 text-xs leading-6 text-muted">
                        Këto adresa nuk janë konfirmuar ende si aktive për
                        pranimin e mesazheve.
                      </p>
                    </div>

                    {/* Business hours */}
                    <div>
                      <h3 className="text-sm font-semibold text-primary">
                        Orari i punës
                      </h3>

                      <p className="mt-2 text-sm text-muted">
                        E hënë – E premte
                      </p>

                      <p className="mt-1 font-semibold text-primary">
                        08:00 – 16:00
                      </p>

                      <p className="mt-1 text-sm text-muted">
                        E shtunë dhe e diel: Mbyllur
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </aside>
          </div>

          {/* Google Maps */}
          <section
            aria-labelledby="location-heading"
            className="mt-20 border-t border-border pt-12"
          >
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2
                  id="location-heading"
                  className="text-3xl font-semibold text-primary"
                >
                  Na gjeni në hartë
                </h2>

                <p className="mt-3 text-muted">
                  GeoSystem · Rruga Nuhi Gashi, nr. 154, Podujevë
                </p>
              </div>

              <a
                href="https://www.google.com/maps/place/Gjeodet+i+licensuar+-+GeoSystem/@42.9094904,21.1927664,18.67z/data=!4m6!3m5!1s0x1354af5fe6ca5e17:0x4b5959a58d62ce93!8m2!3d42.9096177!4d21.1926192!16s%2Fg%2F11zz9xgtp9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit rounded-lg border border-primary px-5 py-3 text-sm font-semibold text-primary hover:bg-background"
              >
                Hap në Google Maps ↗
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
              <iframe
                title="Lokacioni i GeoSystem në Podujevë"
                src={mapUrl}
                width="100%"
                height="420"
                className="block w-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </section>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
