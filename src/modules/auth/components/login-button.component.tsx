import {
  Box,
  Button,
  Center,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import LoginForm from "./login-form.component";

const LoginButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button variant="ghost" onClick={onOpen}>
        Login
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Box textAlign={"center"}>
              <Text color={"purple.500"} fontWeight={"extrabold"} m="4">
                Sign in to your account
              </Text>

              <Text color={"purple.500"} fontWeight={"medium"} fontSize="sm">
                <Text display={"inline-block"} color={"#4B5563"}>
                  Or&nbsp;
                </Text>

                <Link textDecoration="underline" href={"/"} textDecorationColor="purple.500">
                  sign up a free account
                </Link>
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
