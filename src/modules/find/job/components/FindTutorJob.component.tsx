import CardDetail from "@/shared/components/Card/CardDetail.component";
import Footer from "@/shared/components/footer/footer.component";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const FindTutorJob = () => {
  const suggested = [
    {
      id: 1,
      title: "Javascript",
    },
    {
      id: 2,
      title: "React",
    },
    {
      id: 3,
      title: "Spring Boot",
    },
    {
      id: 4,
      title: "Web dev",
    },
    {
      id: 5,
      title: "Web dev",
    },
    {
      id: 6,
      title: "Web dev",
    },
  ];
  return (
    <>
      <Container maxW="container.xl">
        <Text
          textAlign={"center"}
          fontSize={{ base: "24px" }}
          fontWeight={"black"}
          color="purple.500"
          py="25px"
        >
          Find Tutor Job
        </Text>

        <Box maxW="500px" m="0 auto">
          <InputGroup size="sm">
            <Input type="text" placeholder="Enter a subject" borderRadius="4px" />
            <InputRightAddon borderRadius="0 4px 4px 0">
              <SearchIcon />
            </InputRightAddon>
          </InputGroup>
        </Box>

        <Flex alignItems="center" m="35px 0">
          <Text
            fontWeight="bold"
            lineHeight="7"
            mr={{ base: "10px", sm: "30px" }}
            display={{ base: "none", sm: "block" }}
          >
            Suggested
          </Text>
          <Box
            display="flex"
            flexDirection="row"
            gap="4"
            flexWrap={{ base: "nowrap", sm: "wrap" }}
            overflow={{ base: "scroll", sm: "auto" }}
          >
            {suggested.map((item) => (
              <Box key={item.id}>
                <Button size={{ base: "sm", lg: "md" }} variant="outline" colorScheme="gray">
                  {item.title}
                </Button>
              </Box>
            ))}
          </Box>
        </Flex>

        <CardDetail
          title1="Most Recent Jobs in "
          title2={"Web Programming"}
          cardTitle="Job Title"
        />

        <CardDetail
          title1="Most Recent Jobs in "
          title2={"Web Programming"}
          cardTitle="Job Title"
        />

        <Footer />
      </Container>
    </>
  );
};

export default FindTutorJob;
