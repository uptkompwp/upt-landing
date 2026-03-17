import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Head from "next/head";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AboutImg1 from "../public/upt.jpg";
import AboutImg2 from "../public/upt2.jpg";
import AboutImg3 from "../public/upt3.jpg";
import AboutImg4 from "../public/upt4.jpg";

const About: React.FC = () => {
  const images = [AboutImg1, AboutImg2, AboutImg3, AboutImg4];

  return (
    <Flex flexWrap={{ base: "wrap", lg: "nowrap" }} py={{ lg: 14 }} gap={10}>
      <Head>
        <title>About UPT KOMP IWIMA</title>
        <meta name="title" content="ABOUT UPT KOMP IWIMA" />
        <meta name="description" content="UPT INSTITUT WIDYA PRATAMA PEKALONGAN" />
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
            Komputer merupakan salah satu unit kerja di Institut Widya Pratama
            Pekalongan. Unit ini bertanggung jawab menyediakan infrastruktur
            teknologi informasi, baik hardware dan software, serta ketersediaan
            internet. Unit ini merupakan support system bagi seluruh
            jurusan/fakultas di universitas.
          </Text>
        </Box>
      </Box>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          style={{ borderRadius: "1rem", overflow: "hidden" }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img.src} alt={`UPT Image ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Flex>
  );
};

export default About;
