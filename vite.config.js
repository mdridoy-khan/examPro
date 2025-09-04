import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          colors: {
            primary: "#ECFAE5",
            secondary: "#DDF6D2",
            tertiary: "#CAE8BD",
            quaternary: "#B0DB9C",
            dark: "#333333",
          },
          fontFamily: {
            roboto: ["Roboto", "sans-serif"],
            lato: ["Lato", "sans-serif"],
          },
        },
      },
    }),
  ],
});
