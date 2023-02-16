import { styled } from "@/styles";

export const OurAchievementsWrapper = styled("section", {
  background: "#e8e6df",
  padding: "6rem 0",
});

export const OursNumbersCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$4",
  img: {
    marginBottom: "$2",
  },
  ["h4"]: {
    fontSize: "$4xl",
    fontWeight: "900",
  },
  ["p"]: {
    fontSize: "$2xl",
    fontWeight: "200",
    color: "$black-900",
  },
});
