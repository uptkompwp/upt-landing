import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import AboutImg from "../public/upt.jpg";
const About: NextPage = () => {
  return (
    <Flex flexWrap={{ base: "wrap", lg: "nowrap" }} py={{ lg: 14 }} gap={10}>
      <Head>
        <title>About UPT KOMP STMIK</title>
        <meta name="title" content="ABOUT UPT KOMP STMIK" />
        <meta name="description" content="UPT STMIK WIDYA PRATAMA PEKALONGAN" />
      </Head>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Heading
          textTransform={"uppercase"}
          fontWeight={"extrabold"}
          color={"white"}
          letterSpacing={2}
        >
          ABOUT{" "}
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            display={"inline"}
          >
            UPT KOMP
          </Text>
        </Heading>
        <Box mt={8}>
          <Text
            bgColor={"transparent"}
            color={"white"}
            lineHeight={2}
            fontSize={"lg"}
            letterSpacing={2}
          >
            UPTKOMP adalah singkatan dari Unit Pelaksana Teknis Komputer. UPT
            Komputer merupakan salah satu unit kerja di STMIK Widya Pratama
            Pekalongan. Unit ini bertanggung jawab menyediakan infrastruktur
            teknologi informasi, baik hardware dan software, serta ketersediaan
            internet. Unit ini merupakan support system bagi seluruh
            jurusan/fakultas di universitas.
          </Text>
        </Box>
      </Box>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Image src={AboutImg.src} borderRadius={"xl"} />
      </Box>
    </Flex>
  );
};

export default About;
