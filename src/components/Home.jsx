import { Box, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={'full'} alignItems={["center", "stretch"]}>
          <motion.div
            style={{
              height: "80vh",
            }}
            animate={{
              translateY: "20px",
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              w={"full"}
              h={"full"}
              objectFit={"contain"}
              src={btcSrc}
              filter={"grayscale(1)"}
            />
          </motion.div>
        </VStack>

        <VStack w={'full'} alignItems={["center", 'flex-start']}>
          <Text
            fontSize={"6xl"}
            fontStyle={'inherit'}
            textAlign={"center"}
            fontWeight={'bold'}
            color={"whiteAlpha.700"}
            mt={"-20"}
          >
            Crypto-Liv
          </Text>
          <Text
            fontSize={'27px'}
            textAlign={'center'}
            color={"whiteAlpha.700"}
          >
            Check Your Favourite Crypto-Currency on the Go!
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Home;
