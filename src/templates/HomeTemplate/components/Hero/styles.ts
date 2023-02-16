import { styled } from "@/styles";

export const HeroWrapper = styled("section", {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

export const SliderContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  textAlign: "center",
  maxWidth: 600,
  color: "$white"
});
