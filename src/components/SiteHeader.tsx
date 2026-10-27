"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { services } from "@/data/services";
import QuoteCartLink from "@/components/QuoteCartLink";

export default function SiteHeader() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const desktopDropdownRef = useRef<HTMLDivElement>(null);

  function closeMenus() {
    setMobileOpen(false);
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
  }

  // Close menus when Escape is pressed.
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setDesktopServicesOpen(false);
        setMobileServicesOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Close desktop dropdown when clicking outside.
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="relative z-50 border-b border-[#D7E0CB] bg-[#EEF4E5] text-primary">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6 lg:px-8">
        {/* Official GeoSystem logo */}
        <Link
          href="/"
          onClick={closeMenus}
          aria-label="GeoSystem - Ballina"
          className="flex shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <Image
            src="/images/geosystem-logo-transparent.png"
            alt="GeoSystem"
            width={1850}
            height={820}
            priority
            className="h-[54px] w-auto max-w-[170px] object-contain sm:h-[62px] sm:max-w-[210px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Navigimi kryesor"
          className="hidden items-center gap-5 md:flex"
        >
          {/* Ballina */}
          <Link
            href="/"
            onClick={closeMenus}
            aria-current={pathname === "/" ? "page" : undefined}
            className={`relative py-2 text-sm font-semibold transition-colors ${
              pathname === "/"
                ? "text-primary"
                : "text-primary/70 hover:text-primary"
            }`}
          >
            Ballina
            {pathname === "/" && (
              <span className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-accent" />
            )}
          </Link>

          {/* Shërbimet dropdown */}
          <div
            ref={desktopDropdownRef}
            className="relative -mr-4 flex items-center gap-0"
          >
            <Link
              href="/Services"
              onClick={closeMenus}
              aria-current={
                pathname.startsWith("/Services") ? "page" : undefined
              }
              className={`relative py-2 text-sm font-semibold transition-colors ${
                pathname.startsWith("/Services")
                  ? "text-primary"
                  : "text-primary/70 hover:text-primary"
              }`}
            >
              Shërbimet
              {pathname.startsWith("/Services") && (
                <span className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-accent" />
              )}
            </Link>

            <button
              type="button"
              aria-label="Shfaq listën e shërbimeve"
              aria-expanded={desktopServicesOpen}
              aria-controls="desktop-services-menu"
              onClick={() => setDesktopServicesOpen((previous) => !previous)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-primary transition-colors hover:bg-[#E4ECD7]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className={`h-4 w-4 transition-transform duration-200 ${
                  desktopServicesOpen ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {desktopServicesOpen && (
              <div
                id="desktop-services-menu"
                className="absolute right-0 top-full z-50 w-80 pt-4"
              >
                <div className="max-h-[min(70vh,540px)] overflow-y-auto rounded-xl border border-border bg-white p-2 shadow-xl">
                  <Link
                    href="/Services"
                    onClick={closeMenus}
                    className="block rounded-lg px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-background"
                  >
                    Të gjitha shërbimet
                  </Link>

                  <div className="my-1 border-t border-border" />

                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/Services#${service.id}`}
                      onClick={closeMenus}
                      className="block rounded-lg px-4 py-2.5 text-sm text-primary/80 transition-colors hover:bg-background hover:text-primary"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Produktet */}
          <Link
            href="/Products"
            onClick={closeMenus}
            aria-current={pathname.startsWith("/Products") ? "page" : undefined}
            className={`relative py-2 text-sm font-semibold transition-colors ${
              pathname.startsWith("/Products")
                ? "text-primary"
                : "text-primary/70 hover:text-primary"
            }`}
          >
            Produktet
            {pathname.startsWith("/Products") && (
              <span className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-accent" />
            )}
          </Link>
          {/* Shporta — Mobile */}
          <QuoteCartLink mobile onClick={closeMenus} />
          {/* Kontakt */}
          <Link
            href="/Contact"
            onClick={closeMenus}
            aria-current={pathname === "/Contact" ? "page" : undefined}
            className={`inline-flex min-h-10 items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
              pathname === "/Contact"
                ? "bg-primary-light text-white"
                : "bg-primary text-white hover:bg-primary-light"
            }`}
          >
            Kontakt
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Mbyll menynë" : "Hap menynë"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => {
            setMobileOpen((previous) => !previous);
            setMobileServicesOpen(false);
          }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border text-primary transition-colors hover:bg-[#E4ECD7] md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-6 w-6"
          >
            {mobileOpen ? (
              <path d="M6 6L18 18M18 6L6 18" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navigimi mobil"
          className="border-t border-[#D7E0CB] bg-[#EEF4E5] px-6 py-5 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {/* Ballina */}
            <Link
              href="/"
              onClick={closeMenus}
              aria-current={pathname === "/" ? "page" : undefined}
              className="rounded-lg px-4 py-3 font-medium text-primary transition-colors hover:bg-[#E4ECD7]"
            >
              Ballina
            </Link>

            {/* Shërbimet */}
            <div className="flex items-center">
              <Link
                href="/Services"
                onClick={closeMenus}
                aria-current={
                  pathname.startsWith("/Services") ? "page" : undefined
                }
                className="flex-1 rounded-lg px-4 py-3 font-medium text-primary transition-colors hover:bg-[#E4ECD7]"
              >
                Shërbimet
              </Link>

              <button
                type="button"
                aria-label="Shfaq shërbimet"
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-menu"
                onClick={() => setMobileServicesOpen((previous) => !previous)}
                className="rounded-lg p-3 text-primary transition-colors hover:bg-[#E4ECD7]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className={`h-5 w-5 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>

            {/* Mobile services dropdown */}
            {mobileServicesOpen && (
              <div
                id="mobile-services-menu"
                className="max-h-72 space-y-1 overflow-y-auto rounded-lg bg-[#E4ECD7] py-2"
              >
                <Link
                  href="/Services"
                  onClick={closeMenus}
                  className="block px-6 py-2.5 text-sm font-semibold text-primary hover:bg-white/60"
                >
                  Të gjitha shërbimet
                </Link>

                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/Services#${service.id}`}
                    onClick={closeMenus}
                    className="block px-6 py-2.5 text-sm text-primary/80 transition-colors hover:bg-white/60 hover:text-primary"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}

            {/* Produktet */}
            <Link
              href="/Products"
              onClick={closeMenus}
              aria-current={
                pathname.startsWith("/Products") ? "page" : undefined
              }
              className="rounded-lg px-4 py-3 font-medium text-primary transition-colors hover:bg-[#E4ECD7]"
            >
              Produktet
            </Link>
            {/* Shporta — NEW */}
            <QuoteCartLink onClick={closeMenus} />
            {/* Kontakt */}
            <Link
              href="/Contact"
              onClick={closeMenus}
              aria-current={pathname === "/Contact" ? "page" : undefined}
              className="mt-3 rounded-lg bg-primary px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Kontakt
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
