import authStore from "@/modules/auth/auth.store";
import { Flex, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import AuthenticatedNavBar from "./auth-navbar.component";
import UnauthenticatedNavBar from "./unauth-navbar.component";

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
        <>
          {authState.isAuthenticated ? (
            <AuthenticatedNavBar />
          ) : (
            <UnauthenticatedNavBar />
          )}
        </>
      )}
    </Flex>
  );
};

export default NavBar;
