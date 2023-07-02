import { Avatar, Box, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://avatars.githubusercontent.com/u/92635176?s=400&u=777752dfe24ff97e60930a88d5ab9b4524561334&v=4";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "stretch"]}>
          <Text fontWeight={"bold"} textAlign={'center'}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
            p={'3'}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack 
          w={'full'}
          borderLeft={['none','1px solid white']}
          borderRight={['none','1px solid white']}
        >
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack>

        <VStack 
          w={'full'}
        >
          <Heading textTransform={'uppercase'} size={'md'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a href="https://www.linkedin.com/in/arya-sarkar-933a5b182/" target='blank'>LinkedIn</a> 
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a href="https://github.com/Aryasarkar008" target='blank'>Github</a> 
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a href="https://www.instagram.com/arya_luke_008/" target='blank'>Instagram</a> 
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
