import { Button } from "@/components/common/Buttons";
import { Paragraph, Title } from "@/components/common/Labels";
import { Box } from "@/components/layout/Box";
import { Container } from "@/components/layout/Container";
import { Spacer } from "@/components/layout/Spacer";
import Image from "next/image";
import Link from "next/link";
import * as Styles from "./styles";

const Meritocracy = () => {
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
    <Styles.MeritocracyWrapper>
      <Container flexVertical>
        <Title center thin as="h3" css={{ color: "$white" }}>
          Meritocracia
        </Title>
        <Spacer size={"16"} />
        <Box responsive="md" flexVertical verticalCenter css={{ gap: "$12" }}>
          <Paragraph
            center
            css={{ color: "$white", lineHeight: "$tall", maxWidth: "40rem", fontSize: "$lg" }}
          >
            O FC adota um modelo de gestão organizacional, que valoriza o mérito como meio para
            o crescimento profissional. Com cerca de 1500 colaboradores, mantem um cronograma
            permanente de capacitação e atua no mercado com uma meritocracia implantada e
            consolidada.
          </Paragraph>
          <Button textWhite borderWhite>
            Faça Parte
          </Button>
        </Box>
      </Container>
    </Styles.MeritocracyWrapper>
  );
};

export { Meritocracy };
