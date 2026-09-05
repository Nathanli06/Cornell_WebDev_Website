"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Reads prefers-reduced-motion without a hydration mismatch.
 *
 * Framer Motion's own useReducedMotion() reflects the real client value
 * on the very first client render, which differs from the server's
 * render for any visitor who actually has the OS preference set,
 * breaking hydration. useSyncExternalStore's getServerSnapshot is the
 * React-sanctioned fix for exactly this class of browser-API read: the
 * server (and the client's hydration pass) sees `false`, then React
 * reconciles to the real value right after mount with no warning.
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
