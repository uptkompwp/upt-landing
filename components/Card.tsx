import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface IBoxCard {
  title: string;
  description: string;
  image?: StaticImageData;
  href?: string;
}

const BoxCard: React.FC<IBoxCard> = ({ title, description, image, href }) => {
  return (
    <Card
      as={href != undefined ? Link : "a"}
      href={href != undefined ? href : "#"}
      target={href != undefined ? "_blank" : "_self"}
      maxW="full"
      bg={"transparent"}
      overflow={"hidden"}
      position={"relative"}
      bgColor={"gray.900"}
      role={"group"}
      _hover={{
        _before: {
          filter: "blur(10em)",
          w: "100%",
          h: "100%",
        },
        border: "1px solid white",
        color: "white",
        _after: {
          opacity: 0,
        },
        transition: "all 0.3s",
      }}
      _before={{
        content: `""`,
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        height: "6em",
        width: "6em",
        bgColor: "red",
        bgGradient: "linear(to-r, #2F58CD, #FF0080)",
        filter: "blur(3em)",
        transition: "all 0.3s",
        borderRadius: "100%",
      }}
      _after={{
        content: `""`,
        position: "absolute",
        zIndex: -1,
        right: 0,
        bottom: 0,
        height: "6em",
        width: "6em",
        bgColor: "red",
        bgGradient: "linear(to-l, #2F58CD, #FF0080)",
        filter: "blur(3em)",
        borderRadius: "100%",
      }}
    >
      <CardBody>
        {image && (
          <Image
            src={image.src}
            fit={"cover"}
            w={"full"}
            alt="UPT STIMIK PEKALONGAN"
            borderRadius="lg"
          />
        )}
        <Stack
          mt="6"
          spacing="3"
          color={"gray"}
          _groupHover={{ color: "white" }}
        >
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default BoxCard;
