import { Flex } from "@chakra-ui/react";
import EducationList from "./EducationList";
import ProfileBio from "./ProfileBio";
import WorkExperienceList from "./WorkExperienceList";

const ProfileAbout = () => {
  return (
    <>
      <Flex direction={"column"} gap={10} w={"80%"}>
        <ProfileBio />
        <WorkExperienceList />
        <EducationList />
      </Flex>
    </>
  );
};

export default ProfileAbout;
