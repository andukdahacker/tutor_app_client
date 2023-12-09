import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useSnapshot } from "valtio";

import { findTargets } from "../../store/find_store";
import { FindContext } from "../context/FindContext";

const FindSearchBar = () => {
  const { findStore } = useContext(FindContext);
  const findState = useSnapshot(findStore);
  return (
    <Box maxW="500px" m="0 auto">
      <InputGroup size={"md"}>
        <Input
          type="text"
          placeholder="Enter a subject"
          borderRadius="4px"
          onChange={(e) => {
            findStore.changeSearchString(e.target.value);
          }}
          value={findState.searchString}
        />
        <InputRightElement w="fit-content">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {findState.findTarget}
            </MenuButton>
            <MenuList>
              {findTargets.map((target) => (
                <MenuItem
                  key={target}
                  onClick={async () => {
                    if (findState.findTarget == target) return;

                    findStore.changeFindTarget(target);
                  }}
                >
                  {target}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default FindSearchBar;
