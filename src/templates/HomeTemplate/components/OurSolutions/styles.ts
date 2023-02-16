import { styled } from "@/styles";

export const OurSolutionsWrapper = styled("section", {
  background: "#181818",
  padding: "6rem 0",
});

export const OurSolutionCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$4",

  ["h4"]: {
    fontSize: "$4xl",
    fontWeight: "900",
  },
  ["p"]: {
    maxWidth: "18rem",
    textAlign: "center",
    textJustify: "inter-word",
    fontSize: "$sm",
    fontWeight: "$regular",
    // padding: "$6",
    marginBottom: "$10",
    lineHeight: "$tall",
    color: "$gray-100",
    height: "100%",
  },
});
