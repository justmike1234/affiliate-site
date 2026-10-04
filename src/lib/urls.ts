// URL helpers. Canonical URLs are derived from one origin + one base path so
// there is never a www/apex duplicate split: whatever PUBLIC_SITE_ORIGIN is
// set to at build time is the only canonical host.

export const SITE_ORIGIN = String(import.meta.env.SITE || "").replace(/\/+$/, "");
export const BASE_PATH = String(import.meta.env.BASE_URL || "/");

/** Absolute URL for a site path, handling the deploy base path safely. */
export function absoluteUrl(path: string): string {
  const base = BASE_PATH && BASE_PATH !== "/" ? BASE_PATH.replace(/\/+$/, "") : "";
  let p = path;
  if (base && (p === base || p.startsWith(base + "/"))) {
    p = p.slice(base.length) || "/";
  }
  if (!p.startsWith("/")) p = "/" + p;
  // Directory-style URLs get a trailing slash; files keep theirs.
  if (!/\.[a-z0-9]+$/i.test(p) && !p.endsWith("/")) p = p + "/";
  return `${SITE_ORIGIN}${base}${p}`;
}

/** Path of the current page with the deploy base path stripped. */
export function pagePath(pathname: string): string {
  const base = BASE_PATH && BASE_PATH !== "/" ? BASE_PATH.replace(/\/+$/, "") : "";
  let p = pathname;
  if (base && (p === base || p.startsWith(base + "/"))) p = p.slice(base.length) || "/";
  if (!p.startsWith("/")) p = "/" + p;
  return p;
}

/** Stable campaign identifier for an article path: its slug. */
export function campaignFromPath(pathname: string): string {
  const p = pagePath(pathname).replace(/\/$/, "");
  const slug = p.split("/").pop() || "";
  return slug || "home";
}
