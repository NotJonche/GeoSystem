
"use client";

import { useSyncExternalStore } from "react";
import { publishedProducts } from "@/data/products";

export type QuoteCartItem = {
  slug: string;
  quantity: number;
};

const STORAGE_KEY = "geosystem-quote-cart-v1";
const CHANGE_EVENT = "geosystem-quote-cart-change";
const MAX_PRODUCTS = 20;

const EMPTY_CART: QuoteCartItem[] = [];

let cachedRaw: string | null | undefined;
let cachedCart: QuoteCartItem[] = EMPTY_CART;

const validSlugs = new Set(
  publishedProducts.map((product) => product.slug)
);

function parseCart(raw: string | null): QuoteCartItem[] {
  if (!raw) return EMPTY_CART;

  try {
    const value: unknown = JSON.parse(raw);

    if (!Array.isArray(value)) return EMPTY_CART;

    const result: QuoteCartItem[] = [];
    const seen = new Set<string>();

    for (const entry of value) {
      if (
        typeof entry !== "object" ||
        entry === null ||
        Array.isArray(entry)
      ) {
        continue;
      }

      const item = entry as Record<string, unknown>;

      if (
        typeof item.slug !== "string" ||
        !validSlugs.has(item.slug) ||
        seen.has(item.slug) ||
        typeof item.quantity !== "number" ||
        !Number.isInteger(item.quantity) ||
        item.quantity < 1 ||
        item.quantity > 99
      ) {
        continue;
      }

      seen.add(item.slug);

      result.push({
        slug: item.slug,
        quantity: item.quantity,
      });

      if (result.length >= MAX_PRODUCTS) break;
    }

    return result.length > 0 ? result : EMPTY_CART;
  } catch {
    return EMPTY_CART;
  }
}

function getSnapshot(): QuoteCartItem[] {
  if (typeof window === "undefined") {
    return EMPTY_CART;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (raw !== cachedRaw) {
      cachedRaw = raw;
      cachedCart = parseCart(raw);
    }

    return cachedCart;
  } catch {
    return EMPTY_CART;
  }
}

function getServerSnapshot(): QuoteCartItem[] {
  return EMPTY_CART;
}

function subscribe(callback: () => void) {
  function onStorage(event: StorageEvent) {
    if (
      event.key === STORAGE_KEY ||
      event.key === null
    ) {
      callback();
    }
  }

  window.addEventListener("storage", onStorage);
  window.addEventListener(CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function saveCart(items: QuoteCartItem[]) {
  if (typeof window === "undefined") return false;

  try {
    const serialized = JSON.stringify(items);
    window.localStorage.setItem(STORAGE_KEY, serialized);

    cachedRaw = serialized;
    cachedCart = items;

    window.dispatchEvent(new Event(CHANGE_EVENT));
    return true;
  } catch {
    return false;
  }
}

export function useQuoteCart() {
  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
}

export function addToQuoteCart(slug: string): boolean {
  if (!validSlugs.has(slug)) return false;

  const items = getSnapshot();
  const existing = items.find((item) => item.slug === slug);

  if (existing) {
    return saveCart(items);
  }

  if (items.length >= MAX_PRODUCTS) return false;

  return saveCart([
    ...items,
    { slug, quantity: 1 },
  ]);
}

export function updateQuoteQuantity(
  slug: string,
  quantity: number
) {
  if (
    !Number.isInteger(quantity) ||
    quantity < 1 ||
    quantity > 99
  ) {
    return false;
  }

  return saveCart(
    getSnapshot().map((item) =>
      item.slug === slug
        ? { ...item, quantity }
        : item
    )
  );
}

export function removeFromQuoteCart(slug: string) {
  return saveCart(
    getSnapshot().filter((item) => item.slug !== slug)
  );
}

export function clearQuoteCart() {
  return saveCart([]);
}
