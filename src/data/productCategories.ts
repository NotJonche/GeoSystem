
export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  manufacturerUrl: string;
};

export const productCategories: ProductCategory[] = [
  {
    id: "gnss-rtk",
    name: "Marrës GNSS / RTK",
    description:
      "Pajisje satelitore për pozicionim dhe matje gjeodezike.",
    manufacturerUrl:
      "https://www.alphageo-info.com/gnss-receiver",
  },
  {
    id: "lidar",
    name: "Skanerë LiDAR",
    description:
      "Pajisje për skanim tredimensional dhe mbledhje të të dhënave hapësinore.",
    manufacturerUrl:
      "https://www.alphageo-info.com/lidar-scanner",
  },
  {
    id: "total-stations-levels",
    name: "Stacione Totale dhe Nivelues",
    description:
      "Instrumente optike dhe elektronike për matje në terren.",
    manufacturerUrl:
      "https://www.alphageo-info.com/Total-Stations-and-Levels",
  },
  {
    id: "hydro",
    name: "Pajisje Hidrografike",
    description:
      "Pajisje për matje hidrografike dhe studime të mjediseve ujore.",
    manufacturerUrl:
      "https://www.alphageo-info.com/hydro-survey",
  },
  {
    id: "geophysical",
    name: "Pajisje Gjeofizike",
    description:
      "Pajisje për detektim dhe matje gjeofizike.",
    manufacturerUrl:
      "https://www.alphageo-info.com/geophysical",
  },
  {
    id: "reference",
    name: "Sisteme Referimi GNSS",
    description:
      "Sisteme dhe marrës për stacione referuese GNSS.",
    manufacturerUrl:
      "https://www.alphageo-info.com/Reference-System",
  },
  {
    id: "controllers",
    name: "Kontrollues Terreni",
    description:
      "Pajisje për mbledhjen dhe menaxhimin e të dhënave në terren.",
    manufacturerUrl:
      "https://www.alphageo-info.com/data-controller",
  },
  {
    id: "monitoring",
    name: "Sisteme Monitorimi",
    description:
      "Instrumente për monitorimin e pozicionit dhe ndryshimeve strukturore.",
    manufacturerUrl:
      "https://www.alphageo-info.com/monitoring-system",
  },
  {
    id: "machine-control",
    name: "Sisteme për Makineri",
    description:
      "Sisteme udhëzuese dhe kontrolli për makineri ndërtimore.",
    manufacturerUrl:
      "https://www.alphageo-info.com/machine-control",
  },
  {
    id: "accessories",
    name: "Aksesorë dhe Radio",
    description:
      "Pajisje ndihmëse dhe sisteme radiokomunikimi për matje.",
    manufacturerUrl:
      "https://www.alphageo-info.com/accessories",
  },
];

export function getProductCategory(id: string) {
  return productCategories.find(
    (category) => category.id === id
  );
}
