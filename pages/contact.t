import BoxCard from "@/components/Card";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import IGIMG from "../public/ig.jpg";
import YTIMG from "../public/yt.png";

const Contact: NextPage = () => {
  type JoinForm = {
    nim: string;
    nama: string;
    kelas: string;
    nowa: string;
    alamat: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<JoinForm>();
  const onSubmit = (data: JoinForm) => {
    console.log(data);
    const url = `https://wa.me/62895422823256?text=Hai%20kak%2C%20saya%20ingin%20mendaftar%20sebagai%20bagian%20dari%20UPT%20Laboratorium.%0ABerikut%20data-data%20yang%20saya%20lampirkan%20%3A%0A1.%20NIM%20%3A%20${
      data.nim
    }%0A2.%20Nama%20Lengkap%20%3A%20${data.nama}%0A3.%20Kode%20Kelas%20%3A%20${
      data.kelas
    }%0A4.%20No%20WA%20%3A%20${data.nowa.toString()}%0A5.%20Alamat%20%3A%20${
      data.alamat
    }`;
    window.open(url, "_blank");
    resetField("nim");
    resetField("nama");
    resetField("alamat");
    resetField("kelas");
    resetField("nowa");
  };

  return (
    <Flex flexWrap={{ base: "wrap", lg: "nowrap" }} py={{ lg: 14 }} gap={10}>
      <Head>
        <title>CONTACT OR JOIN UPT KOMP IWIMA</title>
        <meta name="title" content="SERVICES UPT KOMP IWIMA" />
        <meta name="description" content="UPT INSTITUT WIDYA PRATAMA PEKALONGAN" />
      </Head>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Heading
          textTransform={"uppercase"}
          fontWeight={"extrabold"}
          color={"white"}
          letterSpacing={2}
        >
          Social Media&nbsp;
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            display={"inline"}
          >
            UPT KOMP
          </Text>
        </Heading>
        <Box
          mt={8}
          color={"white"}
          lineHeight={2}
          letterSpacing={1}
          fontSize={"lg"}
        >
          <List spacing={3}>
            <ListItem>
              <BoxCard
                href="https://www.youtube.com/channel/UCO6r1i12aeMerFmzHxcTM9g"
                image={YTIMG}
                title="Youtube"
                description="UPT KOMPUTER"
              />
            </ListItem>
            <ListItem>
              <BoxCard
                href="https://www.instagram.com/uptkomputer_/"
                image={IGIMG}
                title="Instagram"
                description="uptkomputer_"
              />
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Heading
          textTransform={"uppercase"}
          fontWeight={"extrabold"}
          color={"white"}
          letterSpacing={2}
        >
          Join us now&nbsp;
        </Heading>
        <Box
          onSubmit={handleSubmit(onSubmit)}
          mt={8}
          color={"white"}
          lineHeight={2}
          letterSpacing={1}
          fontSize={"lg"}
          as={"form"}
          position={"relative"}
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
          <FormControl mb={5} isInvalid={errors.nim != undefined}>
            <FormLabel>Nomer Induk Mahasiswa</FormLabel>
            <Input
              type="text"
              {...register("nim", { required: true })}
              autoComplete={"off"}
            />
            {!errors.nim ? (
              <FormHelperText>Masukan Nomer Induk Mahasiswa</FormHelperText>
            ) : (
              <FormErrorMessage>
                Nomer Induk Mahasiswa Tidak Boleh Kosong.
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl mb={5} isInvalid={errors.nama != undefined}>
            <FormLabel>Nama Lengkap</FormLabel>
            <Input
              type="text"
              {...register("nama", { required: true })}
              autoComplete={"off"}
            />
            {!errors.nama ? (
              <FormHelperText>Masukan Nama Lengkap</FormHelperText>
            ) : (
              <FormErrorMessage>
                Nama Lengkap Tidak Boleh Kosong.
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl mb={5} isInvalid={errors.kelas != undefined}>
            <FormLabel>Kode Kelas</FormLabel>
            <Input
              type="text"
              {...register("kelas", { required: true })}
              autoComplete={"off"}
            />
            {!errors.kelas ? (
              <FormHelperText>Masukan Kode Kelas</FormHelperText>
            ) : (
              <FormErrorMessage>Kode Kelas Tidak Boleh Kosong</FormErrorMessage>
            )}
          </FormControl>
          <FormControl mb={5} isInvalid={errors.nowa != undefined}>
            <FormLabel>WhatsApp</FormLabel>
            <Input
              type="number"
              min={0}
              {...register("nowa", { required: true, valueAsNumber: true })}
              autoComplete={"off"}
            />
            {!errors.nowa ? (
              <FormHelperText>Masukan Nomer WhatsApp</FormHelperText>
            ) : (
              <FormErrorMessage>
                Mohon Ketikan Nomer WhatsApp dengan benar
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl mb={5} isInvalid={errors.alamat != undefined}>
            <FormLabel>Alamat</FormLabel>
            <Input
              type="text"
              {...register("alamat", { required: true })}
              autoComplete={"off"}
              height={24}
            />
            {!errors.alamat ? (
              <FormHelperText>Masukan Alamat</FormHelperText>
            ) : (
              <FormErrorMessage>Alamat Tidak Boleh Kosong</FormErrorMessage>
            )}
          </FormControl>
          <FormControl mb={5}>
            <Button
              type="submit"
              userSelect={"none"}
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
          </FormControl>
        </Box>
      </Box>
    </Flex>
  );
};

export default Contact;
