import { styled } from "@/styles";

export const DrawerWrapper = styled("ul", {
  visibility: "hidden",
  pointerEvents: "none",
  opacity: 0,
  overflow: "hidden",
  transition: "all 0.3s",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  minWidth: "150px",
  top: "0",

  "&:before": {
    content: "",
    width: "100%",
  },

  ["li"]: {
    display: "flex",
    alignItems: "center",
    gap: "$2",
    height: "$8",
    background: "#181818",
    width: "100%",
    fontSize: "$sm",
    fontWeight: "$thin",
    paddingLeft: "$4",

    "&:hover": {
      background: "$black-300",
    },
  },
});

export const HeaderLinkWrapper = styled("li", {
  color: "$white",
  position: "relative",
  ["a"]: {
    color: "$white",
  },
  [`&:hover > ul`]: {
    // all: "unset",
    visibility: "visible",
    pointerEvents: "all",
    opacity: 1,
    height: "unset",
  },
});
