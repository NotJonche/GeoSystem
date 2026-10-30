import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

import { publishedProducts } from "@/data/products";
import { productCategories } from "@/data/productCategories";

export const metadata: Metadata = {
  title: "Produktet",
  description:
    "Eksploroni katalogun e pajisjeve gjeodezike të GeoSystem: GNSS/RTK, LiDAR, stacione totale dhe pajisje të tjera. Kërkoni ofertë për produktet që ju interesojnë.",
};

export default function ProductsPage() {
  const categories = productCategories
    .map((category) => ({
      ...category,
      products: publishedProducts.filter(
        (product) => product.categoryId === category.id,
      ),
    }))
    .filter((category) => category.products.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="border-b border-border bg-[#EEF4E5] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-light">
              GEOSYSTEM · PAJISJE GJEODEZIKE
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-primary sm:text-6xl">
              Produktet
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Zbuloni gamën e pajisjeve profesionale për matje gjeodezike,
              topografi dhe aplikime profesionale në terren.
            </p>
          </div>
        </section>

        {/* Catalog */}
        <section className="px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                Pajisje profesionale
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
                Katalogu i pajisjeve
              </h2>

              <p className="mt-4 max-w-2xl text-muted">
                Shfletoni produktet sipas kategorisë. Për çmime dhe
                disponueshmëri, kontaktoni GeoSystem.
              </p>
            </div>

            {categories.length === 0 ? (
              <div className="rounded-2xl border border-border bg-white p-10 text-center">
                <h3 className="text-xl font-semibold text-primary">
                  Katalogu në përgatitje
                </h3>
                <p className="mt-3 text-muted">
                  Produktet do të shfaqen së shpejti.
                </p>
              </div>
            ) : (
              <>
                {/* Category links */}
                <nav
                  aria-label="Kategoritë e produkteve"
                  className="mb-16 flex flex-wrap gap-3"
                >
                  {categories.map((category) => (
                    <a
                      key={category.id}
                      href={`#${category.id}`}
                      className="rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:border-accent hover:bg-[#EEF4E5]"
                    >
                      {category.name}
                      <span className="ml-2 text-muted">
                        ({category.products.length})
                      </span>
                    </a>
                  ))}
                </nav>

                {/* Product sections */}
                <div className="space-y-20">
                  {categories.map((category) => (
                    <section
                      key={category.id}
                      id={category.id}
                      aria-labelledby={`${category.id}-heading`}
                      className="scroll-mt-28"
                    >
                      <div className="mb-8 border-b border-border pb-6">
                        <h3
                          id={`${category.id}-heading`}
                          className="text-2xl font-semibold text-primary sm:text-3xl"
                        >
                          {category.name}
                        </h3>

                        <p className="mt-3 max-w-2xl leading-7 text-muted">
                          {category.description}
                        </p>
                      </div>

                      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                        {category.products.map((product) => (
                          <article
                            key={product.slug}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:border-[#B8C9A5] hover:shadow-lg"
                          >
                            <Link
                              href={`/Products/${product.slug}`}
                              aria-label={`Shiko produktin ${product.name}`}
                              className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#EEF4E5]"
                            >
                              {product.images.length > 0 ? (
                                <Image
                                  src={product.images[0]}
                                  alt={`${product.manufacturer} ${product.name}`}
                                  fill
                                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                  className="object-contain p-7 transition-transform duration-300 group-hover:scale-105"
                                />
                              ) : (
                                <div className="px-6 text-center">
                                  <p className="text-xl font-semibold text-primary-light">
                                    {product.name}
                                  </p>
                                  <p className="mt-3 text-sm text-muted">
                                    Fotografia në përgatitje
                                  </p>
                                </div>
                              )}
                            </Link>

                            <div className="flex flex-1 flex-col p-6">
                              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                                {product.category}
                              </p>

                              <h4 className="mt-3 text-2xl font-semibold text-primary">
                                <Link
                                  href={`/Products/${product.slug}`}
                                  className="hover:text-primary-light"
                                >
                                  {product.name}
                                </Link>
                              </h4>

                              <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                                {product.description}
                              </p>

                              <p className="mt-5 text-xs font-medium text-primary-light">
                                Disponueshmëria: sipas kërkesës
                              </p>

                              <div className="mt-5 flex flex-col gap-3">
                                <Link
                                  href={`/Products/${product.slug}`}
                                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-background"
                                >
                                  Shiko detajet
                                </Link>

                                <Link
                                  href={`/Quote?product=${encodeURIComponent(
                                    product.slug,
                                  )}`}
                                  className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
                                >
                                  Kërko ofertë
                                </Link>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="px-6 pb-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-2xl bg-primary px-8 py-12 text-white sm:px-12">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Ju nevojitet ndihmë për zgjedhjen e pajisjes?
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-white/80">
              Kontaktoni GeoSystem për informacione teknike, disponueshmëri dhe
              oferta.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+38344196086"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-lime-200 px-6 py-3 font-semibold text-primary transition-colors hover:bg-white"
              >
                Na telefononi
              </a>

              <Link
                href="/Contact"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
