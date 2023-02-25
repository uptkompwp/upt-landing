import Link from "next/link";
import { Link as NextLink, Box } from "@chakra-ui/react";
import React from "react";
interface IBaseLink {
  title: string;
  active: boolean;
  href: string
}
const BaseLink: React.FC<IBaseLink> = ({ title, active, href }) => {
  return (
    <NextLink
      as={Link}
      href={href}
      textTransform={"uppercase"}
      fontWeight={"semibold"}
      color={"white"}
      position={"relative"}
      h={"full"}
      display={"inline-block"}
      letterSpacing={1}
      style={{ textDecoration: "none" }}
      fontSize={"sm"}
    >
      {active && (
        <Box
          bgGradient="linear(to-r, #2F58CD,  #FF0080)"
          top={-1}
          bottom={-1}
          w={"80%"}
          position={"absolute"}
          right={"-10%"}
          style={{ filter: "blur(1em)" }}
          zIndex={-1}
        ></Box>
      )}
      {title}
    </NextLink>
  );
};

export default BaseLink;
