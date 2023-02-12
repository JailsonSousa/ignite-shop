import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

import camiseta1 from "@/assets/camisetas/1.png";
import camiseta2 from "@/assets/camisetas/2.png";

import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} alt="camiseta" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} alt="camiseta" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} alt="camiseta" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta2} alt="camiseta" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta2} alt="camiseta" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta2} alt="camiseta" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta2} alt="camiseta" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}