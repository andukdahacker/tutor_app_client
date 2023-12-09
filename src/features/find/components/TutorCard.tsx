import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TutorProfile } from "../../../domain/entities";

const TutorCard = (tutor: TutorProfile) => {
  return (
    <>
      <Box
        border="1px"
        borderColor="purple.500"
        p="4"
        borderRadius="8px"
        shadow="sm"
      >
        <HStack>
          <Avatar
            size={"md"}
            name={tutor.user?.username ?? ""}
            src={tutor.user?.avatar ?? ""}
          />
          <Text fontWeight={"bold"}>{tutor.user?.username}</Text>
        </HStack>

        <HStack pt={4}>
          <VStack>
            <Text fontWeight={"bold"}>100.000</Text>
            <Text>Hourly rate</Text>
          </VStack>
          <VStack>
            <Text fontWeight={"bold"}>100 hours</Text>
            <Text>Tutoring time</Text>
          </VStack>
          <VStack>
            <Text fontWeight={"bold"}>Online</Text>
            <Text>Tutoring method</Text>
          </VStack>
        </HStack>

        <Text pt={4}>{tutor.bio}</Text>

        <Flex pt={4}>
          <Spacer />
          <Button colorScheme="purple">View profile</Button>
        </Flex>
      </Box>
    </>
  );
};

export default TutorCard;
