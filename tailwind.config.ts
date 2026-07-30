import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          950: "#05060A",
          900: "#070A10",
          800: "#0B1020"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 80px rgba(0,0,0,0.65)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        }
      },
      animation: {
        floaty: "floaty 4s ease-in-out infinite",
        "floaty-delayed": "floaty 4s ease-in-out infinite 1s"
      }
    }
  },
  plugins: []
} satisfies Config;


