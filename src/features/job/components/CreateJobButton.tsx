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
import { CreateJobFormProvider } from "../context/create_job_form_provider";
import CreateJobForm from "./CreateJobForm";

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
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a job</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreateJobFormProvider>
              <CreateJobForm onCreateJobSuccess={onClose} />
            </CreateJobFormProvider>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateJobButton;
