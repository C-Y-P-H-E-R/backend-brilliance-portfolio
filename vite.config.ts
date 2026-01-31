import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  const plugins = [react()];

  // ✅ Load lovable-tagger ONLY in development
  if (mode === "development") {
    const { componentTagger } = require("lovable-tagger");
    plugins.push(componentTagger());
  }

  return {
    base: "/backend-brilliance-portfolio/",
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
