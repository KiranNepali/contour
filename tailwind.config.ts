import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      colors: {
        // yellow
        primary: {
          default: "#FEE600",
          50: "#FFF8B7",
          100: "#FFF6A2",
          200: "#FFF279",
          300: "#FFEF51",
          400: "#FFEB28",
          500: "#FEE600",
          600: "#C6B300",
          700: "#8E8000",
          800: "#564E00",
          900: "#1E1B00",
          950: "#020100",
        },
        // BLACK
        secondary: {
          "50": "#e6e6e6",
          "100": "#cccccc",
          "200": "#999999",
          "300": "#666666",
          "400": "#333333",
          "500": "#000000",
          "600": "#000000",
          "700": "#000000",
          "800": "#000000",
          "900": "#000000",
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
