import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const HomeBanner = () => {
  return (
    <Container maxW="container.xl">
      <Flex
        alignItems={"center"}
        direction={{ base: "column", sm: "row" }}
        textAlign={{ base: "center", sm: "left" }}
        mt={{ base: "30px", sm: "0px" }}
      >
        <Box fontWeight="bold" fontSize={{ base: "14px", sm: "20px", md: "30px", lg: "36px" }}>
          <Text as="span" color="purple.500">
            Kick-start{" "}
          </Text>
          <Text as="span">your learning journey with </Text>
          <Text as="span" color="purple.500">
            SPARKLE
          </Text>

          <Box>
            <Button
              mt={"20px"}
              fontSize={{ base: "12px", sm: "16px" }}
              size={{ base: "sm", md: "md" }}
              colorScheme={"purple"}
            >
              Get Started
            </Button>
          </Box>
        </Box>

        <Box w="100%" h="auto" maxW={"500px"}>
          <Image boxSize="100%" objectFit="cover" src="home/home-banner.png" alt="Banner" />
        </Box>
      </Flex>
    </Container>
  );
};

export default HomeBanner;
