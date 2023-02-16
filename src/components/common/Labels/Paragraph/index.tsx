import { styled } from "@stitches/react";

const Paragraph = styled("p", {
  variants: {
    center: {
      true: {
        textAlign: "center",
      },
    },
  },
});

Paragraph.toString = () => ".paragraph__component";

export { Paragraph };
