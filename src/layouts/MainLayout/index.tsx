import { ReactNode } from "react";
import * as Styles from './styles'

interface MainLayoutProps {
  children?: ReactNode;
  className?: string;
}


const MainLayout = ({children, className}:MainLayoutProps) => {
  return(
    <Styles.Wrapper>
      {children}
    </Styles.Wrapper>
  )
};

export { MainLayout }