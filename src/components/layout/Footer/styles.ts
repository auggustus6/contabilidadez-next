import { styled } from "@/styles";
import { Box } from "../Box";
import { Logo } from "../Logo";

export const ContentWrapper = styled("footer", {
  width: "100%",
  // height: "$40",
  padding: "$20 0",
  background: "#181818",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "White",
});

export const StyledLogo = styled(Logo, {
  width: 300,
  height: 120,
});

export const Content = styled("div", {
  display: "flex",
  width: "100%",
  gap: "$4",
  justifyContent: "space-between",

  "@lg": {
    flexDirection: "column",
    alignItems: "center",
    gap: "$16",
  },
});

export const Item = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const ItemsList = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(120px, 200px))",
  gridGap: "1rem",
  width: "fit-content",

  ["a"]: {
    color: "$gray-700",
    "&:hover": {
      color: "$orange-500",
    },
  },

  ["span"]: {
    color: "$gray-700",
    display: "flex",
    position: "relative",
    gap: "$4",
  },

  ["svg"]: {
    width: "1.6rem",
    minWidth: "1.6rem",
    height: "1.6rem",
    minWeight: "1.6rem",
    // position: "absolute",
    // left: "-2.5rem",
    // top: "-0.3rem",
  },

  "@lg": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  ["&.max-width-list"]: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "19rem",
  },
});

export const Copyright = styled("div", {});
