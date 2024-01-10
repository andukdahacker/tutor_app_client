import { Divider, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { useParams } from "react-router";
import useUser from "../../../shared/hooks/useUser";
import TutorProfileSubjectAddButton from "./TutorProfileSubjectAddButton";
import TutorProfileSubjectList from "./TutorProfileSubjectList";

const TutorProfileSubject = () => {
  const { userId } = useParams();

  const user = useUser();
  const isOwner = user?.id == userId;
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
