/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F766E",
          hover: "#0D615B",
          light: "#14B8A6",
        },
        secondary: {
          DEFAULT: "#14532D",
          hover: "#0F3E22",
        },
        accent: {
          DEFAULT: "#C9A227",
          hover: "#B28F20",
          light: "#E5C250",
        },
        dark: {
          DEFAULT: "#1E293B",
          muted: "#64748B",
        },
        sand: {
          DEFAULT: "#FFF8EC",
          dark: "#F4EDE0",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Poppins'", "sans-serif"],
      },
      borderRadius: {
        luxury: "20px",
      },
      boxShadow: {
        premium: "0 10px 30px -10px rgba(15, 118, 110, 0.08), 0 1px 1px 0 rgba(0, 0, 0, 0.02)",
        'premium-hover': "0 20px 40px -15px rgba(15, 118, 110, 0.15), 0 1px 3px 0 rgba(0, 0, 0, 0.05)",
        glass: "0 8px 32px 0 rgba(15, 118, 110, 0.05)",
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'wave-slow': 'wave 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite',
        'wave-fast': 'wave 15s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wave: {
          '0%': { transform: 'translateX(0) translateZ(0) scaleY(1)' },
          '50%': { transform: 'translateX(-25%) translateZ(0) scaleY(0.8)' },
          '100%': { transform: 'translateX(-50%) translateZ(0) scaleY(1)' },
        }
      }
    },
  },
  plugins: [],
}
