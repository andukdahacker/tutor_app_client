import {
  Box,
  Button,
  Center,
  Container,
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
import SignUpForm from "./sign-up-form.component";

const JoinButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme={"purple"}
        onClick={onOpen}
        display={{ base: "inline-block" }}
        w={{ base: "100%", sm: "fit-content" }}
      >
        Sign up
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={{ base: "xs", sm: "md" }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Box textAlign={"center"}>
              <Text color={"purple.500"} fontWeight={"extrabold"} m="4">
                Sign up an account
              </Text>

              <Text color={"purple.500"} fontWeight={"medium"} fontSize="sm">
                <Text display={"inline-block"} color={"#4B5563"}>
                  Or&nbsp;
                </Text>

                <Link textDecoration="underline" href={"/"} textDecorationColor="purple.500">
                  sign in to your account
                </Link>
              </Text>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SignUpForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default JoinButton;
