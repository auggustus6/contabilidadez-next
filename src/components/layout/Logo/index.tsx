import * as Styles from "./styles";
import type { VariantProps } from "@stitches/react";
import Image from "next/image";

type Variants = VariantProps<typeof Styles.LogoWrapper>;
interface LogoProps extends Variants {
  className?: string;
}

const Logo = ({ className, ...variantsAndRest }: LogoProps) => {
  return (
    <Styles.LogoWrapper className={className} {...variantsAndRest}>
      <Image src={"/img/logo.webp"} alt={"Logo "} fill style={{ objectFit: "contain" }} />
    </Styles.LogoWrapper>
  );
};

export { Logo };
