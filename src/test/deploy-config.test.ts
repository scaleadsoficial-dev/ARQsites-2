import { readFileSync } from "node:fs";
import { describe, expect, it, vi } from "vitest";

vi.mock("@lovable.dev/vite-tanstack-config", () => ({
  defineConfig: (config: unknown) => config,
}));

import config from "../../vite.config";

describe("static Netlify deployment", () => {
  it("writes public files to the exact directory Netlify publishes", () => {
    const netlify = readFileSync(`${process.cwd()}/netlify.toml`, "utf8");
    const publish = netlify.match(/^\s*publish\s*=\s*"([^"]+)"/m)?.[1];
    expect(publish).toBe("dist/client");
    expect(config).toMatchObject({
      nitro: {
        preset: "cloudflare-module",
        output: { dir: "dist", serverDir: "dist/server", publicDir: publish },
      },
      tanstackStart: {
        pages: [{ path: "/" }],
        prerender: { enabled: true, autoStaticPathsDiscovery: false },
      },
    });
  });
});