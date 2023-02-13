import { styled, theme } from "@/styles";


export const Container = styled("footer", {
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
  },
});
