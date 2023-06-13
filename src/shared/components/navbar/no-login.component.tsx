import JoinButton from "@/modules/auth/components/join-button.component";
import LoginButton from "@/modules/auth/components/login-button.component";
import { Box, Show } from "@chakra-ui/react";
import Logo from "./logo.component";

const NoLogin = () => {
  return (
    <>
      <Logo />
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems="center"
        gap={"14px"}
      >
        <Show above="sm">
          <LoginButton />
        </Show>
        <JoinButton />
      </Box>
    </>
  );
};

export default NoLogin;
