import { AddIcon } from "@chakra-ui/icons";
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
import CreateJobForm, { CreateJobFormProvider } from "./CreateJobForm";

const CreateJobButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        colorScheme="purple"
        size="md"
        display="flex"
        onClick={onOpen}
      >
        Post a Job
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ base: "xs", sm: "md" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a job</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreateJobFormProvider>
              <CreateJobForm />
            </CreateJobFormProvider>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateJobButton;
