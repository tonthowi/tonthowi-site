/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
            color: theme("colors.zinc.600"),
            'h1, h2, h3, h4': {
              color: theme("colors.zinc.900"),
              fontWeight: '600',
            },
            a: {
              color: theme("colors.teal.500"),
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            blockquote: {
              borderLeftColor: theme("colors.zinc.200"),
              color: theme("colors.zinc.600"),
            },
            hr: {
              borderColor: theme("colors.zinc.200"),
            },
            'ul > li::marker': {
              color: theme("colors.zinc.400"),
            },
            'ol > li::marker': {
              color: theme("colors.zinc.400"),
            },
            code: {
              color: theme("colors.zinc.700"),
              backgroundColor: theme("colors.zinc.100"),
            },
            pre: {
              backgroundColor: theme("colors.zinc.800"),
              color: theme("colors.zinc.200"),
            },
            thead: {
              color: theme("colors.zinc.900"),
            },
            'tbody tr': {
              borderBottomColor: theme("colors.zinc.200"),
            },
          },
        },
        invert: {
          css: {
            color: theme("colors.zinc.400"),
            'h1, h2, h3, h4': {
              color: theme("colors.zinc.200"),
            },
            a: {
              color: theme("colors.teal.400"),
            },
            blockquote: {
              borderLeftColor: theme("colors.zinc.700"),
              color: theme("colors.zinc.400"),
            },
            hr: {
              borderColor: theme("colors.zinc.700"),
            },
            'ul > li::marker': {
              color: theme("colors.zinc.600"),
            },
            'ol > li::marker': {
              color: theme("colors.zinc.600"),
            },
            code: {
              color: theme("colors.zinc.200"),
              backgroundColor: theme("colors.zinc.800"),
            },
            pre: {
              backgroundColor: theme("colors.zinc.900"),
              color: theme("colors.zinc.200"),
            },
            thead: {
              color: theme("colors.zinc.200"),
            },
            'tbody tr': {
              borderBottomColor: theme("colors.zinc.700"),
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
        'body': {
          backgroundColor: theme('colors.white'),
          color: theme('colors.zinc.600'),
        },
        'body.dark': {
          backgroundColor: theme('colors.black'),
          color: theme('colors.zinc.400'),
        },
        'h1': {
          marginTop: "1.25rem",
          marginBottom: "0.5rem",
          fontFamily: theme("fontFamily.silkabold"),
          color: theme("colors.zinc.900"),
          '.dark &': {
            color: theme("colors.zinc.100"),
          },
        },
        'h2': {
          marginTop: "1.75rem",
          marginBottom: "1rem",
          fontFamily: theme("fontFamily.silkabold"),
          color: theme("colors.zinc.900"),
          '.dark &': {
            color: theme("colors.zinc.100"),
          },
        },
        'h3': {
          marginTop: "1rem",
          marginBottom: "0.5rem",
          fontFamily: theme("fontFamily.silkabold"),
          color: theme("colors.zinc.900"),
          '.dark &': {
            color: theme("colors.zinc.100"),
          },
        },
        'h4': {
          marginTop: "1rem",
          marginBottom: "0.5rem",
          fontFamily: theme("fontFamily.silkabold"),
          color: theme("colors.zinc.900"),
          '.dark &': {
            color: theme("colors.zinc.100"),
          },
          textTransform: "uppercase",
          letterSpacing: theme("letterSpacing.widest"),
        },
        'p': {
          color: theme("colors.zinc.600"),
          '.dark &': {
            color: theme("colors.zinc.400"),
          },
        },
      });
    },
  ],
};