import {
  Button,
  Divider,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useSnapshot } from "valtio";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { AuthContext } from "../../auth/components/context/AuthContext";
import EducationCard from "./EducationCard";
import EducationForm from "./EducationForm";

const EducationList = () => {
  const params = useParams();
  const { authStore } = useStoreContext(AuthContext);
  const { user } = useSnapshot(authStore);

  const isOwner = authStore.user?.id == params.userId;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex direction={"column"}>
        <HStack pb={2}>
          <Text fontSize={"xl"}>Education</Text>
          <Spacer />
          {isOwner && (
            <Button onClick={onOpen} aria-label="Add" size="sm">
              Add
            </Button>
          )}
        </HStack>
        <Divider w={"100%"} />
        <Flex w={"100%"} direction={"column"}>
          {user?.education?.map((ed) => {
            return <EducationCard education={ed} key={ed.id} />;
          })}
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Education</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EducationForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EducationList;
