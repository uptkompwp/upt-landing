import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const Galleries: NextPage = () => {
  // Array foto-foto galeri
  const photos = [
    "/images/memories1.jpg",
    "/images/memories2.jpg",
    "/images/memories3.jpg",
    "/images/memories4.jpg",
    "/images/memories5.jpg",
    "/images/memories6.jpg",
    "/images/memories7.jpg",
    "/images/memories8.jpg",
    "/images/memories9.jpg",
    "/images/memories10.jpg",
  ];

  // Membagi foto menjadi kelompok (chunk) 4
  const chunkSize = 4;
  const groupedPhotos = photos.reduce<string[][]>((result, photo, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }
    result[chunkIndex].push(photo);
    return result;
  }, []);

  return (
    <>
      <Head>
        <title>Galleries - Memories</title>
        <meta name="description" content="Photo galleries of memories" />
      </Head>

      <Box maxW="6xl" mx="auto" p={5}>
        <Heading
          as="h1"
          size="lg"
          textAlign="center"
          mb={6}
          textTransform="uppercase"
          color="gray.700"
        >
          Galleries
        </Heading>
        <Text textAlign="center" mb={8} color="gray.500">
          A collection of unforgettable memories
        </Text>

        {/* Grid untuk carousel */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
          {groupedPhotos.map((group, index) => (
            <Box
              key={index}
              overflow="hidden"
              borderRadius="md"
              boxShadow="md"
              p={3}
              bgColor="gray.50"
            >
              <Swiper
                modules={[Pagination]} // Pastikan Pagination ada di sini
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                >
                {group.map((photo, idx) => (
                    <SwiperSlide key={idx}>
                    <Box
                        as="img"
                        src={photo}
                        alt={`Memory ${index * chunkSize + idx + 1}`}
                        objectFit="cover"
                        w="100%"
                        h="200px"
                        borderRadius="md"
                    />
                    </SwiperSlide>
                ))}
                </Swiper>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Galleries;
