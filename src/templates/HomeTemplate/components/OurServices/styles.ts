import { styled } from "@/styles";

export const OurServicesWrapper = styled("section", {
  padding: "6rem 0",
});

export const ServiceCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",

  gap: "$4",

  ["h6"]: {
    fontSize: "$lg",
  },
  ["p"]: {
    maxWidth: "22rem",
    textJustify: "inter-word",
    fontSize: "$sm",
    fontWeight: "$regular",
    padding: "$6",
    lineHeight: "$tall",
    backgroundColor: "#e8e6df",
    color: "$gray-100",
    height: "100%",
  },
  ["button"]: {
    marginTop: "$4",
  },

  "@md": {
    "&+&": {
      marginTop: "$10",
    },
  },
});
