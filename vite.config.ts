// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact, tailwindcss,
// tsConfigPaths, nitro (build-only, cloudflare-module target), @ alias etc. Do NOT add them manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Fixa o preset: evita que a Netlify troque automaticamente para o preset "netlify",
  // que quebra a pré-renderização. A saída estática fica em dist/client.
  nitro: { preset: "cloudflare-module" },
  tanstackStart: {
    server: { entry: "server" },
    // Página única pré-renderizada como HTML estático para hospedagem na Netlify.
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
