import { styled } from "@/styles";

export const Wrapper = styled("header", {
  position: "fixed",
  width: "100%",
  height: "$20",
  background: "#181818",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 10,
});

export const NavLinks = styled("nav", {
  position: "relative",
  ["ul"]: {
    display: "flex",
    gap: "$8",
    fontSize: "$xxs",
    fontWeight: "$bold",
    letterSpacing: "1px",
    listStyle: "none",
  },
  // marginTop: "$6",
  // a: {
  //   color: "$white",
  //   transition: "$default",
  //   "&:hover": {
  //     color: "$orange-500",
  //   },
  // },

  "@lg": {
    display: "none",
  },

  variants: {
    isOpen: {
      true: {
        display: "contents",

        ["ul"]: {
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          width: "400px",
          background: "#181818",
          height: "100vh",
          top: 0,
          right: 0,
          paddingTop: "4rem",
          paddingLeft: "2rem"
        },
      },
    },
  },
});

export const OpenMenuButton = styled("div", {
  display: "none",
  cursor: "pointer",

  "@lg": {
    display: "contents",
  },
});
