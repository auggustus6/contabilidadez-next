import { styled } from "@stitches/react";

const Title = styled("h2", {
  // fontSize: "xxx-large",
  variants: {
    center: {
      true: {
        textAlign: "center",
      },
    },
    thin: {
      true: {
        fontWeight: "200",
      },
    },
  },
});

export { Title };
