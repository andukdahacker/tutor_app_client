import { Box, Center, Flex } from "@chakra-ui/react";
import ProfileCard from "../features/profile/components/ProfileCard";
import ProfileDetail from "../features/profile/components/ProfileDetail";

const ProfilePage = () => {
  return (
    <>
      <Flex w={"100%"} direction={{ base: "column", md: "row" }} p={10}>
        <Box w={{ base: "100%", md: "30%" }}>
          <Center>
            <ProfileCard />
          </Center>
        </Box>
        <Box w={10} />
        <Box w={{ base: "100%", md: "70%" }} mt={{ base: 10, md: "0" }}>
          <ProfileDetail />
        </Box>
      </Flex>
    </>
  );
};

export default ProfilePage;
