import Account from "@/modules/auth/components/account.component";
import JoinButton from "@/modules/auth/components/join-button.component";
import LoginButton from "@/modules/auth/components/login-button.component";
import authStore from "@/modules/auth/stores/auth.store";
import AppRoutes from "@/shared/app_routes";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import Link from "next/link";
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
      justifyContent={"space-around"}
      alignItems="center"
      bg={"white"}
      borderBottom={"1px"}
      borderBottomColor={"gray.200"}
      padding={"4"}
    >
      <Box flex={2}>
        <Logo />
      </Box>

      <Box flex={1}>
        {authState.isLoading ? (
          <Spinner />
        ) : (
          <>
            {authState.isAuthenticated ? (
              <Account />
            ) : (
              <Flex justify={"space-around"} align="center">
                <Link href={AppRoutes.HOME_ROUTE}>How Sparkle works</Link>
                <Link href={AppRoutes.HOME_ROUTE}>Become a Tutor</Link>
                <LoginButton />
                <JoinButton />
              </Flex>
            )}
          </>
        )}
      </Box>
    </Flex>
  );
};

export default NavBar;
