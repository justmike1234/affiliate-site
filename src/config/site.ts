// Central site configuration. Brand, analytics, and affiliate program values
// are set here only — template code never needs editing to change them.
//
// NOTE (placeholder): JAN-3 has not landed yet, so the brand name, affiliate
// program entry, and disclosure wording below are placeholders. When Nia
// delivers the niche pick and integration notes on JAN-3, update this file.
// The publishing guide for Wren explains which values matter.

export const SITE = {
  // PLACEHOLDER brand — rename when JAN-3 picks the niche.
  name: "The Clear Pick",
  tagline: "Research-backed picks, plainly tested.",
  description:
    "Independent buying guides with a real point of view. We research what we recommend, say what we found, and never let commissions write our picks.",
  locale: "en_US",
  defaultOgImage: "/og-default.png",
};

// PLACEHOLDER FTC affiliate disclosure wording until Nia supplies approved
// wording on JAN-3. Rendered by the layout on every page that carries
// affiliate links — never written per-article.
export const AFFILIATE_DISCLOSURE =
  "If you buy through links on this page, we may earn an affiliate commission at no extra cost to you. Commissions never influence what we recommend or how we rank our picks.";

export const AFFILIATE_DISCLOSURE_SHORT =
  "We earn commissions from qualifying purchases made through links on this site.";

export interface AffiliateProgram {
  id: string;
  name: string;
  // Base click-tracking URL of the program (no tracking params).
  baseUrl: string;
  // Site-wide tracking parameters Nia specifies for this program.
  trackingParams: Record<string, string>;
}

// PLACEHOLDER program config until JAN-3 (Nia) delivers the real programs.
// The AffiliateLink component is built against this interface, so wiring in
// the real values is a change to this object only. Articles always reference
// programs by id here — nobody ever hand-writes a raw affiliate URL.
export const AFFILIATE_PROGRAMS: Record<string, AffiliateProgram> = {
  example: {
    id: "example",
    name: "Example Program (placeholder)",
    baseUrl: "https://track.example-program.com/click",
    trackingParams: {
      sid: "clearpick",
      cam: "article",
    },
  },
};
