import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    "box-sizing": "border-box",
    "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
    "-moz-tap-highlight-color": "rgba(0, 0, 0, 0)",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "&::before, &::after": {
      "box-sizing": "inherit",
    },
  },
  html: {
    "scroll-behavior": "smooth",
  },

  button: {
    border: "none",
    cursor: "pointer",
    outline: "none",
  },

  a: {
    textDecoration: "none",
  },

  "::-webkit-scrollbar": {
    width: 5,
  },
  "::-webkit-scrollbar-track": {
    "border-radius": 10,
  },
  "::-webkit-scrollbar-thumb": {
    background: "#aaaaaa",
    "border-radius": 10,
    "&:hover": {
      background: "#868585",
    },
  },
});
