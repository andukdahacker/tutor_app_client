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
import { useSnapshot } from "valtio";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { ProfileContext } from "../context/profile_context";
import AddTutorInfoForm from "./AddTutorInfoForm";

const AddTutorInfoButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { profileStore } = useStoreContext(ProfileContext);
  const { tutorProfile } = useSnapshot(profileStore);
  return (
    <>
      <Button onClick={onOpen}>Add</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add tutor info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddTutorInfoForm
              onClose={onClose}
              tutorFee={tutorProfile?.tutorFee}
              jobMethod={tutorProfile?.jobMethod}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTutorInfoButton;
