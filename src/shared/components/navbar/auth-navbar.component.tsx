import Account from "@/modules/auth/components/account.component";
import {
  AddIcon,
  BellIcon,
  ChatIcon,
  HamburgerIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import Logo from "./logo.component";

const AuthenticatedNavBar = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        gap={{ base: "14px", md: "14px", lg: "30px" }}
      >
        <Logo />
        <InputGroup
          size="sm"
          minW={{ sm: "300px", md: "390px", lg: "500px" }}
          display={{ base: "none", sm: "flex" }}
        >
          <Input
            type="text"
            placeholder="Search on Sparkle"
            borderRadius="4px"
          />
          <InputRightAddon borderRadius="0 4px 4px 0">
            <SearchIcon />
          </InputRightAddon>
        </InputGroup>
        <Box>
          <Button
            leftIcon={<AddIcon />}
            colorScheme="purple"
            size={{ md: "sm", lg: "md" }}
            display={{ base: "none", md: "flex" }}
          >
            Post a Job
          </Button>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        gap={{ base: "30px", sm: "14px", md: "18px" }}
      >
        <Box>
          <ChatIcon w={6} h={6} />
        </Box>

        <Box>
          <BellIcon w={6} h={6} />
        </Box>

        <Box>
          <Account />
        </Box>

        <Box>
          <HamburgerIcon w={8} h={8} />
        </Box>
      </Box>
    </>
  );
};

export default AuthenticatedNavBar;
