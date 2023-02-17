import { ReactNode } from "react";
import * as Styles from "./styles";
import type { VariantProps } from "@stitches/react";
import Link from "next/link";

type Variants = VariantProps<typeof Styles.HeaderLinkWrapper>;
interface HeaderLinkProps extends Variants {
  children?: ReactNode;
  className?: string;
  href?: string;
  drawerLinks?: {
    title: string;
    href: string;
  }[];
}

interface DrawerProps {
  drawerLinks: {
    title: string;
    href: string;
  }[];
}

const HeaderLink = ({
  children,
  href,
  drawerLinks,
  className,
  ...variantsAndRest
}: HeaderLinkProps) => {
  return (
    <Styles.HeaderLinkWrapper className={className} {...variantsAndRest}>
      {href ? <Link href={href}>{children}</Link> : children}
      {drawerLinks && (
        <Styles.DrawerWrapper>
          <div>
            {drawerLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </div>
        </Styles.DrawerWrapper>
      )}
      {/* {drawerLinks && <Drawer drawerLinks={drawerLinks} />} */}
    </Styles.HeaderLinkWrapper>
  );
};

export { HeaderLink };
