import { styled } from "@/styles";

export const Box = styled("div", {
  width: "100%",
  marginInline: "auto",
  display: "flex",
  justifyContent: "center",
  gap: "$4",

  variants: {
    justify: {
      spaceBetween: {
        justifyContent: "space-between",
      },
      spaceAround: {
        justifyContent: "space-around",
      },
      center:{
        justifyContent: "center`"
      },
      spaceEvenly: {
        justifyContent: "space-evenly",
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
