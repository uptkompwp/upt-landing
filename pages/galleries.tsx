import { Box, SimpleGrid, Image, Heading, Text } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Galleries: NextPage = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch("/api/photos");
      const data = await res.json();
      setPhotos(data.map((file: string) => `/images/${file}`));
    };

    fetchPhotos();
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

        {/* Grid untuk galeri */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
          {photos.map((photo, index) => (
            <Box key={index} overflow="hidden" borderRadius="md" boxShadow="md">
              <Image
                src={photo}
                alt={`Memory ${index + 1}`}
                objectFit="cover"
                w="100%"
                h="200px"
                _hover={{ transform: "scale(1.1)", transition: "all 0.3s" }}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Galleries;
