import Account from "@/modules/auth/components/account.component";
import { BellIcon, ChatIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import Logo from "./logo.component";

const Logged = () => {
  return (
    <>
      <Logo />

      <Flex flex={1} alignItems="flex-end">
        <InputGroup>
          <InputLeftAddon>
            <SearchIcon />
          </InputLeftAddon>
          <Input type="text" placeholder="placeholder" />
          <InputRightElement w="10rem">
            <Select placeholder="Student">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </InputRightElement>
        </InputGroup>
      </Flex>

      <ChatIcon w={6} h={6} />

      <BellIcon w={6} h={6} />

      <Account />
    </>
  );
};

export default Logged;
