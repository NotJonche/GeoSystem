
import HeroBackground from "@/components/HeroBackground";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section
          id="home"
          className="relative isolate overflow-hidden bg-background text-primary"
        >
          <HeroBackground />

          <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-8 text-sm font-semibold uppercase tracking-[0.22em] text-primary-light">
                GeoSystem · Kosovë
              </p>

              <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                Saktësi në çdo
                <span className="block text-[#748c39]">
                  matje.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-muted sm:text-xl">
                Shërbime gjeodezike për prona,
                parcela dhe terrene.
              </p>

              <div className="mt-12 flex items-center gap-5">
                <span
                  aria-hidden="true"
                  className="h-px w-12 bg-accent"
                />

                <p className="text-sm tracking-wide text-muted">
                  Gjeodezi · Kadastër · Topografi
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-8 bg-background px-6 py-20 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
              Rreth GeoSystem
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              Shërbime gjeodezike dhe
              mbështetje kadastrale.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              GeoSystem është kompani që operon në Kosovë në
              fushën e gjeodezisë dhe shërbimeve kadastrale.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
