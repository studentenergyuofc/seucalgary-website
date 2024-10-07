import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.resolve(process.cwd(), "src/components/app"),
      "@pages": path.resolve(process.cwd(), "src/components/pages"),
      "@shared": path.resolve(process.cwd(), "src/components/shared"),
      "@lib": path.resolve(process.cwd(), "src/lib"),
      "@hooks": path.resolve(process.cwd(), "src/hooks"),
    },
  },
});
