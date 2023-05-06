import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const HomeKickStart = () => {
  return (
    <Box
      display={"flex"}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      w="100%"
      backgroundColor="purple.500"
      height={"234px"}
      textAlign={"center"}
      gap="20px"
      mt="44px"
    >
      <Text fontWeight="bold" fontSize="30px" color="#3DC7F4">
        Kick-start your learning today!
      </Text>
      <Button colorScheme={"cyan"} color="white" size="lg">
        Sign up
      </Button>
    </Box>
  );
};

export default HomeKickStart;
