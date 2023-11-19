import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RoutesPath } from "../../../routes/router";

const HomeBanner = () => {
  return (
    <Box backgroundColor="purple.500">
      <Container maxW="container.xl">
        <Flex
          alignItems={"center"}
          direction={{ base: "column", sm: "row" }}
          textAlign={{ base: "center", sm: "left" }}
          mt={{ base: "30px", sm: "0px" }}
        >
          <Box
            fontWeight="bold"
            fontSize={{ base: "14px", sm: "20px", md: "30px", lg: "36px" }}
          >
            <Text as="span" color="white">
              Kick-start
            </Text>
            <Text as="span" color="white">
              {" "}
              your learning journey with{" "}
            </Text>
            <Text as="span" color="white">
              SPARKLE
            </Text>

            <Link to={RoutesPath.findPage}>Get Started</Link>
          </Box>

          <Box w="100%" h="auto" maxW={"600px"}>
            <Image
              boxSize="100%"
              objectFit="cover"
              src="/Home/home-banner.png"
              alt="Banner"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default HomeBanner;
