import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { AuthContext } from "./context/AuthContext";

const LogOutButton = () => {
  const { authStore } = useStoreContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const cancelRef = useRef(null);

  return (
    <>
      <Box
        onClick={() => {
          onOpen();
        }}
      >
        Log out
      </Box>

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

export default LogOutButton;
