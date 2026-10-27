import { getProductCategory } from "@/data/productCategories";
import generatedProductImages from "@/data/productImages.generated.json";

export type Product = {
  slug: string;
  name: string;
  manufacturer: string;
  categoryId: string;
  category: string;
  description: string;
  sourceUrl: string;
  images: string[];
  specifications: Record<string, string>;
  availability: "on-request" | "in-stock" | "out-of-stock";
  published: boolean;
};

type ProductEntry = {
  slug: string;
  name: string;
  categoryId: string;
  description?: string;
  sourceUrl?: string;
  images?: string[];
  specifications?: Record<string, string>;
  availability?: Product["availability"];
  published?: boolean;
};

// Map catalog category IDs to actual image folder names.
const productImageFolders: Record<string, string> = {
  "gnss-rtk": "gnss",
  lidar: "lidar",
  "total-stations-levels": "total-stations-levels",
  hydro: "hydro",
  geophysical: "geophysical",
  reference: "reference",
  controllers: "controllers",
  monitoring: "monitoring",
  "machine-control": "machine-control",
  accessories: "accessories",
};

// Static JSON can safely be imported by server and client code.
// No Node.js filesystem access happens in the browser.
const productImageManifest: Record<string, string[]> = generatedProductImages;

// Returns ALL discovered photographs for a product.
function getDefaultProductImages(entry: ProductEntry): string[] {
  const folder = productImageFolders[entry.categoryId];

  if (!folder) {
    return [];
  }

  const key = `${folder}/${entry.slug}`;

  return productImageManifest[key] ?? [];
}

function createProduct(entry: ProductEntry): Product {
  const category = getProductCategory(entry.categoryId);

  if (!category) {
    throw new Error(`Unknown product category: ${entry.categoryId}`);
  }

  return {
    slug: entry.slug,
    name: entry.name,
    manufacturer: "AlphaGeo",

    categoryId: entry.categoryId,
    category: category.name,

    description:
      entry.description ??
      "Për më shumë informacione dhe specifikime teknike, kontaktoni GeoSystem.",

    sourceUrl: entry.sourceUrl ?? category.manufacturerUrl,

    // Automatically loads front, side, back, top, etc.
    images: entry.images ?? getDefaultProductImages(entry),

    specifications: entry.specifications ?? {},

    availability: entry.availability ?? "on-request",
    published: entry.published ?? true,
  };
}

const entries: ProductEntry[] = [
  // ==========================================
  // 01 — GNSS / RTK RECEIVERS (19)
  // ==========================================

  {
    slug: "matrix-dm",
    name: "Matrix DM",
    categoryId: "gnss-rtk",
  },

  {
    slug: "matrix-x",
    name: "Matrix X",
    categoryId: "gnss-rtk",

    description:
      "Matrix X është marrës profesional GNSS/RTK me laser " +
      "automatik të rregullueshëm, kamerë HD 5 MP, " +
      "kompensim të pjerrësisë me IMU dhe funksion " +
      "piketimi me realitet të shtuar (AR). " +
      "Laseri mund të rregullohet për matje të pikave " +
      "në terren pa ndryshuar vazhdimisht pozicionin " +
      "e marrësit.",

    sourceUrl:
      "https://www.alphageo-info.com/product/the-industry-s-first-automatic-laser-gnss-receiver",

    specifications: {
      "Kanalet GNSS": "1408",
      "Rregullimi automatik i laserit": "75°",
      "Kompensimi i pjerrësisë IMU": "0–120°",
      Kamera: "5 MP HD",
      Ekrani: '1.47" HD',
      "Memoria e brendshme": "32 GB",
      Bateria: "7000 mAh",
      "Saktësia RTK horizontale": "8 mm + 1 ppm RMS",
      "Saktësia RTK vertikale": "15 mm + 1 ppm RMS",
      "Klasa e mbrojtjes": "IP67",
      Pesha: "1.3 kg",
      Dimensionet: "128 × 128 × 90 mm",
      "Sistemi operativ": "Linux",
      Bluetooth: "5.2",
      "Wi-Fi": "802.11 b/g",
    },
  },

  {
    slug: "matrix-ultra",
    name: "Matrix Ultra",
    categoryId: "gnss-rtk",
  },
  {
    slug: "matrix-vi",
    name: "Matrix VI",
    categoryId: "gnss-rtk",
  },
  {
    slug: "matrix-iii",
    name: "Matrix III",
    categoryId: "gnss-rtk",
  },
  {
    slug: "matrix-iii-lite",
    name: "Matrix III Lite",
    categoryId: "gnss-rtk",
  },
  {
    slug: "matrix-iii-pro",
    name: "Matrix III Pro",
    categoryId: "gnss-rtk",
  },
  {
    slug: "matrix-ii",
    name: "Matrix II",
    categoryId: "gnss-rtk",
  },
  {
    slug: "l100-pro-plus",
    name: "L100 PRO+",
    categoryId: "gnss-rtk",
  },
  {
    slug: "l100-pro",
    name: "L100 PRO",
    categoryId: "gnss-rtk",
  },
  {
    slug: "l2-plus",
    name: "L2 Plus",
    categoryId: "gnss-rtk",
  },
  {
    slug: "geopuls",
    name: "GeoPuls",
    categoryId: "gnss-rtk",
  },

  // One-photo product: no gallery navigation.
  {
    slug: "netbox2",
    name: "NetBOX2",
    categoryId: "gnss-rtk",
  },

  {
    slug: "matrix-ii-lite",
    name: "Matrix II Lite",
    categoryId: "gnss-rtk",
  },
  {
    slug: "l300",
    name: "L300",
    categoryId: "gnss-rtk",
  },
  {
    slug: "matrix-x-non-uhf",
    name: "Matrix X (non-UHF)",
    categoryId: "gnss-rtk",
  },
  {
    slug: "matrix-mi-non-uhf",
    name: "Matrix Mi (non-UHF)",
    categoryId: "gnss-rtk",
  },
  {
    slug: "matrix-iii-non-uhf",
    name: "Matrix III (non-UHF)",
    categoryId: "gnss-rtk",
  },
  {
    slug: "matrix-ii-non-uhf",
    name: "Matrix II (non-UHF)",
    categoryId: "gnss-rtk",
  },

  // ==========================================
  // 02 — LIDAR SCANNERS (2)
  // ==========================================

  {
    slug: "falcon-x",
    name: "Falcon X",
    categoryId: "lidar",
  },
  {
    slug: "falcon-x-non-uhf",
    name: "Falcon X (non-UHF)",
    categoryId: "lidar",
  },

  // ==========================================
  // 03 — TOTAL STATIONS AND LEVELS (8)
  // ==========================================

  {
    slug: "alpha-r1",
    name: "ALPHA R1",
    categoryId: "total-stations-levels",
  },
  {
    slug: "alpha-al03",
    name: "ALPHA AL03",
    categoryId: "total-stations-levels",
  },
  {
    slug: "alpha-y",
    name: "ALPHA Y",
    categoryId: "total-stations-levels",
  },
  {
    slug: "alpha-x-plus",
    name: "ALPHA X+",
    categoryId: "total-stations-levels",
  },
  {
    slug: "alpha-x",
    name: "ALPHA X",
    categoryId: "total-stations-levels",
  },
  {
    slug: "alpha-z",
    name: "ALPHA Z",
    categoryId: "total-stations-levels",
  },
  {
    slug: "alpha-al32",
    name: "ALPHA AL32",
    categoryId: "total-stations-levels",
  },
  {
    slug: "alpha-al45",
    name: "ALPHA AL45",
    categoryId: "total-stations-levels",
  },

  // ==========================================
  // 04 — HYDROGRAPHIC EQUIPMENT (5)
  // ==========================================

  {
    slug: "alpha-ark-n",
    name: "ALPHA ARK-N",
    categoryId: "hydro",
  },

  // One-photo product.
  {
    slug: "alpha-ark",
    name: "ALPHA ARK",
    categoryId: "hydro",
  },

  {
    slug: "alpha-ark-s",
    name: "ALPHA ARK S",
    categoryId: "hydro",
  },
  {
    slug: "alpha-tg25",
    name: "ALPHA TG25",
    categoryId: "hydro",
  },
  {
    slug: "alpha-es50",
    name: "ALPHA ES50",
    categoryId: "hydro",
  },

  // ==========================================
  // 05 — GEOPHYSICAL EQUIPMENT (3)
  // ==========================================

  {
    slug: "gyro-70",
    name: "GYRO 70",
    categoryId: "geophysical",
  },
  {
    slug: "alpha-dt3",
    name: "ALPHA DT3",
    categoryId: "geophysical",
  },

  // One-photo product.
  {
    slug: "alpha-d200",
    name: "Alpha D200",
    categoryId: "geophysical",
  },

  // ==========================================
  // 06 — GNSS REFERENCE SYSTEMS (1)
  // ==========================================

  {
    slug: "alphageo-lr9",
    name: "ALPHAGEO LR9",
    categoryId: "reference",
  },

  // ==========================================
  // 07 — DATA CONTROLLERS (2)
  // ==========================================

  {
    slug: "a-tab",
    name: "A-Tab",
    categoryId: "controllers",
  },
  {
    slug: "s60iii",
    name: "S60III",
    categoryId: "controllers",
  },

  // ==========================================
  // 08 — MONITORING SYSTEMS (1)
  // ==========================================

  {
    slug: "colibri-ii",
    name: "COLIBRI II",
    categoryId: "monitoring",
  },

  // ==========================================
  // 09 — MACHINE CONTROL (1)
  // ==========================================

  {
    slug: "alpha-dg1",
    name: "ALPHA DG1",
    categoryId: "machine-control",
  },

  // ==========================================
  // 10 — ACCESSORIES AND RADIOS (2)
  // ==========================================

  {
    slug: "hx-du8602t",
    name: "HX-DU8602T",
    categoryId: "accessories",
  },
  {
    slug: "hx-du8616d",
    name: "HX-DU8616D",
    categoryId: "accessories",
  },
];

// All products in the internal catalog.
export const products: Product[] = entries.map(createProduct);

// Only published products are visible to customers.
export const publishedProducts = products.filter(
  (product) => product.published,
);

// Internal product lookup.
export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

// Public product lookup.
export function getPublishedProductBySlug(slug: string) {
  return publishedProducts.find((product) => product.slug === slug);
}
