"use client";

import { useSyncExternalStore } from "react";

// No browser event subscription is needed.
// The year is checked when the page hydrates.
function subscribe() {
  return () => {};
}

function getCurrentYear() {
  return new Date().getFullYear();
}

// Stable value for server rendering.
function getServerYear() {
  return 2026;
}

export default function CopyrightYear() {
  const year = useSyncExternalStore(subscribe, getCurrentYear, getServerYear);

  return <>{year}</>;
}
