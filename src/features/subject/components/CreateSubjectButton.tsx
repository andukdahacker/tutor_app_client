import { AddIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import CreateSubjectForm from "./CreateSubjectForm";

const CreateSubjectButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        icon={<AddIcon />}
        colorScheme="purple"
        size="md"
        display="flex"
        onClick={onOpen}
        aria-label="Create new subject"
      />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ base: "xs", sm: "md" }}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new subject</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreateSubjectForm onCreateSubjectSuccess={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateSubjectButton;
