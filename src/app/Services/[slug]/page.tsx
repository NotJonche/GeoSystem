import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { services } from "@/data/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Generate the 13 known service routes at build time.
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

// Generate service-specific browser titles and metadata.
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find((item) => item.id === slug);

  if (!service) {
    return {
      title: "Shërbimi nuk u gjet | GeoSystem",
    };
  }

  return {
    title: `${service.title} | GeoSystem`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;

  const service = services.find((item) => item.id === slug);

  if (!service) {
    notFound();
  }

  const serviceIndex = services.findIndex((item) => item.id === slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Page heading */}
        <section className="border-b border-border bg-[#EEF4E5] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/Services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-light transition-colors hover:text-accent"
            >
              <span aria-hidden="true">←</span>
              Të gjitha shërbimet
            </Link>

            <p className="mt-12 text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
              GEOSYSTEM · SHËRBIMI {String(serviceIndex + 1).padStart(2, "0")}
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-primary sm:text-6xl">
              {service.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              {service.description}
            </p>
          </div>
        </section>

        {/* Initial content placeholder */}
        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.6fr_1fr]">
            <article>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Rreth shërbimit
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-primary">
                {service.title}
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-muted">
                {service.description}
              </p>

              <div className="mt-9 rounded-xl border border-border bg-white p-6">
                <p className="text-sm font-semibold text-primary">
                  Përmbajtja në përgatitje
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Informacionet e detajuara për këtë shërbim, procesin e punës
                  dhe dokumentacionin përkatës do të plotësohen pas konfirmimit
                  nga GeoSystem.
                </p>
              </div>
            </article>

            {/* Contact panel */}
            <aside className="h-fit rounded-2xl border border-border bg-white p-7 shadow-sm">
              <h2 className="text-xl font-semibold text-primary">
                Keni pyetje për këtë shërbim?
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Kontaktoni GeoSystem për informacione shtesë mbi shërbimin.
              </p>

              <Link
                href="/Contact"
                className="mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                Na kontaktoni
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>

              <Link
                href="/Services"
                className="mt-4 block text-center text-sm font-medium text-primary-light hover:underline"
              >
                Shiko shërbimet e tjera
              </Link>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
