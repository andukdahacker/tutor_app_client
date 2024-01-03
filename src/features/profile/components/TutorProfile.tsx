import { Flex } from "@chakra-ui/react";
import TutorProfileInfo from "./TutorProfileInfo";
import TutorProfileSubject from "./TutorProfileSubject";

const TutorProfile = () => {
  return (
    <>
      <Flex w={"100%"} direction={"column"}>
        <TutorProfileSubject />
        <TutorProfileInfo />
      </Flex>
    </>
  );
};

export default TutorProfile;
