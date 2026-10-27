
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Kontakt | GeoSystem",
  description:
    "Kontaktoni GeoSystem në Podujevë për shërbime gjeodezike dhe kadastrale.",
};

const inputClass =
  "w-full rounded-md border border-border bg-background px-4 py-4 text-base text-primary outline-none transition-colors placeholder:text-[#89938A] focus:border-primary-light focus:ring-2 focus:ring-primary-light/15";

const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1461.1315854980005!2d21.1927664!3d42.9094904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354af5fe6ca5e17%3A0x4b5959a58d62ce93!2sGjeodet%20i%20licensuar%20-%20GeoSystem!5e0!3m2!1sen!2s!4v1793113843130!5m2!1sen!2s";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="bg-white">
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="mb-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              GEOSYSTEM · PODUJEVË
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              Na kontaktoni
            </h1>

            <div className="mt-6 h-1 w-16 rounded-full bg-accent" />
          </div>

          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/* Contact form */}
            <div>
              <h2 className="mb-6 text-xl font-semibold text-primary">
                Na dërgoni një mesazh
              </h2>

              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-medium text-primary"
                    >
                      Emri dhe mbiemri *
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Emri juaj"
                      autoComplete="name"
                      maxLength={100}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-medium text-primary"
                    >
                      Email *
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Email adresa"
                      autoComplete="email"
                      maxLength={254}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-medium text-primary"
                  >
                    Subjekti *
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Subjekti i mesazhit"
                    maxLength={150}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-primary"
                  >
                    Mesazhi *
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Shkruani mesazhin tuaj këtu..."
                    rows={8}
                    maxLength={5000}
                    required
                    className={`${inputClass} min-h-48 resize-y`}
                  />
                </div>

                <div className="rounded-md border border-border bg-background p-4">
                  <p className="text-sm leading-6 text-muted">
                    Ky formular është demonstrues.
                    Dërgimi i mesazheve nuk është aktivizuar
                    ende. Mos vendosni të dhëna personale
                    reale gjatë testimit.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled
                  className="inline-flex cursor-not-allowed items-center justify-center rounded-md bg-primary px-8 py-4 font-semibold text-white opacity-65"
                >
                  Dërgo mesazhin
                </button>
              </form>
            </div>

            {/* Contact information */}
            <aside>
              <p className="mb-10 text-base leading-8 text-muted">
                Keni pyetje rreth shërbimeve gjeodezike,
                matjeve kadastrale apo kufijve të parcelave?
                Na kontaktoni për më shumë informacion.
              </p>

              <div className="space-y-10">
                <section>
                  <h2 className="mb-5 text-xl font-semibold text-primary">
                    Zyra jonë
                  </h2>

                  <div className="border-l-[3px] border-accent pl-5">
                    <p className="font-semibold text-primary">
                      GeoSystem
                    </p>

                    <address className="mt-2 not-italic leading-7 text-muted">
                      Rruga Lordi Bajron
                      <br />
                      Podujevë, 11000
                      <br />
                      Kosovë
                    </address>
                  </div>
                </section>

                <section>
                  <h2 className="mb-5 text-xl font-semibold text-primary">
                    Informacionet e kontaktit
                  </h2>

                  <div className="space-y-6">
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

                    <div>
                      <h3 className="text-sm font-semibold text-primary">
                        Email — në planifikim
                      </h3>

                      <div className="mt-2 space-y-2 text-sm text-muted">
                        <p>info@geosystem-ks.com</p>
                        <p>V.ademi@geosystem-ks.org</p>
                      </div>

                      <p className="mt-2 text-xs leading-6 text-muted">
                        Këto adresa nuk janë aktivizuar
                        ende dhe mund të ndryshojnë.
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
                  GeoSystem · Rruga Lordi Bajron,
                  Podujevë
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
