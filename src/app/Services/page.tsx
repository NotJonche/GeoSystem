import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Shërbimet | GeoSystem",
  description: "Shërbimet gjeodezike dhe kadastrale të GeoSystem në Kosovë.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Page introduction */}
        <section className="border-b border-border bg-[#EEF4E5] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
              GEOSYSTEM · KOSOVË
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-primary sm:text-6xl">
              Shërbimet tona
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Njihuni me shërbimet gjeodezike, topografike dhe kadastrale të
              GeoSystem.
            </p>
          </div>
        </section>

        {/* Services timeline */}
        <section
          aria-label="Lista e shërbimeve"
          className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
        >
          <div className="relative mx-auto max-w-6xl">
            {/* Vertical timeline line */}
            <div
              aria-hidden="true"
              className="absolute bottom-12 left-6 top-12 w-px bg-[#CED8BE] md:left-1/2 md:-translate-x-1/2"
            />

            <div className="space-y-10 md:space-y-14">
              {services.map((service, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className="relative grid scroll-mt-10 grid-cols-[48px_minmax(0,1fr)] items-center gap-5 md:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] md:gap-8"
                  >
                    {/* Timeline marker */}
                    <div className="relative z-10 col-start-1 row-start-1 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-primary text-sm font-semibold text-white shadow-sm md:col-start-2 md:mx-auto md:h-16 md:w-16">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Service card */}
                    <div
                      className={`col-start-2 row-start-1 md:col-span-1 ${
                        isLeft ? "md:col-start-1" : "md:col-start-3"
                      }`}
                    >
                      <div
                        className={`group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-200 hover:border-[#B8C9A5] hover:shadow-lg sm:p-8 ${
                          isLeft ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                          Shërbimi {String(index + 1).padStart(2, "0")}
                        </p>

                        <h2 className="mt-3 text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                          {service.title}
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                          {service.description}
                        </p>

                        <Link
                          href={`/Services/${service.id}`}
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-light underline-offset-4 transition-colors hover:text-accent hover:underline"
                          aria-label={`Më shumë për ${service.title}`}
                        >
                          Më shumë
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="px-6 pb-20 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-2xl bg-primary px-8 py-12 text-white sm:px-12">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Keni nevojë për shërbime gjeodezike?
            </h2>

            <p className="mt-4 max-w-xl leading-8 text-white/75">
              Kontaktoni GeoSystem për më shumë informacion rreth shërbimeve
              tona.
            </p>

            <Link
              href="/Contact"
              className="mt-7 inline-flex min-h-11 items-center rounded-lg bg-lime-200 px-6 py-3 font-semibold text-primary transition-colors hover:bg-white"
            >
              Na kontaktoni
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
