import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tag,
  TagCloseButton,
  TagLabel,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { TutorProfileSubject } from "../../../domain/entities";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { AuthContext } from "../../auth/components/context/AuthContext";
import { ProfileContext } from "../context/profile_context";

interface TutorProfileSubjectItemProps {
  tutorProfileSubject: TutorProfileSubject;
}

const TutorProfileSubjectItem = ({
  tutorProfileSubject,
}: TutorProfileSubjectItemProps) => {
  const subject = tutorProfileSubject.subject;

  const { profileStore } = useStoreContext(ProfileContext);
  const { authStore } = useStoreContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const { onClose, onOpen, isOpen } = useDisclosure();

  const isOwner =
    authStore.user?.tutorProfile.id == tutorProfileSubject.tutorId;

  const deleteTutorProfileSubject = async () => {
    setIsLoading(true);
    const result = await profileStore.deleteTutorProfileSubject({
      subjectId: tutorProfileSubject.subjectId,
      tutorProfileId: tutorProfileSubject.tutorId,
    });
    setIsLoading(false);
    if (result) {
      authStore.deleteTutorProfileSubject(result.subjectId);
    }
    onClose();
  };

  return (
    <>
      <Tooltip label={`${subject?.description ?? ""}`}>
        <Tag size={"lg"}>
          <TagLabel>{subject?.name}</TagLabel>
          {isOwner && (
            <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
              <PopoverTrigger>
                <TagCloseButton />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Are you sure you want to delete?</PopoverHeader>
                <PopoverBody>
                  <Flex justify={"center"}>
                    <Button
                      isLoading={isLoading}
                      onClick={deleteTutorProfileSubject}
                      mr={4}
                    >
                      Yes
                    </Button>
                    <Button onClick={onClose}>No</Button>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          )}
        </Tag>
      </Tooltip>
    </>
  );
};

export default TutorProfileSubjectItem;
