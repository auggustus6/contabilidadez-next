import { globalStyles } from "@/styles/global";
import { Montserrat } from "@next/font/google";
import type { AppProps } from "next/app";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const montSerrat = Montserrat({ subsets: ["latin"], weight: ["200", "400", "700", "900"] });
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={montSerrat.className}>
      <Component {...pageProps} />
    </div>
  );
}
