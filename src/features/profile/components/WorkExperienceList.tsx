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
import WorkExperienceCard from "./WorkExperienceCard";
import WorkExperienceForm from "./WorkExperienceForm";

const WorkExperienceList = () => {
  const params = useParams();
  const user = useUser();
  const { profileStore } = useStoreContext(ProfileContext);
  const { workExperience } = useSnapshot(profileStore);

  const isOwner = user?.id == params.userId;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex direction={"column"}>
        <HStack pb={2}>
          <Text fontSize={"xl"}>Work experience</Text>
          <Spacer />
          {isOwner && (
            <Button onClick={onOpen} aria-label="Add" size="sm">
              Add
            </Button>
          )}
        </HStack>
        <Divider w={"100%"} />
        <Flex w={"100%"} direction={"column"}>
          {workExperience?.map((we) => {
            return <WorkExperienceCard workExperiece={we} key={we.id} />;
          })}
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <WorkExperienceForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WorkExperienceList;
