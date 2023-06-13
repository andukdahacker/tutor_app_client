import {
  Box,
  Button,
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
        Join
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
                Sign up an account
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
                sign in to your account
              </Link>
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
