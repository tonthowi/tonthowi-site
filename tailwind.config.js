/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        silka: ['silkaregular', 'Arial', 'Helvetica', 'sans-serif'],
        silkaItalic: ['silkaregular_italic', 'Arial', 'Helvetica', 'sans-serif'],
        silkabold: ['silkabold', 'Arial', 'Helvetica', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.foreground"),
            a: {
              color: theme("colors.blue.500"),
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            blockquote: {
              borderLeftColor: theme("colors.blue.500"),
              color: theme("colors.gray.700"),
              fontStyle: "italic",
            },
            p: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              lineHeight: "1.6",
              color: theme("colors.gray.700"),
            },
            code: {
              color: theme("colors.pink.500"),
              backgroundColor: theme("colors.gray.100"),
              padding: "0.2em 0.4em",
              borderRadius: "0.2em",
            },
            pre: {
              backgroundColor: theme("colors.gray.800"),
              color: theme("colors.white"),
              padding: "1rem",
              borderRadius: theme("borderRadius.lg"),
              overflowX: "auto",
            },
            ul: {
              listStyleType: "disc",
              paddingLeft: "2rem",
            },
            ol: {
              listStyleType: "decimal",
              paddingLeft: "2rem",
            },
            li: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              lineHeight: "1.6",
              color: theme("colors.gray.600"),
            },
            img: {
              marginTop: "1rem",
              marginBottom: "1rem",
              borderRadius: theme("borderRadius.lg"),
            },
            video: {
              marginTop: "1rem",
              marginBottom: "1rem",
              borderRadius: theme("borderRadius.lg"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addBase, theme }) {
      addBase({
        h1: {
          marginTop: "1.25rem",
          marginBottom: "0.5rem",
          fontFamily: theme("fontFamily.silkabold"),
          color: theme("colors.foreground"),
        },
        h2: {
          marginTop: "1.75rem",
          marginBottom: "1rem",
          fontFamily: theme("fontFamily.silkabold"),
          color: theme("colors.foreground"),
        },
        h3: {
          marginTop: "1rem",
          marginBottom: "0.5rem",
          fontFamily: theme("fontFamily.silkabold"),
          color: theme("colors.foreground"),
        },
        h4: {
          marginTop: "1rem",
          marginBottom: "0.5rem",
          fontFamily: theme("fontFamily.silkabold"),
          color: theme("colors.foreground"),
          textTransform: "uppercase",
          letterSpacing: theme("letterSpacing.widest"),
        },
      });
    },
  ],
};