import { ReactNode } from "react";
import * as Styles from "./styles";
import type { VariantProps } from "@stitches/react";
import { Slider } from "@/components/feature/Slider";
import { SwiperProps, SwiperSlide } from "swiper/react";
import { SlideContainer } from "../SlideContainer";
import { Paragraph, Title } from "@/components/common/Labels";

type Variants = VariantProps<typeof Styles.HeroWrapper>;
interface HeroProps extends Variants {
  children?: ReactNode;
  className?: string;
}

const Hero = ({ children, className, ...variantsAndRest }: HeroProps) => {
  const settings: SwiperProps = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 300,
    },
  };

  return (
    <Styles.HeroWrapper className={className} {...variantsAndRest}>
      <Slider settings={settings}>
        <SwiperSlide>
          <SlideContainer imgUrl="https://source.unsplash.com/random?q=0">
            <h1>Teste</h1>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer imgUrl="https://source.unsplash.com/random?q=1">
            <Styles.SliderContent>
              <Title as="h2">O business do cliente é o business da Contabilidadez</Title>
              <Paragraph css={{ fontSize: "x-large" }}>
                Gestão eficaz e personalizada, que garante a melhor qualidade na entrega dos
                serviços.
              </Paragraph>
            </Styles.SliderContent>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer imgUrl="https://source.unsplash.com/random?q=2"></SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer imgUrl="https://source.unsplash.com/random?q=3"></SlideContainer>
        </SwiperSlide>
      </Slider>
    </Styles.HeroWrapper>
  );
};

export { Hero };
