import authStore from "@/modules/auth/auth.store";
import Account from "@/modules/auth/components/account.component";
import CreateJobButton from "@/modules/find/jobs/components/CreateJobButton.component";
import { BellIcon, ChatIcon } from "@chakra-ui/icons";
import { Flex, HStack, Show } from "@chakra-ui/react";
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

export default NavBar;
