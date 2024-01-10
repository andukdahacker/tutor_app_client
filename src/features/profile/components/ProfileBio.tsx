import { EditIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  IconButton,
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
import { useParams } from "react-router";
import { useSnapshot } from "valtio";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { USER_ID } from "../../auth/store/constants";
import { ProfileContext } from "../context/profile_context";
import ProfileBioForm from "./ProfileBioForm";

const ProfileBio = () => {
  const params = useParams();
  const { profileStore } = useStoreContext(ProfileContext);
  const { learnerProfile } = useSnapshot(profileStore);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const isOwner = localStorage.getItem(USER_ID) == params.userId;

  return (
    <>
      <Flex direction={"column"}>
        <HStack pb={2}>
          <Text fontSize={"xl"}>Bio</Text>
          <Spacer />
          {isOwner && (
            <>
              <Flex justifyContent="center">
                <IconButton
                  onClick={onOpen}
                  aria-label="Edit"
                  size="sm"
                  icon={<EditIcon />}
                />
              </Flex>
            </>
          )}
        </HStack>
        <Text mt={6}>{learnerProfile?.bio ?? ""}</Text>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update profile bio</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProfileBioForm bio={learnerProfile?.bio ?? ""} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileBio;
