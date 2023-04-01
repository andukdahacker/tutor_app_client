import { Button, CircularProgress } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import { authStore } from "../data/auth.store";

const LoginButton = () => {
  const snapShot = useSnapshot(authStore);
  if (snapShot.isAuthenticated) return null;
  return (
    <Button
      onClick={() =>
        authStore.logIn({ email: "duc@gmail.com", password: "Ducdeptraino1@" })
      }
    >
      {snapShot.loginState.isLoading ? <CircularProgress /> : <>Sign in</>}
    </Button>
  );
};

export default LoginButton;
