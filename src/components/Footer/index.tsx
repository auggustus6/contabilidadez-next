import { ReactNode } from "react";
import * as Styles from './styles'
import type { VariantProps } from "@stitches/react";

type Variants = VariantProps<typeof Styles.Wrapper>;
interface FooterProps extends Variants {
  children?: ReactNode;
  className?: string;
}

const Footer = ({children, className, ...variants}:FooterProps) => {
  return(
    <Styles.Wrapper className={className} {...variants}>
      {children}
    </Styles.Wrapper>
  )
};

export { Footer }