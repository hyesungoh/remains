/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.tsx"],
  plugins: [require("tailwindcss-animate")],

  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },

        transparent: "transparent",
        white: "#ffffff",
        black: "#000000",
        gray: {
          DEFAULT: "#8E8E93",
          50: "#F2F2F7",
          100: "#E5E5EA",
          200: "#D1D1D6",
          300: "#C7C7CC",
          400: "#AEAEB2",
          500: "#8E8E93",
          600: "#636366",
          700: "#48484A",
          800: "#3A3A3C",
          900: "#2C2C2E",
          1000: "#1C1C1E"
        },
        red: {
          DEFAULT: "#FF3B30",
          50: "#FFE9E8",
          100: "#FFD6D3",
          200: "#FFAFAA",
          300: "#FF8882",
          400: "#FF6259",
          500: "#FF3B30",
          600: "#F70D00",
          700: "#BF0A00",
          800: "#870700",
          900: "#4F0400"
        },
        orange: {
          DEFAULT: "#FF9500",
          50: "#FFE1B8",
          100: "#FFD9A3",
          200: "#FFC87A",
          300: "#FFB752",
          400: "#FFA629",
          500: "#FF9500",
          600: "#C77400",
          700: "#8F5300",
          800: "#573300",
          900: "#1F1200"
        },
        yellow: {
          DEFAULT: "#FFCC00",
          50: "#FFF1B8",
          100: "#FFEDA3",
          200: "#FFE47A",
          300: "#FFDC52",
          400: "#FFD429",
          500: "#FFCC00",
          600: "#C79F00",
          700: "#8F7200",
          800: "#574500",
          900: "#1F1800"
        },
        green: {
          DEFAULT: "#34C759",
          50: "#C3EFCE",
          100: "#B3EBC1",
          200: "#93E3A7",
          300: "#72DA8D",
          400: "#52D272",
          500: "#34C759",
          600: "#289B45",
          700: "#1D6E31",
          800: "#11421D",
          900: "#061509"
        },
        mint: {
          DEFAULT: "#00C7BE",
          50: "#80FFF9",
          100: "#6BFFF8",
          200: "#42FFF6",
          300: "#1AFFF5",
          400: "#00F0E5",
          500: "#00C7BE",
          600: "#008F88",
          700: "#005753",
          800: "#001F1D",
          900: "#000000"
        },
        teal: {
          DEFAULT: "#30B0C7",
          50: "#BFE8F0",
          100: "#AFE2EC",
          200: "#8ED7E4",
          300: "#6DCBDC",
          400: "#4CBFD4",
          500: "#30B0C7",
          600: "#25889A",
          700: "#1A606D",
          800: "#0F383F",
          900: "#041012"
        },
        cyan: {
          DEFAULT: "#32ADE6",
          50: "#D6EEFA",
          100: "#C3E7F8",
          200: "#9FD9F3",
          300: "#7BCAEF",
          400: "#56BCEA",
          500: "#32ADE6",
          600: "#1890C8",
          700: "#126C96",
          800: "#0C4864",
          900: "#062432"
        },
        blue: {
          DEFAULT: "#007AFF",
          50: "#B8DAFF",
          100: "#A3CFFF",
          200: "#7ABAFF",
          300: "#52A5FF",
          400: "#298FFF",
          500: "#007AFF",
          600: "#005FC7",
          700: "#00448F",
          800: "#002957",
          900: "#000F1F"
        },
        indigo: {
          DEFAULT: "#5856D6",
          50: "#EAEAFA",
          100: "#DAD9F6",
          200: "#B9B9EE",
          300: "#9998E6",
          400: "#7877DE",
          500: "#5856D6",
          600: "#3230C4",
          700: "#262597",
          800: "#1B1A6A",
          900: "#0F0F3D"
        },
        purple: {
          DEFAULT: "#AF52DE",
          50: "#F6ECFB",
          100: "#EEDBF8",
          200: "#DFB9F2",
          300: "#CF97EB",
          400: "#BF74E5",
          500: "#AF52DE",
          600: "#9828D0",
          700: "#751FA1",
          800: "#531672",
          900: "#310D43"
        },
        pink: {
          DEFAULT: "#FF2D55",
          50: "#FFE5EA",
          100: "#FFD0D9",
          200: "#FFA7B8",
          300: "#FF7F97",
          400: "#FF5676",
          500: "#FF2D55",
          600: "#F4002E",
          700: "#BC0024",
          800: "#840019",
          900: "#4C000E"
        },
        brown: {
          DEFAULT: "#A2845E",
          50: "#E5DDD2",
          100: "#DED3C5",
          200: "#CFBFAC",
          300: "#C0AC92",
          400: "#B19878",
          500: "#A2845E",
          600: "#7F6749",
          700: "#5B4A35",
          800: "#382D20",
          900: "#14100C"
        }
      }
    }
  }
}
