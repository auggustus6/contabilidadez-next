import * as Styles from "./styles";
import type { VariantProps } from "@stitches/react";
import { Container } from "../Container";

type Variants = VariantProps<typeof Styles.Wrapper>;
interface HeaderProps extends Variants {
  className?: string;
}

const Header = ({ className, ...variants }: HeaderProps) => {
  return (
    <Styles.Wrapper className={className} {...variants}>
      <Container justify="spaceBetween">
        <h1>Logo</h1>
        <nav>
          <a href="">1</a>
          <a href="">2</a>
          <a href="">3</a>
          <a href="">4</a>
          <a href="">5</a>
        </nav>
      </Container>
    </Styles.Wrapper>
  );
};

export { Header };
