import { ReactNode } from "react";
import * as Styles from "./styles";
import type { VariantProps } from "@stitches/react";

type Variants = VariantProps<typeof Styles.Wrapper>;
interface ButtonProps extends Variants {
  children?: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...variantsAndRest }: ButtonProps) => {
  return (
    <Styles.Wrapper {...variantsAndRest} className={className}>
      {children}
    </Styles.Wrapper>
  );
};

export { Button };
