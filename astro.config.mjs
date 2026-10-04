import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// Deployment targets are chosen with environment variables so the same code
// deploys anywhere without template edits:
//
//   PUBLIC_SITE_ORIGIN  absolute origin of the final host (no trailing slash)
//   PUBLIC_BASE_PATH    path prefix when not on a domain root, e.g. "/affiliate-site"
//
// Defaults match the interim GitHub Pages deployment. When the owner-gated
// Cloudflare Pages + custom domain handoff lands (see the JAN-4 handoff
// document), set the repo variables to the real domain and rebuild.
const origin = (process.env.PUBLIC_SITE_ORIGIN || "https://justmike1234.github.io").replace(/\/+$/, "");
const basePath = process.env.PUBLIC_BASE_PATH || "/affiliate-site";

export default defineConfig({
  site: origin,
  base: basePath,
  trailingSlash: "ignore",
  integrations: [mdx()],
  build: {
    inlineStylesheets: "auto",
  },
});
