export type ServiceImage = {
  src: string;
  alt: string;
} | null;

export type ServiceContent = {
  heading: string;
  introduction: string[];
  firstImage: ServiceImage;
  middleHeading: string;
  middleParagraphs: string[];
  secondImage: ServiceImage;
  finalHeading: string;
  finalParagraphs: string[];
};

export const serviceContent: Record<string, ServiceContent> = {
  "matje-gjeodezike": {
    heading: "Çfarë janë matjet gjeodezike?",

    introduction: [
      "Matjet gjeodezike janë matje teknike që përdoren për përcaktimin e pozicionit dhe karakteristikave gjeometrike të pikave në terren. Nëpërmjet tyre përcaktohen koordinatat, distancat, lartësitë dhe elemente të tjera të nevojshme për përshkrimin e një sipërfaqeje apo objekti.",

      "Këto matje shërbejnë si bazë për punë kadastrale, rilevime topografike, planifikim hapësinor dhe përgatitje të dokumentacionit teknik. Lloji dhe shtrirja e matjeve përcaktohen në varësi të qëllimit të punës dhe karakteristikave të terrenit.",
    ],

    firstImage: null,

    middleHeading: "Si realizohen matjet?",

    middleParagraphs: [
      "Procesi fillon me identifikimin e zonës që duhet matur dhe përcaktimin e pikave relevante në terren. Sipas kërkesave të punës, matjet mund të kryhen me instrumente gjeodezike, si stacionet totale dhe pajisjet GNSS, duke përdorur metodën e përshtatshme për kushtet dhe saktësinë e kërkuar.",

      "Gjatë punës regjistrohen të dhënat për pozicionin e pikave, distancat, diferencat e lartësive dhe elementet e tjera që kërkohen. Më pas, të dhënat kontrollohen dhe përpunohen për të krijuar një paraqitje të qartë të gjendjes së matur.",

      "Në varësi të qëllimit të matjes, rezultatet mund të përdoren për përgatitjen e planeve, skicave, tabelave të koordinatave ose dokumentacionit tjetër gjeodezik. Përmbajtja e dokumentacionit varet nga kërkesat teknike dhe procedura për të cilën nevojiten matjet.",
    ],

    secondImage: null,

    finalHeading: "Pse janë të rëndësishme?",

    finalParagraphs: [
      "Matjet gjeodezike sigurojnë informacion hapësinor që ndihmon në kuptimin e pozicionit, përmasave dhe konfigurimit të një prone ose terreni. Ato krijojnë një bazë teknike për planifikim dhe për procedura që kërkojnë të dhëna të matjes.",

      "Të dhënat e sakta dhe të dokumentuara ndihmojnë në identifikimin e dallimeve ndërmjet gjendjes së matur dhe dokumentacionit ekzistues. Kur kërkohet, ato mund të shërbejnë edhe si pikënisje për punë të tjera gjeodezike.",
    ],
  },
};
