import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(process.cwd(), "src/components"),
      "@pages": path.resolve(process.cwd(), "src/pages"),
      "@shared": path.resolve(process.cwd(), "src/components/shared"),
      "@lib": path.resolve(process.cwd(), "src/lib"),
      "@hooks": path.resolve(process.cwd(), "src/hooks"),
      "@routes": path.resolve(process.cwd(), "src/routes"),
      "@layout": path.resolve(process.cwd(), "src/layout"),
      "@interfaces": path.resolve(process.cwd(), "src/interfaces"),
    },
  },
});
