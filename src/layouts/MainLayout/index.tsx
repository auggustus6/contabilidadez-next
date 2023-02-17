import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ReactNode } from "react";
import * as Styles from "./styles";

interface MainLayoutProps {
  children?: ReactNode;
  className?: string;
}

const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <Styles.Wrapper>
      <Header />
      {children}
      <Footer />
    </Styles.Wrapper>
  );
};

export { MainLayout };
