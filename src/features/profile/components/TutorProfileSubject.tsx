import { Divider, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { useParams } from "react-router";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { AuthContext } from "../../auth/components/context/AuthContext";
import TutorProfileSubjectAddButton from "./TutorProfileSubjectAddButton";
import TutorProfileSubjectList from "./TutorProfileSubjectList";

const TutorProfileSubject = () => {
  const { authStore } = useStoreContext(AuthContext);
  const { userId } = useParams();

  const isOwner = authStore.user?.id == userId;
  return (
    <>
      <Flex w={"100%"} direction={"column"}>
        <HStack w={"100%"} pb={2}>
          <Text>Skilled Subjects</Text>
          <Spacer />
          {isOwner && <TutorProfileSubjectAddButton />}
        </HStack>
        <Divider />
        <TutorProfileSubjectList />
      </Flex>
    </>
  );
};

export default TutorProfileSubject;
