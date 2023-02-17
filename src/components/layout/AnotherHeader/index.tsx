import * as Styles from "./styles";
import type { VariantProps } from "@stitches/react";
import { Container } from "../Container";
import { Logo } from "../Logo";
import Link from "next/link";
import { HeaderLink } from "./HeaderLink";
import { List } from "phosphor-react";
import { useState } from "react";

type Variants = VariantProps<typeof Styles.Wrapper>;
interface HeaderProps extends Variants {
  className?: string;
}

const Header = ({ className, ...variants }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerLinks = [
    { title: "Conteudo", href: "" },
    { title: "Conteudo", href: "" },
    { title: "Conteudo", href: "" },
    { title: "Conteudo", href: "" },
    { title: "Conteudo", href: "" },
  ];

  return (
    <Styles.Wrapper className={className} {...variants}>
      <Container justify="spaceBetween" verticalCenter>
        <Logo />
        <Styles.NavLinks isOpen={isOpen}>
          <ul>
            <HeaderLink href="/" drawerLinks={drawerLinks}>
              QUEM SOMOS
            </HeaderLink>
            <HeaderLink href="/" drawerLinks={drawerLinks}>
              OQUE FAZEMOS
            </HeaderLink>
            <HeaderLink href="/" drawerLinks={drawerLinks}>
              INOVACAO
            </HeaderLink>
            <HeaderLink href="/" drawerLinks={drawerLinks}>
              GENTE
            </HeaderLink>
            <HeaderLink href="/" drawerLinks={drawerLinks}>
              RESPONSABILIDADE SOCIAL
            </HeaderLink>
            <HeaderLink href="/" drawerLinks={drawerLinks}>
              CONTATO
            </HeaderLink>
            {/* <li></li> */}
          </ul>
          {/* <span style={{position: "relative"}}>
            <a href="">QUEM SOMOS</a>
            <Styles.Drawer>
              <Link href="/">conteudo 1</Link>
              <Link href="/">conteudo 2</Link>
              <Link href="/">conteudo 3</Link>
              <Link href="/">conteudo 4</Link>
              <Link href="/">conteudo 5</Link>
              <Link href="/">conteudo 6</Link>
            </Styles.Drawer>
          </span> */}

          {/* 
          <a href="">OQUE FAZEMOS</a>
          <a href="">INOVACAO</a>
          <a href="">GENTE</a>
          <a href="">RESPONSABILIDADE SOCIAL</a>
          <a href="">CONTATO</a> */}
        </Styles.NavLinks>
        <Styles.OpenMenuButton onClick={() => setIsOpen((old) => !old)}>
          <List size={32} color="white" />
        </Styles.OpenMenuButton>
      </Container>
    </Styles.Wrapper>
  );
};

export { Header };
