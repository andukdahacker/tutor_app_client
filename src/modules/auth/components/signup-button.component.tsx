import { Button, Spinner } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import signUpStore from "../stores/signup.store";

const SignUpButton = () => {
  const signUpState = useSnapshot(signUpStore);

  return (
    <Button
      onClick={() =>
        signUpStore.signUp({
          username: "anduc",
          email: "doanduc227@gmail.com",
          password: "Ducdeptraino1@",
        })
      }
    >
      {signUpState.isLoading ? <Spinner /> : <>Sign Up</>}
    </Button>
  );
};

export default SignUpButton;
