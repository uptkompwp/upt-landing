import CodeEditor from "@/components/CodeEditor";
import Komputer from '../public/pc.png';
import { Box, Button, Code, Heading, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {
  const el = useRef<any | null>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        "Learn organization experience in <br /> UPTKOMP and become expert ",
      ],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
    };

    typed.current = new Typed(el.current!, options);

    return () => {
      typed.current!.destroy()!;
    };
  }, []);
  return (
    <>
      <Head>
        <title>Selamat datang di UPT IWIMA Pekalongan</title>
        <meta name="title" content="UPT KOMP IWIMA" />
        <meta name="description" content="UPT INSTITUT WIDYA PRATAMA PEKALONGAN" />
      </Head>
      <Box
        display={{ lg: "flex", base: "grid" }}
        alignItems={"center"}
        justifyContent={{ lg: "space-between" }}
        flexWrap={{ base: "wrap", lg: "nowrap" }}
        py={{ lg: 14 }}
      >
        <VStack
          alignItems={{ base: "center", lg: "start" }}
          textAlign={{ base: "center", lg: "left" }}
          spacing={10}
        >
          {/* line style */}
          <Box
            h={2}
            w={20}
            borderRadius={"xl"}
            bgGradient="linear(to-r, #2F58CD, #FF0080)"
            display={'flex'}
            justifyContent={'center'}
          ></Box>
          <Text
            color={"white"}
            fontSize={{ lg: "2xl" }}
            fontWeight={"extrabold"}
            userSelect={"none"}
            textTransform={"uppercase"}
          >
            WE DO WHAT YOU WANT
          </Text>
          <Heading
            fontSize={{ base: "5xl", lg: "7xl" }}
            as={"h1"}
            color={"white"}
            textTransform={"uppercase"}
            fontWeight={"extrabold"}
            userSelect={"none"}
          >
            Welcome to <br />
            <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
              UPT KOMP
            </Text>
          </Heading>
          <CodeEditor>
            <Code
              lineHeight={2}
              ref={el}
              p={2}
              color={"gray.300"}
              bgColor={"transparent"}
              fontSize={"sm"}
              letterSpacing={1}
              userSelect={"none"}
              fontWeight={"bold"}
            ></Code>
          </CodeEditor>
          <Button
            userSelect={"none"}
            as={Link}
            href={"/contact"}
            bgGradient="linear(to-r, #2F58CD,  #FF0080)"
            color={"white"}
            position={"relative"}
            py={6}
            px={8}
            _hover={{
              bgGradient: "linear(to-r, #2F58CD,  #FF0080)",
              _before: {
                filter: "blur(2em)",
                opacity: 1,
                top: 0,
                right: 0,
              },
              transition: "all 0.3s",
            }}
            _before={{
              transition: "all 0.3s",
              content: `""`,
              position: "absolute",
              bgGradient: "radial( #2F58CD, #FF0080)",
              filter: "blur(0.9em)",
              opacity: 0.5,
              zIndex: -1,
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            JOIN NOW
          </Button>
        </VStack>
        <Box
          display={{ base: "none", lg: "block" }}
          position={"relative"}
          _before={{
            transition: "all 0.3s",
            content: `""`,
            position: "absolute",
            bgGradient: "radial( #2F58CD, #FF0080)",
            filter: "blur(5em)",
            zIndex: -1,
            width: "12em",
            height: "12em",
            borderRadius: "100%",
            margin: "auto",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <Image
            src={Komputer.src}
            width={500}
            height={500}
            alt={"PC IMAGE"}
            priority
          />
        </Box>
      </Box>
    </>
  );
}
