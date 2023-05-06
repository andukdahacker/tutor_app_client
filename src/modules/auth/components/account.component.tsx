import {
  Avatar,
  AvatarBadge,
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
        <Avatar size="sm">
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
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
