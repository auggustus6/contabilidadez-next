import { styled, theme } from "@/styles";

export const Container = styled("div", {
  maxWidth: 1440,
  width: "100%",
  marginInline: "auto",
  paddingInline: "$4",
  display: "flex",
  justifyContent: "center",

  variants: {
    justify: {
      spaceBetween: {
        justifyContent: "space-between",
      },
      start: {
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
    },
    flexVertical: {
      true: {
        flexDirection: "column",
      },
    },
    verticalCenter: {
      true: {
        alignItems: "center",
      },
    },
    responsive: {
      lg: {
        "@lg": {
          flexDirection: "column",
        },
      },
      md: {
        "@md": {
          flexDirection: "column",
        },
      },
      sm: {
        "@sm": {
          flexDirection: "column",
        },
      },
      mdReverse: {
        "@md": {
          flexDirection: "column-reverse",
        },
      },
      smReverse: {
        "@sm": {
          flexDirection: "column-reverse",
        },
      },
    },
  },
});
