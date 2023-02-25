import { Box, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface IcodeEditor {
  children: ReactNode;
  width?: string;
  fileName?: string;
}
const CodeEditor: React.FC<IcodeEditor> = ({ children, width, fileName }) => {
  return (
    <Box
      w={width != undefined ? width : { base: "100%", lg: "96" }}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box
        h={12}
        bgGradient="linear(to-r, #2F58CD,  #FF0080)"
        w={"full"}
        p={2}
        borderTopRadius={"xl"}
        display={"grid"}
        placeItems={"center"}
        color={"white"}
        boxShadow={"dark-lg"}
      >
        <Text fontWeight={"semibold"}>
          {fileName != undefined ? fileName : "Welcome.txt"}
        </Text>
      </Box>
      <Box
        flex={1}
        borderBottomRadius={"xl"}
        bgColor={"gray.900"}
        boxShadow={"dark-lg"}
        p={1}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CodeEditor;
