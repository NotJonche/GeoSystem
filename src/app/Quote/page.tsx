"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { type FormEvent, Suspense, useEffect, useState } from "react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { publishedProducts } from "@/data/products";

import {
  addToQuoteCart,
  clearQuoteCart,
  removeFromQuoteCart,
  updateQuoteQuantity,
  useQuoteCart,
} from "@/lib/quoteCart";

function QuoteForm() {
  const searchParams = useSearchParams();
  const initialSlug = searchParams.get("product");

  // Shared basket, persisted in localStorage.
  const items = useQuoteCart();

  const [selectedSlug, setSelectedSlug] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Automatically add the product linked from "Kërko ofertë".
  // Existing products remain in the basket.
  useEffect(() => {
    if (initialSlug) {
      addToQuoteCart(initialSlug);
    }
  }, [initialSlug]);

  const availableProducts = publishedProducts.filter(
    (product) => !items.some((item) => item.slug === product.slug),
  );

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  function handleAddProduct() {
    if (!selectedSlug) return;

    const added = addToQuoteCart(selectedSlug);

    if (added) {
      setSelectedSlug("");
      setError("");
    } else {
      setError(
        "Produkti nuk mund të shtohet. " +
          "Kontrolloni kufirin prej 20 produkteve.",
      );
    }
  }

  function handleRemoveProduct(slug: string) {
    removeFromQuoteCart(slug);
    setError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (sending || items.length === 0) {
      setError("Zgjidhni të paktën një produkt.");
      return;
    }

    setSending(true);
    setError("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: items.map((item) => ({
            slug: item.slug,
            quantity: item.quantity,
          })),
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
          website,
        }),
      });

      if (!response.ok) {
        throw new Error("Quote request failed");
      }

      // Clear the basket only after the API accepts the request.
      clearQuoteCart();
      setSuccess(true);
    } catch {
      setError(
        "Kërkesa nuk u dërgua. Produktet mbeten të " +
          "ruajtura në shportë. Provoni përsëri " +
          "ose na telefononi.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <div className="mb-10">
        <Link
          href="/Products"
          className="text-sm font-medium text-primary-light hover:underline"
        >
          ← Kthehu te produktet
        </Link>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          GEOSYSTEM · PAJISJE GJEODEZIKE
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
          Shporta & Kërkesa për ofertë
        </h1>

        <p className="mt-5 max-w-2xl leading-8 text-muted">
          Zgjidhni një ose më shumë produkte, caktoni sasitë dhe plotësoni të
          dhënat për të kërkuar një ofertë të përbashkët.
        </p>
      </div>

      {success ? (
        <div
          role="status"
          aria-live="polite"
          className="rounded-2xl border border-border bg-white p-10"
        >
          <h2 className="text-2xl font-semibold text-primary">
            Kërkesa u dërgua!
          </h2>

          <p className="mt-4 leading-8 text-muted">
            Kërkesa juaj u pranua nga shërbimi i dërgimit. GeoSystem do
            t&apos;ju kontaktojë pas shqyrtimit.
          </p>

          <Link
            href="/Products"
            className="mt-6 inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-white"
          >
            Kthehu te produktet
          </Link>
        </div>
      ) : (
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          {/* Selected products */}
          <section aria-labelledby="quote-products-heading" className="min-w-0">
            <div className="mb-6 flex items-center justify-between gap-3">
              <h2
                id="quote-products-heading"
                className="text-2xl font-semibold text-primary"
              >
                Produktet e zgjedhura
              </h2>

              <span className="rounded-full bg-[#EEF4E5] px-3 py-1 text-sm font-semibold text-primary">
                {totalQuantity} pajisje
              </span>
            </div>

            <div className="space-y-4">
              {items.length === 0 && (
                <div className="rounded-2xl border border-border bg-white p-8 text-center">
                  <p className="text-muted">Shporta është bosh.</p>

                  <Link
                    href="/Products"
                    className="mt-4 inline-block text-sm font-semibold text-primary-light underline underline-offset-4"
                  >
                    Shiko produktet
                  </Link>
                </div>
              )}

              {items.map((item) => {
                const product = publishedProducts.find(
                  (entry) => entry.slug === item.slug,
                );

                if (!product) return null;

                return (
                  <article
                    key={item.slug}
                    className="rounded-2xl border border-border bg-white p-4 shadow-sm sm:p-5"
                  >
                    <div className="flex gap-4">
                      <Link
                        href={`/Products/${product.slug}`}
                        className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[#EEF4E5] sm:h-28 sm:w-28"
                      >
                        {product.images.length > 0 ? (
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            sizes="112px"
                            className="object-contain p-2"
                          />
                        ) : (
                          <span className="flex h-full items-center justify-center p-2 text-center text-xs text-muted">
                            Fotografia në përgatitje
                          </span>
                        )}
                      </Link>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium text-accent">
                          {product.category}
                        </p>

                        <h3 className="mt-1 text-lg font-semibold text-primary">
                          {product.name}
                        </h3>

                        <Link
                          href={`/Products/${product.slug}`}
                          className="mt-2 inline-block text-xs font-medium text-primary-light underline underline-offset-4"
                        >
                          Shiko detajet
                        </Link>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4">
                      <div className="flex items-center gap-3">
                        <label
                          htmlFor={`quantity-${item.slug}`}
                          className="text-sm font-semibold text-primary"
                        >
                          Sasia
                        </label>

                        <input
                          id={`quantity-${item.slug}`}
                          type="number"
                          min={1}
                          max={99}
                          step={1}
                          value={item.quantity}
                          onChange={(event) => {
                            const quantity = Number(event.target.value);

                            if (
                              Number.isInteger(quantity) &&
                              quantity >= 1 &&
                              quantity <= 99
                            ) {
                              updateQuoteQuantity(item.slug, quantity);
                            }
                          }}
                          className="w-20 rounded-lg border border-border bg-white px-3 py-2 text-primary"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveProduct(item.slug)}
                        className="min-h-10 rounded-lg px-3 text-sm font-medium text-red-700 transition-colors hover:bg-red-50"
                      >
                        Hiq produktin
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Add another product */}
            <div className="mt-6 rounded-2xl border border-border bg-[#EEF4E5] p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-primary">
                Shto produkt tjetër
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted">
                Mund të shtoni deri në 20 modele të ndryshme në të njëjtën
                kërkesë.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <label htmlFor="add-quote-product" className="sr-only">
                  Zgjidhni produktin
                </label>

                <select
                  id="add-quote-product"
                  value={selectedSlug}
                  disabled={
                    items.length >= 20 || availableProducts.length === 0
                  }
                  onChange={(event) => setSelectedSlug(event.target.value)}
                  className="min-w-0 flex-1 rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary"
                >
                  <option value="">Zgjidhni produktin...</option>

                  {availableProducts.map((product) => (
                    <option key={product.slug} value={product.slug}>
                      {product.name} — {product.category}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  disabled={!selectedSlug || items.length >= 20}
                  onClick={handleAddProduct}
                  className="min-h-11 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50"
                >
                  + Shto produktin
                </button>
              </div>

              <Link
                href="/Products"
                className="mt-5 inline-block text-sm font-semibold text-primary-light underline underline-offset-4"
              >
                Vazhdo shfletimin e produkteve
              </Link>
            </div>

            {items.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  clearQuoteCart();
                  setError("");
                }}
                className="mt-5 text-sm font-medium text-red-700 underline underline-offset-4"
              >
                Zbraz shportën
              </button>
            )}

            <div className="mt-8 rounded-xl border border-border bg-white p-5">
              <p className="text-sm font-semibold text-primary">Keni pyetje?</p>

              <p className="mt-2 text-sm text-muted">
                Mund të na kontaktoni edhe drejtpërdrejt.
              </p>

              <a
                href="tel:+38344196086"
                className="mt-3 inline-block font-semibold text-primary-light underline underline-offset-4"
              >
                +383 44 196 086
              </a>
            </div>
          </section>

          {/* Customer details */}
          <section aria-labelledby="quote-contact-heading" className="min-w-0">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
            >
              <h2
                id="quote-contact-heading"
                className="text-2xl font-semibold text-primary"
              >
                Të dhënat tuaja
              </h2>

              <div>
                <label
                  htmlFor="quote-name"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Emri dhe mbiemri *
                </label>

                <input
                  id="quote-name"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={100}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Emri juaj"
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 text-primary outline-none focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="quote-email"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Email *
                </label>

                <input
                  id="quote-email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="email@shembull.com"
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 text-primary outline-none focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="quote-phone"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Numri i telefonit *
                </label>

                <input
                  id="quote-phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  minLength={6}
                  maxLength={30}
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="+383 ..."
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 text-primary outline-none focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="quote-message"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Mesazhi (opsional)
                </label>

                <textarea
                  id="quote-message"
                  rows={5}
                  maxLength={2000}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Pyetje teknike ose kërkesa të veçanta..."
                  className="w-full resize-y rounded-lg border border-border bg-white px-4 py-3 text-primary outline-none focus:border-accent"
                />
              </div>

              {/* Basic bot trap */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="quote-website">Website</label>

                <input
                  id="quote-website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"
                >
                  {error}
                </p>
              )}

              <p className="text-sm leading-6 text-muted">
                Të dhënat tuaja përdoren për t&apos;ju kontaktuar lidhur me
                kërkesën për ofertë.
              </p>

              <button
                type="submit"
                disabled={sending || items.length === 0}
                className="w-full rounded-lg bg-primary px-6 py-3.5 font-semibold text-white transition-colors hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50"
              >
                {sending
                  ? "Duke dërguar..."
                  : `Dërgo kërkesën për ${totalQuantity} pajisje`}
              </button>
            </form>
          </section>
        </div>
      )}
    </>
  );
}

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="px-6 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Suspense
            fallback={<p className="text-muted">Duke ngarkuar shportën...</p>}
          >
            <QuoteForm />
          </Suspense>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
