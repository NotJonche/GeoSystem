import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductImageGallery from "@/components/ProductImageGallery";

import { getPublishedProductBySlug, publishedProducts } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publishedProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = getPublishedProductBySlug(slug);

  if (!product) {
    return {
      title: "Produkti nuk u gjet",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

async function ProductDetails({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getPublishedProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const quoteUrl = `/Quote?product=${encodeURIComponent(product.slug)}`;

  const specifications = Object.entries(product.specifications);

  const availabilityText =
    product.availability === "in-stock"
      ? "Në stok. Kontaktoni GeoSystem për konfirmim."
      : product.availability === "out-of-stock"
        ? "Aktualisht jashtë stokut. Kontaktoni GeoSystem."
        : "Sipas kërkesës. Kontaktoni GeoSystem për afatet dhe ofertën.";

  return (
    <>
      <div className="mb-8">
        <Link
          href="/Products"
          className="text-sm font-medium text-primary-light transition-colors hover:text-primary hover:underline"
        >
          ← Kthehu te produktet
        </Link>
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        {/* LEFT — Product gallery */}
        <div className="min-w-0">
          <ProductImageGallery
            images={product.images}
            productName={product.name}
          />
        </div>

        {/* RIGHT — Product information */}
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {product.category}
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            {product.name}
          </h1>

          <p className="mt-8 whitespace-pre-line text-base leading-8 text-muted">
            {product.description}
          </p>

          <div className="mt-8 rounded-xl border border-border bg-white p-5">
            <p className="text-sm font-semibold text-primary">
              Disponueshmëria
            </p>

            <p className="mt-2 text-sm leading-6 text-muted">
              {availabilityText}
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Link
              href={quoteUrl}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Kërko ofertë
            </Link>

            <a
              href="tel:+38344196086"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border px-6 py-3 text-center text-sm font-semibold text-primary transition-colors hover:bg-[#EEF4E5]"
            >
              Na telefononi
            </a>
          </div>

          {/* Technical specifications */}
          {specifications.length > 0 && (
            <section
              aria-labelledby="technical-specifications"
              className="mt-12"
            >
              <h2
                id="technical-specifications"
                className="text-2xl font-semibold text-primary"
              >
                Specifikimet teknike
              </h2>

              <div className="mt-5 overflow-hidden rounded-xl border border-border bg-white">
                <dl>
                  {specifications.map(([label, value], index) => (
                    <div
                      key={label}
                      className={`grid gap-2 px-5 py-4 sm:grid-cols-2 sm:gap-5 ${
                        index % 2 === 0 ? "bg-[#F5F8F0]" : "bg-white"
                      }`}
                    >
                      <dt className="text-sm font-semibold text-primary">
                        {label}
                      </dt>

                      <dd className="text-sm leading-6 text-muted">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="px-6 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Suspense
            fallback={<p className="text-muted">Duke ngarkuar produktin...</p>}
          >
            <ProductDetails params={params} />
          </Suspense>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
