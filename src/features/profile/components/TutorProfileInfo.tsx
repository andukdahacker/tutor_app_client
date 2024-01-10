import { Divider, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { useParams } from "react-router";
import { useSnapshot } from "valtio";
import useIsOwner from "../../../shared/hooks/useIsOwner";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { ProfileContext } from "../context/profile_context";
import AddTutorInfoButton from "./AddTutorInfoButton";

const TutorProfileInfo = () => {
  const { userId } = useParams();
  const isOwner = useIsOwner(userId ?? "");
  const { profileStore } = useStoreContext(ProfileContext);
  const { tutorProfile } = useSnapshot(profileStore);
  return (
    <>
      <Flex direction={"column"}>
        <HStack w={"100%"} pb={2}>
          <Text>Tutor info</Text>
          <Spacer />
          {isOwner && <AddTutorInfoButton />}
        </HStack>
        <Divider />
        <HStack mt={6}>
          <Text>Tutor fee: </Text>
          <Text>{tutorProfile?.tutorFee}</Text>
        </HStack>
        <HStack mt={6}>
          <Text>Job method: {tutorProfile?.jobMethod}</Text>
        </HStack>
      </Flex>
    </>
  );
};

export default TutorProfileInfo;
