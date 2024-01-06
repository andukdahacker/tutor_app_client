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
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { AuthContext } from "../../auth/components/context/AuthContext";
import AddTutorInfoForm from "./AddTutorInfoForm";

const AddTutorInfoButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { authStore } = useStoreContext(AuthContext);
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
              tutorFee={authStore.user?.tutorProfile.tutorFee}
              jobMethod={authStore.user?.tutorProfile?.jobMethod}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTutorInfoButton;
