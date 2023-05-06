import JoinButton from "@/modules/auth/components/join-button.component";
import LoginButton from "@/modules/auth/components/login-button.component";
import AppRoutes from "@/shared/app_routes";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Logo from "./logo.component";

const NoLogin = () => {
  return (
    <>
      <Logo />
      <Box display={{ base: "block", sm: "none" }} position="relative" w={"100%"} h="8">
        <HamburgerIcon
          position="absolute"
          top={0}
          right={0}
          display={{ base: "block", sm: "none" }}
          w={8}
          h={8}
        />
      </Box>
      <Box>
        <Flex
          display={{ base: "none", sm: "flex" }}
          justify={"space-around"}
          align="center"
          gap={"14px"}
        >
          <LoginButton />
          <JoinButton />
        </Flex>
      </Box>
    </>
  );
};

export default NoLogin;
