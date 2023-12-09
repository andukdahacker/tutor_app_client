import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  AvatarBadge,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import { router } from "../../../routes/router";
import LogOutButton from "./LogOutButton";
import { AuthContext } from "./context/AuthContext";

const Account = () => {
  const { authStore } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const cancelRef = useRef(null);
  const authState = useSnapshot(authStore);
  return (
    <>
      <Menu>
        <MenuButton>
          <Avatar size="sm">
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() => router.navigate(`/profile/${authState.user?.id}`)}
          >
            Profile
          </MenuItem>
          <MenuItem>Dashboard</MenuItem>
          <MenuItem onClick={onOpen}>
            <LogOutButton />
          </MenuItem>
        </MenuList>
      </Menu>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Log out
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure you want to log out?</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={async () => {
                  setIsLoading(true);
                  authStore.logOut().then(() => {
                    setIsLoading(false);
                    return onClose();
                  });
                }}
                isLoading={isLoading}
                ml={3}
              >
                Log out
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Account;
