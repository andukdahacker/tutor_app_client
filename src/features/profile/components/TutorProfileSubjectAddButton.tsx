import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import AddTutorProfileSubjecForm from "./AddTutorProfileSubjectForm";

const TutorProfileSubjectAddButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Add</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add subject</ModalHeader>
          <ModalCloseButton />

          <ModalBody p={10}>
            <AddTutorProfileSubjecForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TutorProfileSubjectAddButton;
