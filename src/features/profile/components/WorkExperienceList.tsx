import { EditIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useSnapshot } from "valtio";
import { AuthContext } from "../../auth/components/context/AuthContext";
import WorkExperienceCard from "./WorkExperienceCard";

const WorkExperienceList = () => {
  const params = useParams();
  const { authStore } = useContext(AuthContext);
  const { user } = useSnapshot(authStore);

  const isOwner = authStore.user?.id == params.userId;
  return (
    <>
      <Flex direction={"column"}>
        <HStack>
          <Text fontSize={"xl"}>Work experience</Text>
          <Spacer />
          {isOwner && (
            <IconButton
              colorScheme="purple"
              aria-label="Edit"
              icon={<EditIcon />}
              mb={2}
            />
          )}
        </HStack>
        <Divider w={"100%"} />
        <VStack spacing={8}>
          {user?.workExperience?.map((we) => {
            return <WorkExperienceCard workExperiece={we} key={we.id} />;
          })}
        </VStack>
      </Flex>
    </>
  );
};

export default WorkExperienceList;
