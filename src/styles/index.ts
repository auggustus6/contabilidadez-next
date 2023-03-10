import { createStitches } from "@stitches/react";

const sizes = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem",
};

export const { config, styled, globalCss, keyframes, getCssText, theme, createTheme } =
  createStitches({
    theme: {
      colors: {
        white: "#fff",
        ["black-100"]: "#111",
        ["black-300"]: "#222",
        ["black-500"]: "#333",
        ["black-900"]: "#555",
        ["gray-100"]: "#777",
        ["gray-500"]: "#999",
        ["gray-700"]: "#bbb",
        ["gray-900"]: "#ddd",
        ["orange-500"]: "#d4853b",
      },
      fonts: {
        default: "Roboto, sans-serif",
        code: "monospace",
      },
      fontSizes: {
        xxs: "0.625rem",
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.75rem",
        "4xl": "2rem",
        "5xl": "2.25rem",
        "6xl": "3rem",
        "7xl": "4rem",
        "8xl": "4.5rem",
        "9xl": "6rem",
      },
      fontWeights: {
        thin: "300",
        regular: "400",
        bold: "700",
      },
      lineHeights: {
        shorter: "125%",
        short: "140%",
        base: "160%",
        tall: "180%",
      },
      radii: {
        px: "1px",
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "16px",
        full: "99999px",
      },
      space: sizes,
      sizes: sizes,
      transitions: {
        default: "0.3s ease-in-out",
      },
    },
    media: {
      lg: "(max-width: 1170px)",
      md: "(max-width: 768px)",
      sm: "(max-width: 450px)",
    },
  });
