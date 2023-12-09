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
import EducationCard from "./EducationCard";

const EducationList = () => {
  const params = useParams();
  const { authStore } = useContext(AuthContext);
  const { user } = useSnapshot(authStore);

  const isOwner = authStore.user?.id == params.userId;
  return (
    <>
      <Flex direction={"column"}>
        <HStack>
          <Text fontSize={"xl"}>Education</Text>
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
          {user?.education?.map((ed) => {
            return <EducationCard education={ed} key={ed.id} />;
          })}
        </VStack>
      </Flex>
    </>
  );
};

export default EducationList;
