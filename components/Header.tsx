import useLoading from "@/hooks/useLoading";
import useMatchMedia from "@/hooks/useMatchMedia";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import BaseLink from "./BaseLink";
import MobileLink from "./MobileLink";
const Header = () => {
  const resize = useMatchMedia({ mediaQuery: "(max-width: 62em)" });
  const [open, setOpen] = useState<boolean>(false);
  const loading = useLoading();

  useEffect(() => {
    if (open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [resize]);

  const handleMenu = () => {
    setOpen(true);
  };
  const closeMenu = () => {
    setOpen(false);
  };
  const handleChange = () => {
    setOpen(false);
  };
  // loading
  useLoading(handleChange);
  const router = useRouter();

  return (
    <Box
      as={"header"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      h={24}
    >
      <Link href={"/"}>
        <Heading userSelect={"none"} color={"white"} fontWeight={"extrabold"}>
          UPT&nbsp;
          <Text
            display={"inline"}
            bgGradient="linear(to-r, #2F58CD,  #FF0080)"
            bgClip={"text"}
          >
            KOMP
          </Text>
        </Heading>
      </Link>

      {!resize ? (
        <HStack spacing={"20"} p={7}>
          <BaseLink href="/" active={router.asPath === "/"} title="Home" />
          <BaseLink
            href="/about"
            active={router.asPath === "/about"}
            title="About"
          />
          <BaseLink
            href="/services"
            active={router.asPath === "/services"}
            title="Services"
          />
          <BaseLink
            href="/contact"
            active={router.asPath === "/contact"}
            title="Contact"
          />
        </HStack>
      ) : (
        <>
          <IconButton
            aria-label="__hambuger"
            bgColor={"transparent"}
            borderColor={"gray.500"}
            border={"1px solid"}
            color={"white"}
            _hover={{ bgColor: "transparent" }}
            icon={<HamburgerIcon />}
            onClick={handleMenu}
          ></IconButton>

          {open && (
            <Box
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              position={"fixed"}
              zIndex={9999}
              top={0}
              left={0}
              right={0}
              bottom={0}
              display={"grid"}
              placeItems={"center"}
              bgColor="black"
              _after={{
                content: `""`,
                zIndex: -1,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: "10em",
                width: "10em",
                bgColor: "white",
                position: "absolute",
                borderRadius: "100%",
                m: "auto",
                bgGradient: "radial( #2F58CD,  #FF0080)",
                filter: "blur(3em)",
              }}
            >
              <VStack spacing={5} py={2}>
                <Box as={motion.div} initial={{ y: -20 }} animate={{ y: 0 }}>
                  <MobileLink
                    active={router.asPath === "/"}
                    href="/"
                    title="Home"
                  />
                </Box>
                <Box as={motion.div} initial={{ y: -20 }} animate={{ y: 0 }}>
                  <MobileLink
                    active={router.asPath === "/about"}
                    href="/about"
                    title="About"
                  />
                </Box>
                <Box as={motion.div} initial={{ y: -20 }} animate={{ y: 0 }}>
                  <MobileLink
                    href="/services"
                    active={router.asPath === "/services"}
                    title="Services"
                  />
                </Box>
                <Box as={motion.div} initial={{ y: -20 }} animate={{ y: 0 }}>
                  <MobileLink
                    href="/contact"
                    active={router.asPath === "/contact"}
                    title="Contact"
                  />
                </Box>

                <IconButton
                  aria-label="_close"
                  icon={<CloseIcon />}
                  bgColor={"transparent"}
                  color={"white"}
                  borderColor={"gray"}
                  border={"1px solid"}
                  _hover={{ bgColor: "transparent" }}
                  onClick={closeMenu}
                ></IconButton>
              </VStack>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default memo(Header);
