import { Flex } from "@chakra-ui/react";
import TutorProfileSubject from "./TutorProfileSubject";

const TutorProfile = () => {
  return (
    <>
      <Flex w={"100%"} direction={"column"}>
        <TutorProfileSubject />
      </Flex>
    </>
  );
};

export default TutorProfile;
