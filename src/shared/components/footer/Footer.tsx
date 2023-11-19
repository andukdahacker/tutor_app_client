import { Box, Container, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RoutesPath } from "../../../routes/router";

const Footer = () => {
  return (
    <>
      <Container
        maxW="container.lg"
        display={{ base: "flex", sm: "block" }}
        justifyContent={{ base: "center" }}
      >
        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          alignItems={"flex-start"}
          justifyContent="space-between"
          my="44px"
          gap={{ base: "30px", sm: "20px" }}
        >
          <Box display="flex" gap={"14px"} alignItems="center">
            <Link to={RoutesPath.root}>
              <Box
                w={{ base: "26px", sm: "40px" }}
                h={{ base: "42px", sm: "56px" }}
              >
                <Image boxSize="100%" src="/logo.png" alt="Sparkle" />
              </Box>
            </Link>

            <Box>
              <Text
                lineHeight={"1"}
                color={"#5533F6"}
                fontSize={{ base: 32, md: 40 }}
                fontWeight={"extrabold"}
                casing="uppercase"
                textAlign={"left"}
              >
                Sparkle
              </Text>
              <Text fontWeight="medium" fontSize="sm">
                Spark up your learning journey
              </Text>
            </Box>
          </Box>

          <Box>
            <Text
              textTransform="uppercase"
              fontWeight="bold"
              fontSize="20px"
              mb="8px"
            >
              WITH SPARKLE
            </Text>
            <SimpleGrid spacing="20px">
              <Link style={{ textDecoration: "none" }} to="/">
                <Text fontSize="15px" fontWeight="light">
                  Home
                </Text>
              </Link>

              <Link style={{ textDecoration: "none" }} to="/">
                <Text fontSize="15px" fontWeight="light">
                  Spark Buddy
                </Text>
              </Link>

              <Link style={{ textDecoration: "none" }} to="/">
                <Text fontSize="15px" fontWeight="light">
                  Spark Tutor
                </Text>
              </Link>
            </SimpleGrid>
          </Box>

          <Box>
            <Text
              textTransform="uppercase"
              fontWeight="bold"
              fontSize="20px"
              mb="8px"
            >
              SOCIAL MEDIA
            </Text>
            <Link style={{ textDecoration: "none" }} to="/">
              <Image
                w="30px"
                h="30px"
                objectFit="cover"
                src="/Home/facebook.png"
                alt="Facebook"
              />
            </Link>
          </Box>
        </Box>
      </Container>
      <Box
        fontSize="13px"
        textAlign="center"
        py="20px"
        borderTop="1px"
        borderColor="#C9C9C9"
      >
        <Text fontWeight="light">
          *Illustration credited to: UOL Edtech Behance.
        </Text>
        <Text fontWeight="bold">All rights reserved @ StudBud 2022.</Text>
      </Box>
    </>
  );
};

export default Footer;
