import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import SignUpForm from "./sign-up-form.component";

const JoinButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        variant="outline"
        borderColor={"cyan.500"}
        color={"cyan.500"}
        onClick={onOpen}
      >
        Join
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>Join Sparkle</Center>
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
