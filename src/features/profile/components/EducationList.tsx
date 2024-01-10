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
import useUser from "../../../shared/hooks/useUser";
import { ProfileContext } from "../context/profile_context";
import EducationCard from "./EducationCard";
import EducationForm from "./EducationForm";

const EducationList = () => {
  const params = useParams();

  const user = useUser();
  const isOwner = user?.id == params.userId;

  const { profileStore } = useStoreContext(ProfileContext);
  const { education } = useSnapshot(profileStore);

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
          {education?.map((ed) => {
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
