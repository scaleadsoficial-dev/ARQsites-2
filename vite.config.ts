// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact, tailwindcss,
// tsConfigPaths, nitro (build-only, cloudflare-module target), @ alias etc. Do NOT add them manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Fixa também as pastas: fora do Lovable, o Nitro usa outros caminhos por padrão.
  // A Netlify publica somente dist/client; o servidor não entra na publicação estática.
  nitro: {
    preset: "cloudflare-module",
    output: {
      dir: "dist",
      serverDir: "dist/server",
      publicDir: "dist/client",
    },
  },
  tanstackStart: {
    server: { entry: "server" },
    // Página única pré-renderizada como HTML estático para hospedagem na Netlify.
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
