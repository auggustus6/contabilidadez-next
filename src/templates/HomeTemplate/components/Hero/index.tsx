import { ReactNode } from "react";
import * as Styles from "./styles";
import type { VariantProps } from "@stitches/react";
import { Slider } from "@/components/feature/Slider";
import { SwiperProps, SwiperSlide } from "swiper/react";
import { SlideContainer } from "../SlideContainer";
import { Paragraph, Title } from "@/components/common/Labels";
import { Button } from "@/components/common/Buttons";
import { Box } from "@/components/layout/Box";

type Variants = VariantProps<typeof Styles.HeroWrapper>;
interface HeroProps extends Variants {
  children?: ReactNode;
  className?: string;
}

const Hero = ({ children, className, ...variantsAndRest }: HeroProps) => {
  const settings: SwiperProps = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 1000,
    },
  };

  return (
    <Styles.HeroWrapper className={className} {...variantsAndRest}>
      <Slider settings={settings}>
        <SwiperSlide>
          <SlideContainer imgUrl="https://source.unsplash.com/random?q=0">
            <Styles.SliderContent>
              <Title as="h2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Title>
              <Paragraph css={{ fontSize: "x-large", fontWeight: "$thin" }}>
                Labore doloribus soluta optio ducimus veniam eius quam consectetur numquam
                suscipit consequuntur. Minus laboriosam expedita reprehenderit fugiat non quasi
                aspernatur quos ex.
              </Paragraph>
              <Box>
                <Button textWhite>Saiba Mais</Button>
              </Box>
            </Styles.SliderContent>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer imgUrl="https://source.unsplash.com/random?q=1">
            <Styles.SliderContent>
              <Title as="h2">O business do cliente é o business da Contabilidadez</Title>
              <Paragraph css={{ fontSize: "x-large", fontWeight: "$thin" }}>
                Gestão eficaz e personalizada, que garante a melhor qualidade na entrega dos
                serviços.
              </Paragraph>
            </Styles.SliderContent>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer imgUrl="https://source.unsplash.com/random?q=2">
            <Styles.SliderContent>
              <Title as="h2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Title>
              <Paragraph css={{ fontSize: "x-large", fontWeight: "$thin" }}>
                Labore doloribus soluta optio ducimus veniam eius quam consectetur numquam
                suscipit consequuntur. Minus laboriosam expedita reprehenderit fugiat non quasi
                aspernatur quos ex.
              </Paragraph>
            </Styles.SliderContent>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer imgUrl="https://source.unsplash.com/random?q=3">
            <Styles.SliderContent>
              <Title as="h2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Title>
              <Paragraph css={{ fontSize: "x-large", fontWeight: "$thin" }}>
                Labore doloribus soluta optio ducimus veniam eius quam consectetur numquam
                suscipit consequuntur. Minus laboriosam expedita reprehenderit fugiat non quasi
                aspernatur quos ex.
              </Paragraph>
            </Styles.SliderContent>
          </SlideContainer>
        </SwiperSlide>
      </Slider>
    </Styles.HeroWrapper>
  );
};

export { Hero };
