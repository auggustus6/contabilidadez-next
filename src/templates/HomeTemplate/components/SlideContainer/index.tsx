import { ReactNode } from "react";
import * as Styles from "./styles";
import type { VariantProps } from "@stitches/react";
import Image from "next/image";

type Variants = VariantProps<typeof Styles.SlideContainerWrapper>;
interface SlideContainerProps extends Variants {
  children?: ReactNode;
  className?: string;
  imgUrl: string;
}

const SlideContainer = ({
  children,
  className,
  imgUrl,
  ...variantsAndRest
}: SlideContainerProps) => {
  return (
    <Styles.SlideContainerWrapper className={className} {...variantsAndRest}>
      <Image src={imgUrl} alt="" fill style={{zIndex: -1, opacity: 0.6, objectFit: "cover", objectPosition: "center"}}/>
      {children}
    </Styles.SlideContainerWrapper>
  );
};

export { SlideContainer };
