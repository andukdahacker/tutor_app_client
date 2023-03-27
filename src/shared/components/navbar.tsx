import { authStore } from "@/modules/auth/data/auth.store";
import { Button, CircularProgress, Flex } from "@chakra-ui/react";
import { useSnapshot } from "valtio";

const NavBar = () => {
  const authSnapShot = useSnapshot(authStore);
  return (
    <Flex w="100%" bg={"blue"}>
      {authSnapShot.isLoading ? (
        <CircularProgress />
      ) : (
        <Button onClick={() => authStore.login()}>Login</Button>
      )}
    </Flex>
  );
};

export default NavBar;
