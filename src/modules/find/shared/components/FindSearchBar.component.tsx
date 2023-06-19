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
import { useSnapshot } from "valtio";
import { findStore, findTargets } from "../data/find.store";

const FindSearchBar = () => {
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
                    await findStore.find();
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
