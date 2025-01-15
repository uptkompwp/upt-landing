import useLoading from "@/hooks/useLoading";
import { setMenuMobile } from "@/store/features/menuSlice";
import { RootState } from "@/store/store";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, IconButton, VStack, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import MobileLink from "../MobileLink";

type Props = {};

export default function MobileMenu({}: Props) {
  const [resize] = useMediaQuery("(max-width: 62em)");

  const { openMobile } = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();

  const router = useRouter();

  const handleMenu = () => {
    dispatch(setMenuMobile(true));
  };
  const closeMenu = () => {
    dispatch(setMenuMobile(false));
  };
  const handleChange = () => {
    dispatch(setMenuMobile(false));
  };

  useLoading(handleChange);
  return (
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

      {openMobile && (
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
      href="/galleries"
      active={router.asPath === "/galleries"}
      title="Galleries"
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
  );
}
