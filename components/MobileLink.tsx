import { Link as NextLink } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
interface IMobileLink {
  title: string;
  href: string;
  active: boolean;
}
const MobileLink: React.FC<IMobileLink> = ({ title, href, active }) => {
  return (
    <NextLink
      as={Link}
      href={href}
      fontSize={"4xl"}
      fontWeight={"extrabold"}
      color={"white"}
      letterSpacing={3}
      style={{ textDecoration: "none" }}
      textTransform={"uppercase"}
      borderBottom={active ? '3px solid white' : 'none'}
    >
      {title}
    </NextLink>
  );
};

export default MobileLink;
