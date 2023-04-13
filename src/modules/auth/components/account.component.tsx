import {
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import LogOutButton from "./logout-button.component";

const Account = () => {
  return (
    <Menu>
      <MenuButton>
        <Avatar />
      </MenuButton>
      <MenuList>
        <MenuItem>Learner profile</MenuItem>
        <MenuItem>Tutor profile</MenuItem>
        <MenuDivider />
        <MenuItem>
          <LogOutButton />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Account;
