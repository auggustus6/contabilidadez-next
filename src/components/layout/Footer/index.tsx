import * as Styles from "./styles";
import { Box } from "../Box";
import { Paragraph, Title } from "@/components/common/Labels";
import { Container } from "../Container";
import Link from "next/link";
import { HouseLine, Phone, EnvelopeOpen, MapPinLine } from "phosphor-react";

const Footer = () => {
  const links = [
    { title: "Home", href: "/" },
    { title: "FC No Brasil", href: "/" },
    { title: "Tecnologia", href: "/" },
    { title: "Faça Parte", href: "/" },
    { title: "Nossa História", href: "/" },
    { title: "O que fazemos", href: "/" },
    { title: "IWC", href: "/" },
    { title: "Contato", href: "/" },
  ];

  const contactLinks = [
    {
      title: "Matriz - R. Bernardo Guimarães, 1986 - Lourdes, BH/MG",
      Icon: HouseLine,
    },
    {
      title: "(31) 3298-5600",
      Icon: Phone,
    },
    {
      title: "Enviar mensagem",
      Icon: EnvelopeOpen,
    },
    {
      title: "Outros endereços",
      Icon: MapPinLine,
    },
  ];

  return (
    <>
      <Styles.ContentWrapper>
        <Container>
          {/* <Styles.GridContainer>
            <Box flexVertical verticalCenter>
              <Styles.StyledLogo />
              <Paragraph css={{ color: "$gray-700", lineHeight: "$tall" }}>
                Com 28 anos de atuação, é referência nacional em Direito Empresarial, aliando
                tradição e inovação.
              </Paragraph>
            </Box>
            <Styles.BoxItems flexVertical>
              <Title as="h6">Navegue</Title>
              <Box flexVertical css={{ maxHeight: "8rem", flexWrap: "wrap" }}>
                {links.map((link) => (
                  <Link href={link.href} key={link.title}>
                    ● {link.title}
                  </Link>
                ))}
              </Box>
            </Styles.BoxItems>
            <Styles.BoxItems flexVertical>
              <Title as="h6">Fale Conosco</Title>
              <Box flexVertical css={{ maxHeight: "8rem", flexWrap: "wrap" }}>
                {contactLinks.map(({ Icon, title }) => (
                  // <Link href={link.href} key={link.title}>
                  //   {link.title}
                  // </Link>
                  <span>
                    <Icon size={32} weight="thin" />
                    <Paragraph>{title}</Paragraph>
                  </span>
                ))}
              </Box>
            </Styles.BoxItems>
          </Styles.GridContainer> */}

          {/* <Box css={{ flexWrap: "wrap" }}>
            
          </Box> */}

          <Styles.Content>
            <Styles.Item css={{ maxWidth: "20rem" }}>
              <Styles.StyledLogo />
              <p>
                Com 28 anos de atuação, é referência nacional em Direito Empresarial, aliando
                tradição e inovação.
              </p>
            </Styles.Item>
            <Styles.Item>
              <Title as="h6">Navegue</Title>
              <Styles.ItemsList>
                {links.map((link) => (
                  <Link href={link.href} key={link.title}>
                    ● {link.title}
                  </Link>
                ))}
              </Styles.ItemsList>
            </Styles.Item>
            <Styles.Item>
              <Title as="h6">Navegue</Title>
              <Styles.ItemsList className="max-width-list">
                {contactLinks.map(({ Icon, title }) => (
                  <span key={title}>
                    <Icon size={32} weight="thin" />
                    <Paragraph>{title}</Paragraph>
                  </span>
                ))}
              </Styles.ItemsList>
            </Styles.Item>
          </Styles.Content>
        </Container>
      </Styles.ContentWrapper>
      <Styles.Copyright></Styles.Copyright>
    </>
  );
};

export { Footer };
