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
import { Education } from "../../../domain/entities";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { ProfileContext } from "../context/profile_context";

interface EducationCardDeleteButtonProps {
  education: Education;
}

const EducationCardDeleteButton = ({
  education,
}: EducationCardDeleteButtonProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { profileStore } = useStoreContext(ProfileContext);
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async () => {
    setIsLoading(true);
    await profileStore.deleteEducation(education.id);
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
          <ModalHeader>Delete education</ModalHeader>
          <ModalCloseButton />

          <ModalBody>Are you sure you want to delete education?</ModalBody>

          <ModalFooter>
            <Flex w={"100%"} justify={"center"}>
              <Button p={4} m={4} onClick={handleDelete} isLoading={isLoading}>
                Yes
              </Button>
              <Button p={4} m={4} onClick={onClose}>
                No
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EducationCardDeleteButton;
