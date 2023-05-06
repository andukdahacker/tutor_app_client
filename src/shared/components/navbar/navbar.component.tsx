import authStore from "@/modules/auth/stores/auth.store";
import { Flex, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import Logged from "./logged.component";
import NoLogin from "./no-login.component";

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
      {authState.isLoading ? (
        <Spinner />
      ) : (
        <>{authState.isAuthenticated ? <Logged /> : <NoLogin />}</>
      )}
    </Flex>
  );
};

export default NavBar;
