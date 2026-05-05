/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1280px" } },
    extend: {
      colors: {
        // Brand: deep trust-blue + saffron accent
        ink: {
          50: "#F5F7FA",
          100: "#E8ECF1",
          200: "#CBD3DE",
          300: "#9FAEC0",
          400: "#6C7E94",
          500: "#475A70",
          600: "#2F4258",
          700: "#1F3146",
          800: "#162538",
          900: "#0E1A2A",
        },
        brand: {
          50: "#EEF4FB",
          100: "#D7E5F4",
          200: "#A9C7E6",
          300: "#7AA8D6",
          400: "#4D8AC5",
          500: "#2E75B6",
          600: "#1F4E79",
          700: "#163C5E",
          800: "#0F2C46",
          900: "#0A1F32",
        },
        saffron: {
          50: "#FEF7EC",
          100: "#FDE8C6",
          200: "#FBCF8B",
          300: "#F7B250",
          400: "#F39820",
          500: "#E8810B",
          600: "#C56607",
          700: "#9D4E08",
          800: "#7E3F0B",
          900: "#65340D",
        },
        money: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          300: "#6EE7B7",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Plus Jakarta Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 3px rgba(15,44,70,0.04), 0 4px 14px rgba(15,44,70,0.06)",
        pop: "0 12px 32px rgba(15,44,70,0.12)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(31,78,121,0.07) 1px, transparent 0)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: { floaty: "floaty 5s ease-in-out infinite" },
    },
  },
  plugins: [],
};
