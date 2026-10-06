import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  build: { outDir: "build" },
  // CommonJS packages that Node can't import as components during the prerender; bundling them fixes the interop.
  ssr: { noExternal: ["react-google-recaptcha", "react-async-script"] },
});
