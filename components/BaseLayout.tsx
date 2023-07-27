import { ReactNode } from "react";
import Header from "./Header";
import { Box } from "@chakra-ui/react";
import BlurBuble from "./BlurBuble";
import useLoading from "@/hooks/useLoading";
import { motion } from "framer-motion";
import Footer from "./Footer";
interface IbaseLayout {
  children: ReactNode;
  className?: string;
}

const BaseLayout: React.FC<IbaseLayout> = ({ children, className }) => {
  const loading = useLoading();
  return (
    <Box
      className={className}
      h={"100vh"}
      py={{ lg: 16, base: 4 }}
      display={"flex"}
      flexDirection={"column"}
    >
      <Header />
      <Box px={{ lg: "36", base: 6 }}>
        {!loading && (
          <Box
            as={motion.div}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            py={10}
          >
            {children}
          </Box>
        )}
      </Box>
      {/* <Footer /> */}
      <BlurBuble />
    </Box>
  );
};

export default BaseLayout;
