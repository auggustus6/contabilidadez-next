import { styled } from "@/styles";

export const Wrapper = styled("button", {
  all: "unset",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "$12",
  maxWidth: "150px",
  padding: "0 $4",
  background: "transparent",
  borderRadius: "$full",
  color: "$gray-100",
  fontSize: "$xxs",
  width: "$40",
  fontWeight: "$bold",
  transition: "all 0.2s ease-in",

  border: "1px solid $orange-500",

  cursor: "pointer",

  "&:disabled": {
    background: "$gray-500",
    cursor: "not-allowed",
  },

  "&:not(:disabled):hover": {
    background: "$orange-500",
    color: "$white",
  },

  "&:active": {
    boxShadow: "0px 0px 0px 2px black",
  },

  variants: {
    type: {
      cancel: {
        background: "red",
      },
    },

    small: {
      true: {
        height: "$10",
        width: "$20",
      },
    },

    textWhite: {
      true: {
        color: "$white",
        fontWeight: "$regular",
      },
    },

    borderWhite: {
      true: {
        borderColor: "$white",
        fontSize: "$xs",

        "&:not(:disabled):hover": {
          background: "$white",
          color: "$black-100",
        },
      },
    },

    leftText: {
      true: {
        alignItems: "start",
      },
    },
  },
});
