import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { WorkExperience } from "../../../domain/entities";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { ProfileContext } from "../context/profile_context";

interface WorkExperienceDeleteButtonProps {
  workExperience: WorkExperience;
}

const WorkExperienceDeleteButton = ({
  workExperience,
}: WorkExperienceDeleteButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { profileStore } = useStoreContext(ProfileContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    await profileStore.deleteWorkExperience(workExperience.id);
    setIsLoading(false);
    onClose();
  };
  return (
    <>
      <Button onClick={onOpen} aria-label="Delete" size="sm">
        Delete
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update work experience</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            Are you sure you want to delete work experience?
          </ModalBody>

          <ModalFooter>
            <Flex w={"100%"} justify={"center"}>
              <Button p={4} m={4} onClick={handleDelete} isLoading={isLoading}>
                Yes
              </Button>
              <Button onClick={onClose} p={4} m={4}>
                No
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WorkExperienceDeleteButton;
