import { Box } from "@chakra-ui/react";

const BlurBuble = () => {
  return (
    <Box
      position={"absolute"}
      top={0}
      right={0}
      bottom={0}
      left={0}
      style={{ filter: "blur(3em)" }}
      zIndex={-1}
      _before={{
        content: `""`,
        width: { base: "6em", lg: "10em" },
        height: { base: "6em", lg: "10em" },
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: "-100%",
        margin: "auto",
        borderRadius: "100%",
        bgGradient: "radial( #2F58CD,  #FF0080)",
      }}
      _after={{
        content: `""`,
        width: { base: "6em", lg: "10em" },
        height: { base: "6em", lg: "10em" },
        position: "absolute",
        top: '10em',
        left: 0,
        right: "-100%",
        margin: "auto",
        borderRadius: "100%",
        bgGradient: "radial( #2F58CD,  #FF0080)",
      }}
    ></Box>
  );
};

export default BlurBuble;
