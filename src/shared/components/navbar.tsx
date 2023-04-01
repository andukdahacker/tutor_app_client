import { authStore } from "@/modules/auth/data/auth.store";
import { Flex } from "@chakra-ui/react";
import { useSnapshot } from "valtio";

const NavBar = () => {
  const authSnapShot = useSnapshot(authStore);
  return <Flex w="100%" bg={"blue"}></Flex>;
};

export default NavBar;
