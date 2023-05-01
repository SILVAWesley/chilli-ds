import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  external: ["react"],
  format: ["cjs", "esm"],
  minify: true,
  sourcemap: true,
  splitting: true,
  tsconfig: "./tsconfig.json",
});
