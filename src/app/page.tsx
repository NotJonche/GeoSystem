import type { Metadata } from "next";
import Link from "next/link";

import HeroBackground from "@/components/HeroBackground";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: {
    absolute: "GeoSystem | Gjeodezi, Kadastër dhe Pajisje Gjeodezike",
  },
  description:
    "GeoSystem ofron shërbime gjeodezike, kadastrale, topografike dhe pajisje profesionale të matjeve në Kosovë.",
};

const featuredServices = [
  {
    id: "matje-gjeodezike",
    number: "01",
    description:
      "Përcaktimi i koordinatave, distancave, lartësive dhe karakteristikave gjeometrike të terrenit.",
  },
  {
    id: "rilevime-topografike",
    number: "02",
    description:
      "Matje dhe paraqitje e relievit dhe elementeve ekzistuese për projektim dhe planifikim.",
  },
  {
    id: "ndarje-parcelash",
    number: "03",
    description:
      "Matje dhe dokumentacion teknik për ndarjen e parcelave dhe organizimin e pronës.",
  },
  {
    id: "piketime",
    number: "04",
    description:
      "Bartja e koordinatave dhe pozicioneve të projektit në terren për realizimin e punimeve.",
  },
  {
    id: "projekte-infrastrukturore",
    number: "05",
    description:
      "Matje dhe mbështetje gjeodezike për rrugë, rrjete teknike dhe projekte infrastrukturore.",
  },
  {
    id: "dokumentacion-as-built",
    number: "06",
    description:
      "Dokumentim i pozicionit dhe dimensioneve reale të elementeve pas realizimit të punimeve.",
  },
].map((item) => {
  const service = services.find((entry) => entry.id === item.id);

  return {
    ...item,
    title: service?.title ?? item.id,
  };
});

const experienceStats = [
  {
    value: "~10",
    unit: "vite",
    title: "Përvojë profesionale",
    description: "Përvojë e fituar në Gjermani",
  },
  {
    value: "18+",
    unit: "km",
    title: "Rrjete gjeodezike",
    description: "Përvojë në realizimin e rrjeteve",
  },
  {
    value: "25",
    unit: "km",
    title: "Projekte infrastrukturore",
    description: "Përvojë në projekte infrastrukturore",
  },
  {
    value: "~70",
    unit: "km",
    title: "Rrjete kanalizimi",
    description: "Matje dhe dokumentim teknik",
  },
  {
    value: "7",
    unit: "",
    title: "Anëtarë ekipi",
    description: "Përvojë në udhëheqjen e ekipeve deri në 7 persona",
  },
];

const workSteps = [
  {
    number: "01",
    title: "Kuptojmë kërkesën",
    description:
      "Shqyrtojmë nevojat e klientit, dokumentacionin ekzistues dhe qëllimin e matjeve.",
  },
  {
    number: "02",
    title: "Planifikojmë punën",
    description:
      "Përcaktojmë metodën e matjes dhe hapat teknikë sipas karakteristikave të projektit.",
  },
  {
    number: "03",
    title: "Realizojmë matjet",
    description:
      "Kryejmë matjet në terren, duke i kushtuar rëndësi kontrollit dhe dokumentimit të të dhënave.",
  },
  {
    number: "04",
    title: "Përgatisim rezultatet",
    description:
      "Përpunojmë të dhënat dhe përgatisim dokumentacionin teknik sipas kërkesës.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* ============================================
            01 — HERO
        ============================================ */}
        <section className="relative isolate overflow-hidden bg-background">
          <HeroBackground />

          <div className="relative mx-auto flex min-h-[670px] max-w-7xl items-center px-6 py-24 lg:min-h-[760px] lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-8 inline-flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-light sm:text-sm">
                  GEOSYSTEM · KOSOVË
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight text-primary sm:text-6xl lg:text-7xl">
                Përvojë ndërkombëtare.
                <span className="mt-3 block text-[#748C39]">
                  Saktësi në çdo matje.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Nga matjet kadastrale te projektet infrastrukturore, në
                GeoSystem ndërthurim përvojën profesionale të fituar në Gjermani
                me teknologjinë moderne të matjeve për të ofruar zgjidhje
                gjeodezike në Kosovë.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/Services"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
                >
                  Shërbimet tona
                  <span aria-hidden="true">→</span>
                </Link>

                <Link
                  href="/Contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-primary/25 bg-white/80 px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-white"
                >
                  Na kontaktoni
                </Link>
              </div>

              <div className="mt-16 flex items-center gap-5">
                <div
                  aria-hidden="true"
                  className="h-px w-12 shrink-0 bg-accent"
                />

                <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted sm:text-sm">
                  Gjeodezi · Kadastër · Infrastrukturë
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            02 — SERVICES
        ============================================ */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="px-6 py-20 lg:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  Çfarë ofrojmë
                </p>

                <h2
                  id="services-heading"
                  className="mt-4 text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl"
                >
                  Zgjidhje gjeodezike për
                  <span className="block text-primary-light">
                    çdo fazë të projektit.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
                  Ofrojmë shërbime gjeodezike për pronarë, investitorë, kompani
                  ndërtimore dhe profesionistë të fushës. Nga matjet e parcelave
                  te punët infrastrukturore, synojmë që çdo projekt të
                  mbështetet në të dhëna të sakta dhe dokumentacion teknik të
                  qartë.
                </p>
              </div>

              <Link
                href="/Services"
                className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold text-primary transition-colors hover:text-primary-light"
              >
                Të gjitha shërbimet
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/Services/${service.id}`}
                  className="group flex min-h-[265px] flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-semibold tracking-[0.15em] text-accent">
                      {service.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF4E5] text-lg text-primary transition-colors group-hover:bg-primary group-hover:text-white"
                    >
                      ↗
                    </span>
                  </div>

                  <div className="mt-auto pt-9">
                    <h3 className="text-xl font-semibold tracking-tight text-primary">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            03 — ABOUT GEOSYSTEM
        ============================================ */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="bg-[#EEF4E5] px-6 py-20 lg:px-8 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Rreth GeoSystem
              </p>

              <h2
                id="about-heading"
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl"
              >
                Përvoja jonë fillon në Gjermani.
                <span className="mt-3 block text-primary-light">
                  E ardhmja jonë ndërtohet në Kosovë.
                </span>
              </h2>

              <div className="mt-8 space-y-5 text-base leading-8 text-muted">
                <p>
                  GeoSystem është ndërtuar mbi afro një dekadë përvojë
                  profesionale të fituar në Gjermani, në fushën e gjeodezisë dhe
                  projekteve infrastrukturore.
                </p>

                <p>
                  Kjo përvojë përfshin punë në infrastrukturë rrugore dhe
                  hekurudhore, realizimin e rrjeteve gjeodezike, dokumentimin
                  teknik dhe udhëheqjen e ekipeve profesionale.
                </p>

                <p>
                  Sot, këtë përvojë e sjellim në Kosovë me synimin për të ofruar
                  shërbime të besueshme, organizim profesional dhe zgjidhje që
                  mbështeten në teknologjinë moderne.
                </p>
              </div>

              <Link
                href="/Contact"
                className="mt-9 inline-flex items-center gap-3 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
              >
                Njihuni me GeoSystem
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* About visual */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl bg-primary p-8 text-white shadow-xl sm:p-12">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-200">
                    GEO SYSTEM
                  </p>

                  <span className="text-xs font-semibold text-white/60">
                    KOSOVË
                  </span>
                </div>

                <div className="mt-20 sm:mt-28">
                  <p className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                    ~10
                  </p>

                  <p className="mt-3 text-xl font-semibold text-lime-200">
                    Vite përvojë profesionale
                  </p>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
                    Përvojë ndërkombëtare në matje gjeodezike, projekte
                    inxhinierike dhe infrastrukturë.
                  </p>
                </div>

                <div className="mt-12 border-t border-white/20 pt-6">
                  <p className="text-sm font-medium text-white/80">
                    Nga përvoja në Gjermani, te shërbimet në Kosovë.
                  </p>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute -bottom-5 -right-3 hidden h-24 w-24 rounded-2xl border-2 border-accent/40 lg:block"
              />
            </div>
          </div>
        </section>

        {/* ============================================
            04 — EXPERIENCE STATISTICS
        ============================================ */}
        <section
          aria-labelledby="experience-heading"
          className="px-6 py-20 lg:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Ekspertiza jonë
              </p>

              <h2
                id="experience-heading"
                className="mt-4 text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl"
              >
                Përvojë që mbështetet
                <span className="block text-primary-light">
                  në punë konkrete.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-muted">
                Shifrat e mëposhtme pasqyrojnë përvojën profesionale të fituar
                në Gjermani, mbi të cilën është ndërtuar GeoSystem.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {experienceStats.map((stat) => (
                <div
                  key={stat.title}
                  className="rounded-2xl border border-border bg-white p-8"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-semibold tracking-tight text-primary-light sm:text-5xl">
                      {stat.value}
                    </span>

                    {stat.unit && (
                      <span className="text-lg font-semibold text-accent">
                        {stat.unit}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-primary">
                    {stat.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted">
                    {stat.description}
                  </p>
                </div>
              ))}

              <div className="flex flex-col justify-center rounded-2xl bg-[#E5EDD9] p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary-light">
                  Përvoja jonë
                </p>

                <p className="mt-4 text-xl font-semibold leading-8 text-primary">
                  Njohuri të fituara në terren. Përkushtim për projektet e
                  ardhshme.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            05 — EQUIPMENT
        ============================================ */}
        <section
          id="equipment"
          aria-labelledby="equipment-heading"
          className="bg-[#EEF4E5] px-6 py-20 lg:px-8 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Teknologji dhe pajisje
              </p>

              <h2
                id="equipment-heading"
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl"
              >
                Teknologji moderne
                <span className="block text-primary-light">
                  për profesionistët e matjeve.
                </span>
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-muted">
                <p>
                  Përveç shërbimeve gjeodezike, po zhvillojmë aktivitetin tonë
                  edhe në furnizimin me pajisje profesionale të matjeve.
                </p>

                <p>
                  Përmes bashkëpunimit me AlphaGeo, synojmë t&apos;u ofrojmë
                  profesionistëve qasje në pajisje moderne dhe zgjidhje të
                  përshtatura me kërkesat e punës në terren.
                </p>

                <p>
                  Në katalogun tonë mund të eksploroni pajisje GNSS/RTK dhe
                  instrumente të tjera gjeodezike, të shqyrtoni informacionin e
                  produkteve dhe të kërkoni ofertë.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/Products"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
                >
                  Eksploro produktet
                  <span aria-hidden="true">→</span>
                </Link>

                <Link
                  href="/Quote"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-primary/25 px-7 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white"
                >
                  Kërko ofertë
                </Link>
              </div>
            </div>

            {/* Equipment feature card */}
            <div className="overflow-hidden rounded-3xl bg-primary p-8 text-white sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-200">
                Pajisje profesionale
              </p>

              <h3 className="mt-8 max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Nga zgjedhja e pajisjes te kërkesa për ofertë.
              </h3>

              <div className="mt-12 space-y-7">
                <div className="flex items-start gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-sm font-semibold">
                    01
                  </span>

                  <div>
                    <h4 className="font-semibold">Eksploroni katalogun</h4>

                    <p className="mt-2 text-sm leading-7 text-white/70">
                      Shikoni pajisjet dhe informacionin teknik të disponueshëm.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/15 pt-7">
                  <div className="flex items-start gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-sm font-semibold">
                      02
                    </span>

                    <div>
                      <h4 className="font-semibold">Zgjidhni produktet</h4>

                      <p className="mt-2 text-sm leading-7 text-white/70">
                        Shtoni pajisjet që ju interesojnë në listën e kërkesës.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/15 pt-7">
                  <div className="flex items-start gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-sm font-semibold">
                      03
                    </span>

                    <div>
                      <h4 className="font-semibold">Kërkoni ofertë</h4>

                      <p className="mt-2 text-sm leading-7 text-white/70">
                        Dërgoni kërkesën dhe na tregoni nevojat tuaja.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/Products"
                className="mt-12 inline-flex items-center gap-3 text-sm font-semibold text-lime-200 transition-colors hover:text-white"
              >
                Shiko pajisjet
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================
            06 — WORK PROCESS
        ============================================ */}
        <section
          id="process"
          aria-labelledby="process-heading"
          className="px-6 py-20 lg:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Mënyra jonë e punës
              </p>

              <h2
                id="process-heading"
                className="mt-4 text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl"
              >
                Çdo projekt fillon
                <span className="block text-primary-light">
                  me një qasje profesionale.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-muted">
                Nga kërkesa fillestare deri te dokumentacioni përfundimtar, puna
                gjeodezike kërkon planifikim, kontroll dhe komunikim të qartë.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {workSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-border bg-white p-7"
                >
                  <span className="text-4xl font-semibold tracking-tight text-[#A9BE8A]">
                    {step.number}
                  </span>

                  <div className="mt-8 h-px w-full bg-border" />

                  <h3 className="mt-7 text-lg font-semibold text-primary">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            07 — CONTACT CTA
        ============================================ */}
        <section className="px-6 pb-20 lg:px-8 lg:pb-28">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-8 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-200">
                  Le të bashkëpunojmë
                </p>

                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Projekti juaj meriton
                  <span className="block text-lime-200">
                    një fillim të saktë.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
                  Keni nevojë për matje gjeodezike, dokumentacion kadastral apo
                  pajisje profesionale?{" "}
                  <p>
                    {" "}
                    Na kontaktoni për të diskutuar kërkesën tuaj dhe hapat e
                    mëtejshëm.
                  </p>
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/Contact"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-white px-8 py-4 text-sm font-semibold text-primary transition-colors hover:bg-[#EEF4E5]"
                >
                  Na kontaktoni
                  <span aria-hidden="true">→</span>
                </Link>

                <Link
                  href="/Quote"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Kërko ofertë
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
