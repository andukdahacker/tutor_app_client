import { Button, Spinner } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import loginStore from "../stores/login.store";

const LoginButton = () => {
  const loginState = useSnapshot(loginStore);

  return (
    <Button
      onClick={() =>
        loginStore.logIn({
          email: "doanduc227@gmail.com",
          password: "Ducdeptraino1@",
        })
      }
    >
      {loginState.isLoading ? <Spinner /> : <>Sign in</>}
    </Button>
  );
};

export default LoginButton;
