import { Box, Flex } from "@chakra-ui/react";
import ProfileCard from "../features/profile/components/ProfileCard";
import ProfileDetail from "../features/profile/components/ProfileDetail";
import ProfileProvider from "../features/profile/context/profile_provider";

const ProfilePage = () => {
  return (
    <ProfileProvider>
      <Flex w={"100%"}>
        <Box w={"30%"}>
          <ProfileCard />
        </Box>
        <Box w={10} />
        <Box w={"70%"}>
          <ProfileDetail />
        </Box>
      </Flex>
    </ProfileProvider>
  );
};

export default ProfilePage;
