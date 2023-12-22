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
import { Education } from "../../../domain/entities";
import EducationForm from "./EducationForm";

interface EducationCardEditButtonProps {
  education: Education;
}

const EducationCardEditButton = ({
  education,
}: EducationCardEditButtonProps) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} aria-label="Edit" size="sm">
        Edit
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update education</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <EducationForm onClose={onClose} education={education} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EducationCardEditButton;
