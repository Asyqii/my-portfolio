import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // lucide-react is intentionally pre-bundled (Vite's default). Excluding it
  // makes the dev server serve ~1700 separate icon modules, and privacy
  // extensions block some of those filenames (e.g. fingerprint.js) outright.
});
