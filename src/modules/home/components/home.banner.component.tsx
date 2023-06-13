import AppRoutes from "@/shared/app_routes";
import { Link } from "@chakra-ui/next-js";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";

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

            <Box>
              <Link
                href={AppRoutes.FIND}
                mt={"20px"}
                fontSize={{ base: "12px", sm: "16px" }}
                size={{ base: "sm", md: "md" }}
                colorScheme={"cyan"}
                color="white"
              >
                Get Started
              </Link>
            </Box>
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
