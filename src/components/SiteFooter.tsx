
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-3">
          <div>
            <Link
              href="/"
              aria-label="GeoSystem - Home"
              className="inline-flex flex-col leading-none"
            >
              <span className="text-3xl font-extrabold tracking-tight">
                GEO
              </span>
              <span className="mt-1 text-sm font-bold tracking-[0.2em] text-lime-200">
                SYSTEM
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/65">
              Shërbime gjeodezike dhe mbështetje
              kadastrale në Kosovë.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-lime-200">
              Navigimi
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-6 flex flex-col items-start gap-4"
            >
              <Link href="/" className="text-sm text-white/70 hover:text-white">
                Home
              </Link>

              <Link href="/Services" className="text-sm text-white/70 hover:text-white">
                Services
              </Link>

              <Link href="/Contact" className="text-sm text-white/70 hover:text-white">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-lime-200">
              GeoSystem
            </h2>

            <div className="mt-6 space-y-3 text-sm text-white/70">
              <p>Kosovë</p>
              <p>Shërbime Gjeodezike</p>
              <p>Kadastër · Matje · Topografi</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© GeoSystem. Të gjitha të drejtat e rezervuara.</p>
          <p>GeoSystem · Kosovë</p>
        </div>
      </div>
    </footer>
  );
}
