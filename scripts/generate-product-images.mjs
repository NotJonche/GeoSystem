import { readdir, mkdir, writeFile } from "node:fs/promises";

import path from "node:path";

const projectRoot = process.cwd();

const imagesDirectory = path.join(projectRoot, "public", "images", "products");

const outputFile = path.join(
  projectRoot,
  "src",
  "data",
  "productImages.generated.json",
);

const allowedExtensions = new Set([".webp", ".png", ".jpg", ".jpeg", ".avif"]);

const imageOrder = ["front", "side", "back", "rear", "top", "bottom"];

async function getDirectories(directory) {
  try {
    const entries = await readdir(directory, {
      withFileTypes: true,
    });

    return entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort();
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

function sortImages(first, second) {
  const firstName = path.parse(first).name.toLowerCase();
  const secondName = path.parse(second).name.toLowerCase();

  const firstIndex = imageOrder.indexOf(firstName);
  const secondIndex = imageOrder.indexOf(secondName);

  const firstPriority = firstIndex === -1 ? imageOrder.length : firstIndex;

  const secondPriority = secondIndex === -1 ? imageOrder.length : secondIndex;

  return (
    firstPriority - secondPriority ||
    first.localeCompare(second, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  );
}

async function generateProductImages() {
  const result = {};
  let totalPhotos = 0;

  const categories = await getDirectories(imagesDirectory);

  for (const category of categories) {
    const categoryDirectory = path.join(imagesDirectory, category);

    const productFolders = await getDirectories(categoryDirectory);

    for (const slug of productFolders) {
      const productDirectory = path.join(categoryDirectory, slug);

      const entries = await readdir(productDirectory, { withFileTypes: true });

      const filenames = entries
        .filter(
          (entry) =>
            entry.isFile() &&
            allowedExtensions.has(path.extname(entry.name).toLowerCase()),
        )
        .map((entry) => entry.name)
        .sort(sortImages);

      const key = `${category}/${slug}`;

      result[key] = filenames.map(
        (filename) =>
          `/images/products/${category}/${slug}/${encodeURIComponent(filename)}`,
      );

      totalPhotos += filenames.length;
    }
  }

  await mkdir(path.dirname(outputFile), {
    recursive: true,
  });

  await writeFile(outputFile, JSON.stringify(result, null, 2) + "\n", "utf8");

  console.log(
    `GeoSystem: Found ${totalPhotos} images ` +
      `across ${Object.keys(result).length} product folders.`,
  );
}

generateProductImages().catch((error) => {
  console.error("Image generation failed:", error);
  process.exitCode = 1;
});
