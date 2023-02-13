import { styled } from "@/styles";

export const Wrapper = styled("button", {
  all: "unset",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "3rem",
  maxWidth: "400px",
  padding: "0 1rem",
  background: "#c549de",
  borderRadius: "5px",
  color: "white",
  transition: "all 0.3s easy-in",

  "&:active": {
    boxShadow: "0px 0px 0px 2px black",
  },

  variants: {
    type: {
      cancel: {
        background: "red",
      },
    },

    color: {
      otra: {
        color: ((theme) => theme)(),
      },
    },

    leftText: {
      true: {
        alignItems: "start",
      },
    },
  },
});
