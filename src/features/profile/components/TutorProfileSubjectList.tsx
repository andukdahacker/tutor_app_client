import { Box, Text, VStack } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { AuthContext } from "../../auth/components/context/AuthContext";

const TutorProfileSubjectList = () => {
  const { authStore } = useStoreContext(AuthContext);
  const { user } = useSnapshot(authStore);
  return (
    <>
      <VStack>
        {user?.tutorProfile.tutorProfileSubject?.map((e) => {
          const subject = e.subject;
          return (
            <Box key={e.subjectId}>
              <Text>{subject?.name}</Text>
              <Text>{subject?.description}</Text>
            </Box>
          );
        })}
      </VStack>
    </>
  );
};

export default TutorProfileSubjectList;
