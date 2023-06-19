import Account from "@/modules/auth/components/account.component";
import { AddIcon, BellIcon, ChatIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex } from "@chakra-ui/react";
import Logo from "./logo.component";

const AuthenticatedNavBar = () => {
  return (
    <Flex justifyContent={"space-between"} w={"100%"}>
      <Logo />
      <Box
        display="flex"
        alignItems="center"
        gap={{ base: "30px", sm: "14px", md: "18px" }}
      >
        <Button
          leftIcon={<AddIcon />}
          colorScheme="purple"
          size={{ md: "sm", lg: "md" }}
          display={{ base: "none", md: "flex" }}
        >
          Post a Job
        </Button>
        <ChatIcon w={6} h={6} />

        <BellIcon w={6} h={6} />

        <Account />

        <HamburgerIcon w={8} h={8} />
      </Box>
    </Flex>
  );
};

export default AuthenticatedNavBar;
