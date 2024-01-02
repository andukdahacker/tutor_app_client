import { Divider, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import TutorProfileSubjectAddButton from "./TutorProfileSubjectAddButton";
import TutorProfileSubjectList from "./TutorProfileSubjectList";

const TutorProfileSubject = () => {
  return (
    <>
      <Flex w={"100%"} direction={"column"}>
        <HStack w={"100%"} pb={2}>
          <Text>Skilled Subjects</Text>
          <Spacer />
          <TutorProfileSubjectAddButton />
        </HStack>
        <Divider />
        <TutorProfileSubjectList />
      </Flex>
    </>
  );
};

export default TutorProfileSubject;
