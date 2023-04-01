import { Button, CircularProgress } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import { authStore } from "../data/auth.store";

const LogOutButton = () => {
  const snapShot = useSnapshot(authStore);

  if (!snapShot.isAuthenticated) return null;

  return (
    <Button onClick={() => authStore.logOut()}>
      {snapShot.logOutState.isLoading ? <CircularProgress /> : <>Log out</>}
    </Button>
  );
};

export default LogOutButton;
