import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import LoginForm from "./LoginForm";

const LoginButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        variant="ghost"
        onClick={onOpen}
        w={{ base: "100%", sm: "fit-content" }}
      >
        Login
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ base: "xs", sm: "md" }}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <Box textAlign={"center"}>
              <Text color={"purple.500"} fontWeight={"extrabold"} m="4">
                Sign in to your account
              </Text>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LoginForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginButton;
