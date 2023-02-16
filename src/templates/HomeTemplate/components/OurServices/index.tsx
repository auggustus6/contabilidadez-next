import { Button } from "@/components/common/Buttons";
import { Paragraph, Title } from "@/components/common/Labels";
import { Box } from "@/components/layout/Box";
import { Container } from "@/components/layout/Container";
import { Spacer } from "@/components/layout/Spacer";
import Link from "next/link";
import * as Styles from "./styles";

const OurServices = () => {
  const cards = [
    {
      title: "Advocacia Empresarial",
      p: "O FC é especializado em soluções jurídicas de contencioso de altos volumes. Por meio de sistemas próprios de inteligência processual, que asseguram um controle preciso de fluxos, processos e dados, garante a seus clientes resultados significativos com qualidade e segurança jurídica. É destaque no mercado pelo constante aprimoramento de suas práticas e uma eficiente gestão na advocacia.",
      buttonLink: "/",
    },
    {
      title: "Audiência e Diligência",
      p: "O trabalho de correspondência jurídica do FC é automatizado e conta com a participação de advogados na atuação em todo país, com qualidade e assertividade nas entregas aos clientes. Todas as audiências e diligências são gerenciadas e monitoradas pela solução tecnológica Aud&Check, que além do uso em browser, possui versão de aplicativo, disponível para os sistemas Android e iOS.",
      buttonLink: "/",
    },
    {
      title: "Recuperação de Crédito",
      p: "Soluções inovadoras, somadas ao respeito e qualidade no atendimento, fazem do FC referência nacional em processos de cobranças. Os profissionais que atuam no setor de Recuperação de Crédito são treinados e orientados para a prestação de um serviço de alta performance, agindo com rapidez e foco, sendo garantia ao credor da recuperação dos valores disponibilizados no mercado.",
      buttonLink: "/",
    },
  ];
  return (
    <Styles.OurServicesWrapper>
      <Container flexVertical>
        <Title center thin as="h3">
          Nossos Serviços
        </Title>
        <Spacer size={"16"} />
        <Box justify="spaceEvenly" responsive="md" verticalCenter>
          {cards.map((card) => (
            <Styles.ServiceCard key={card.title}>
              <Title as="h6" center>
                {card.title}
              </Title>
              <Paragraph>{card.p}</Paragraph>
              <Link href={"/"}>
                <Button>SAIBA MAIS</Button>
              </Link>
            </Styles.ServiceCard>
          ))}
        </Box>
      </Container>
    </Styles.OurServicesWrapper>
  );
};

export { OurServices };
