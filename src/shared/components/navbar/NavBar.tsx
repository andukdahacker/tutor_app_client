import { BellIcon, ChatIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Show } from "@chakra-ui/react";

import Account from "../../../features/auth/components/Account";

import JoinButton from "../../../features/auth/components/JoinButton";
import LoginButton from "../../../features/auth/components/LoginButton";
import CreateJobButton from "../../../features/job/components/CreateJobButton";
import Logo from "./Logo";

interface NavBarProps {
  isAuthenticated: boolean;
}

const NavBar = ({ isAuthenticated }: NavBarProps) => {
  if (!isAuthenticated) {
    return (
      <Flex
        w="100%"
        justifyContent={"space-between"}
        alignItems={"center"}
        bg={"white"}
        borderBottom={"1px"}
        borderBottomColor={"gray.200"}
        padding={"4"}
      >
        <UnauthenticatedNavBar />
      </Flex>
    );
  }

  return (
    <Flex
      w="100%"
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={"white"}
      borderBottom={"1px"}
      borderBottomColor={"gray.200"}
      padding={"4"}
    >
      <Logo />
      <HStack>
        <Show above="sm">
          <CreateJobButton />
        </Show>
        <ChatIcon w={6} h={6} />
        <BellIcon w={6} h={6} />
        <Account />
      </HStack>
    </Flex>
  );
};

const UnauthenticatedNavBar = () => {
  return (
    <>
      <Logo />
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems="center"
        gap={"14px"}
      >
        <Show above="sm">
          <LoginButton />
        </Show>
        <JoinButton />
      </Box>
    </>
  );
};

export default NavBar;
