// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import { resolve } from "path";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        "@": resolve("./src"),
        "@public": resolve("./public"),
      },
    },
  },
});
