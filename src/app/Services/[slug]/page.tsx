import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { services } from "@/data/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Known services to generate at build time.
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

// Generate metadata for each service.
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find((item) => item.id === slug);

  if (!service) {
    return {
      title: "Shërbimi nuk u gjet",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

// Main page: render stable layout immediately.
export default function ServiceDetailPage({ params }: ServicePageProps) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <Suspense fallback={<ServiceLoading />}>
          <ServiceContent params={params} />
        </Suspense>
      </main>

      <SiteFooter />
    </div>
  );
}

// Loading fallback while resolving route data.
function ServiceLoading() {
  return (
    <section role="status" className="bg-[#EEF4E5] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="h-5 w-36 animate-pulse rounded bg-[#D7E0CB]" />

        <div className="mt-10 h-12 max-w-lg animate-pulse rounded-lg bg-[#D7E0CB]" />

        <p className="sr-only">Duke ngarkuar shërbimin...</p>
      </div>
    </section>
  );
}

// This component is wrapped inside Suspense.
async function ServiceContent({ params }: ServicePageProps) {
  const { slug } = await params;

  const service = services.find((item) => item.id === slug);

  if (!service) {
    notFound();
  }

  const serviceIndex = services.findIndex((item) => item.id === slug);

  return (
    <>
      {/* Service introduction */}
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

      {/* Service information */}
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
                Informacionet e detajuara për këtë shërbim, procesin e punës dhe
                dokumentacionin përkatës do të plotësohen pas konfirmimit nga
                GeoSystem.
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
    </>
  );
}
