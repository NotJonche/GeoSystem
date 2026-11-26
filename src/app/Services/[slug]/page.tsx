import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { services } from "@/data/services";
import {
  serviceContent,
  type ServiceContent,
  type ServiceImage,
} from "@/data/serviceContent";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

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

export default function ServiceDetailPage({ params }: ServicePageProps) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <Suspense fallback={<ServiceLoading />}>
          <ServicePageContent params={params} />
        </Suspense>
      </main>

      <SiteFooter />
    </div>
  );
}

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

async function ServicePageContent({ params }: ServicePageProps) {
  const { slug } = await params;

  const service = services.find((item) => item.id === slug);

  if (!service) {
    notFound();
  }

  const serviceIndex = services.findIndex((item) => item.id === slug);

  const content = serviceContent[slug];

  return (
    <>
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

      {/* Detailed service content */}
      {content ? (
        <section className="px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <DetailedServiceContent content={content} />

            <div className="mx-auto mt-20 w-full max-w-4xl">
              <ContactPanel />
            </div>
          </div>
        </section>
      ) : (
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

            <ContactPanel />
          </div>
        </section>
      )}
    </>
  );
}

/*
 * Reusable layout for every completed service.
 */
function DetailedServiceContent({ content }: { content: ServiceContent }) {
  return (
    <article>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
        Rreth shërbimit
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
        {content.heading}
      </h2>

      {/* Section 1: Text left, photo right */}
      <div className="mt-10 grid items-center gap-10 md:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div className="space-y-5 text-base leading-8 text-muted">
          {content.introduction.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <ServicePhoto image={content.firstImage} number={1} />
      </div>

      {/* Section 2: Full-width text */}
      <div className="mt-14 space-y-6 border-t border-border pt-12 text-base leading-8 text-muted">
        <h3 className="text-2xl font-semibold tracking-tight text-primary">
          {content.middleHeading}
        </h3>

        {content.middleParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Section 3: Photo left, text right */}
      <div className="mt-14 grid items-center gap-10 border-t border-border pt-12 md:grid-cols-[1fr_1.35fr] lg:gap-16">
        <ServicePhoto image={content.secondImage} number={2} />

        <div className="space-y-5 text-base leading-8 text-muted">
          <h3 className="text-2xl font-semibold tracking-tight text-primary">
            {content.finalHeading}
          </h3>

          {content.finalParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

/*
 * Displays an actual photo when available.
 * Otherwise displays the same centered placeholder.
 */
function ServicePhoto({
  image,
  number,
}: {
  image: ServiceImage;
  number: number;
}) {
  if (image) {
    return (
      <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-2xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 520px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      aria-label={`Vend për fotografinë ${number}`}
      className="mx-auto flex min-h-[360px] w-full max-w-[520px] items-center justify-center rounded-2xl border border-dashed border-[#B8C8B0] bg-[#EEF4E5] px-6"
    >
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-primary-light/60"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>

        <span className="text-sm font-semibold text-primary">
          Foto {number}
        </span>

        <span className="text-xs font-medium text-primary-light">
          Fotografia do të shtohet
        </span>
      </div>
    </div>
  );
}

function ContactPanel() {
  return (
    <aside className="w-full rounded-2xl border border-border bg-white p-7 shadow-sm sm:p-8">
      <h2 className="text-xl font-semibold text-primary sm:text-2xl">
        Keni pyetje për këtë shërbim?
      </h2>

      <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
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
  );
}
