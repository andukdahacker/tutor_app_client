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
import { WorkExperience } from "../../../domain/entities";
import WorkExperienceForm from "./WorkExperienceForm";

interface WorkExperienceEditButtonProps {
  workExperience: WorkExperience;
}

const WorkExperienceEditButton = ({
  workExperience,
}: WorkExperienceEditButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} aria-label="Edit" size="sm">
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update work experience</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <WorkExperienceForm
              onClose={onClose}
              workExperience={workExperience}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WorkExperienceEditButton;
