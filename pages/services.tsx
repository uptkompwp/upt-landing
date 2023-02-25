import BoxCard from "@/components/Card";
import { Grid, GridItem } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";

const Services: NextPage = () => {
  return (
    <Grid
      templateColumns={{ base: "auto", lg: "repeat(3, 1fr)" }}
      justifyContent={"center"}
      gap={6}
      py={{ lg: 14 }}
    >
      <Head>
        <title>SERVICES UPT KOMP STMIK</title>
        <meta name="title" content="SERVICES UPT KOMP STMIK" />
        <meta name="description" content="UPT STMIK WIDYA PRATAMA PEKALONGAN" />
      </Head>
      <GridItem w="100%">
        <BoxCard
          title="Computer Maintenance"
          description="We provide computer maintenance services to our labs."
        />
      </GridItem>
      <GridItem w="100%">
        <BoxCard
          title="Software Installation"
          description="We provide software installation services to our labs, students, & lecturers."
        />
      </GridItem>
      <GridItem w="100%">
        <BoxCard
          title="Interns Mentoring"
          description="We provide interns mentoring services to our intern employees."
        />
      </GridItem>
      <GridItem w="100%">
        <BoxCard
          title="Assistant Lab"
          description="We provide assistant lab services to our labs when learn course in the lab."
        />
      </GridItem>
    </Grid>
  );
};

export default Services;
