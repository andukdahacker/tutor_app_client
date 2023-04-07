import { Button, CircularProgress } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import { authStore } from "../data/auth.store";

const SignUpButton = () => {
  const snapShot = useSnapshot(authStore);
  if (snapShot.isAuthenticated) return null;
  return (
    <Button
      onClick={() =>
        authStore.signUp({
          username: "anduc",
          email: "doanduc227@gmail.com",
          password: "Ducdeptraino1@",
        })
      }
    >
      {snapShot.signUpState.isLoading ? <CircularProgress /> : <>Sign Up</>}
    </Button>
  );
};

export default SignUpButton;
