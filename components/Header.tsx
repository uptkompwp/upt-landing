import { setMobile } from "@/store/features/menuSlice";
import { RootState } from "@/store/store";
import { Box, HStack, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BaseLink from "./BaseLink";
import MobileMenu from "./headers_components/MobileMenu";
import Title from "./headers_components/Title";
const Header = () => {
  const [resize] = useMediaQuery("(max-width: 62em)");
  const { mobile } = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(setMobile(resize));
  }, [resize]);
  return (
    <Box
      as={"header"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      h={24}
      position={"sticky"}
      top={0}
      py={4}
      zIndex={9999}
      bg={"black"}
    >
      <Box
        px={{ lg: "36", base: 6 }}
        display={"flex"}
        justifyContent={"space-between"}
        w={"full"}
        alignItems={"center"}
        h={"full"}
      >
        <Title />

        {mobile ? (
          <MobileMenu />
        ) : (
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
        )}
      </Box>
    </Box>
  );
};

export default memo(Header);
