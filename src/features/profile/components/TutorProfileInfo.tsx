import { Divider, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { useParams } from "react-router";
import { useSnapshot } from "valtio";
import useIsOwner from "../../../shared/hooks/useIsOwner";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { AuthContext } from "../../auth/components/context/AuthContext";
import AddTutorInfoButton from "./AddTutorInfoButton";

const TutorProfileInfo = () => {
  const { userId } = useParams();
  const isOwner = useIsOwner(userId ?? "");
  const { authStore } = useStoreContext(AuthContext);
  const authState = useSnapshot(authStore);
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
          <Text>{authState.user?.tutorProfile.tutorFee}</Text>
        </HStack>
        <HStack mt={6}>
          <Text>Job method: {authState.user?.tutorProfile?.jobMethod}</Text>
        </HStack>
      </Flex>
    </>
  );
};

export default TutorProfileInfo;
