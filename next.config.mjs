import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";
import { fileURLToPath } from "node:url";

/** @param {string} phase @returns {import('next').NextConfig} */
export default function nextConfig(phase) {
  return {
    // Keep production builds from replacing files used by a running dev server.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
    outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),
  };
}
