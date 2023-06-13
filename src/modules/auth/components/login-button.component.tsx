import { Link } from "@chakra-ui/next-js";
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
import LoginForm from "./login-form.component";

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

              <Text display={"inline-block"} color={"#4B5563"} fontSize={"sm"}>
                Or&nbsp;
              </Text>

              <Link
                textDecoration="underline"
                href={"/"}
                textColor={"purple.500"}
                fontSize={"sm"}
              >
                sign up a free account
              </Link>
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
