import JoinButton from "@/modules/auth/components/join-button.component";
import LoginButton from "@/modules/auth/components/login-button.component";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Logo from "./logo.component";

const NoLogin = () => {
  return (
    <>
      <Logo />
      <Box display={{ base: "block", sm: "none" }} position="relative" h="8">
        <Menu>
          <MenuButton>
            <HamburgerIcon top={0} right={0} display={{ base: "block", sm: "none" }} w={8} h={8} />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <LoginButton />
            </MenuItem>
            <MenuItem>
              <JoinButton />
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box
        display={{ base: "none", sm: "flex" }}
        justifyContent={"space-around"}
        alignItems="center"
        gap={"14px"}
      >
        <LoginButton />
        <JoinButton />
      </Box>
    </>
  );
};

export default NoLogin;
