import { Paragraph, Title } from "@/components/common/Labels";
import { Box } from "@/components/layout/Box";
import { Container } from "@/components/layout/Container";
import { Spacer } from "@/components/layout/Spacer";
import Image from "next/image";
import * as Styles from "./styles";

const OurAchievements = () => {
  const cards = [
    { icon: "/img/home/folder.webp", title: "550.000", p: "Processos Ativos" },
    { icon: "/img/home/hammer.webp", title: "250", p: "Audiências diárias" },
    { icon: "/img/home/folder.webp", title: "23.000", p: "Diligências Mensais" },
  ];

  return (
    <Styles.OurAchievementsWrapper>
      <Container flexVertical>
        <Title center thin as="h3">
          FC em Números
        </Title>
        <Spacer size={"16"} />
        <Box justify="spaceEvenly" responsive="md">
          {cards.map((card) => (
            <Styles.OursNumbersCard key={card.title}>
              <Image src={card.icon} alt={"icone de uma pasta"} width={100} height={100} />
              <Title as="h4">{card.title}</Title>
              <Paragraph>{card.p}</Paragraph>
            </Styles.OursNumbersCard>
          ))}
        </Box>
      </Container>
    </Styles.OurAchievementsWrapper>
  );
};

export { OurAchievements };
