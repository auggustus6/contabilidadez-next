import { Button } from "@/components/common/Buttons";
import { Paragraph, Title } from "@/components/common/Labels";
import { Box } from "@/components/layout/Box";
import { Container } from "@/components/layout/Container";
import { Spacer } from "@/components/layout/Spacer";
import Image from "next/image";
import Link from "next/link";
import * as Styles from "./styles";

const OurSolutions = () => {
  const cards = [
    {
      icon: "/img/home/logo-max2.webp",
      p: "Solução tecnológica própria, para gestão das carteiras jurídicas, que alia jurimetria e inteligência processual, na gestão das informações, dados e estatísticas, com o objetivo de garantir a assertividade dos processos jurídicos e o sucesso dos clientes.",
    },
    {
      icon: "/img/home/logo-max2.webp",
      p: "Complemento do Max, essa ferramenta de automação e inteligência processual tem foco no juizado especial. O sistema é parametrizado com todas as etapas processuais, indicando aos advogados os próximos passos a serem cumpridos, em busca dos melhores resultados.",
    },
    {
      icon: "/img/home/logo-max2.webp",
      p: "Plataforma tecnológica própria que possibilita gerenciar e monitorar, em tempo real, as audiências e diligências realizadas em todo território nacional. Além do uso em browser, possui versão de aplicativo, disponível para os sistemas Android e iOS.",
    },
    {
      icon: "/img/home/logo-max2.webp",
      p: "Leitura por Inteligência Artificial – ferramenta inovadora no mercado, para auxiliar departamentos jurídicos no processamento de dados e documentos. Seu diferencial é o processamento de informações em grande volume.",
    },
  ];

  return (
    <Styles.OurSolutionsWrapper>
      <Container flexVertical>
        <Title center thin as="h3" css={{ color: "$white" }}>
          Nossas Soluções Tecnológicas
        </Title>
        <Spacer size={"16"} />
        <Box justify="spaceEvenly" responsive="md">
          {cards.map((card) => (
            <Styles.OurSolutionCard key={card.p}>
              <Image
                src={card.icon}
                alt={"icone de uma pasta"}
                width={100}
                height={100}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <Paragraph>{card.p}</Paragraph>
              <Link href={"/"}>
                <Button small textWhite>
                  SAIBA MAIS
                </Button>
              </Link>
            </Styles.OurSolutionCard>
          ))}
        </Box>
      </Container>
    </Styles.OurSolutionsWrapper>
  );
};

export { OurSolutions };
