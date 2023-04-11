import LoginButton from "@/modules/auth/components/login-button.component";
import LogOutButton from "@/modules/auth/components/logout-button.component";
import SignUpButton from "@/modules/auth/components/signup-button.component";
import { authStore } from "@/modules/auth/data/auth.store";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSnapshot } from "valtio";

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
      bg={"white"}
      borderBottom={"1px"}
      borderBottomColor={"gray.200"}
      padding={"4"}
    >
      {authState.isLoading ? (
        <Spinner />
      ) : (
        <Box>
          {authState.isAuthenticated ? (
            <LogOutButton />
          ) : (
            <Box>
              <LoginButton />
              <SignUpButton />
            </Box>
          )}
          <div>{authState.user?.username}</div>
          <div>{authState.user?.email}</div>
        </Box>
      )}
    </Flex>
  );
};

export default NavBar;
