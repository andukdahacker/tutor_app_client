import authStore from "@/modules/auth/auth.store";
import Account from "@/modules/auth/components/account.component";
import { AddIcon, BellIcon, ChatIcon } from "@chakra-ui/icons";
import { Button, Flex, HStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import Logo from "./logo.component";

const NavBar = () => {
  const authState = useSnapshot(authStore);

  useEffect(() => {
    async function checkAuth() {
      await authStore.checkIfAuthenticated();
    }

    checkAuth();
  }, []);

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
      </HStack>

      {/* 

   



      <HamburgerIcon w={8} h={8} /> */}
    </Flex>
  );
};

export default NavBar;
