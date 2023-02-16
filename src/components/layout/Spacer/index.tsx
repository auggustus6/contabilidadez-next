import { styled, theme } from "@/styles";

interface SpacerProp {
  size: keyof typeof theme.space;
}

const StitchesSpacer = styled("div");

const Spacer = ({ size }: SpacerProp) => {
  return <StitchesSpacer css={{ paddingTop: "$" + size }} />;
};

export { Spacer };
