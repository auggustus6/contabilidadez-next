import { ReactNode } from "react";
import * as Styles from "./styles";
import type { VariantProps } from "@stitches/react";
import Link from "next/link";

type Variants = VariantProps<typeof Styles.Wrapper>;
interface BtLinkProps extends Variants {
  children?: ReactNode;
  className?: string;
  href: string;
}

const BtLink = ({ href, children, className, ...variants }: BtLinkProps) => {
  return (
    <Link href={href}>
      <Styles.Wrapper {...variants} className={className}>
        {children}
      </Styles.Wrapper>
    </Link>
  );
};

export { BtLink };
