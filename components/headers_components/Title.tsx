import { Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const Title: React.FC<{}> = () => {
  return (
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
  );
};
export default Title;
