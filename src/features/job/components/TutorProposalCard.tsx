import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { JobConnection } from "../../../domain/entities";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import useUser from "../../../shared/hooks/useUser";
import JobDetailContext from "../context/job_detail_context";

interface TutorProposalCardProps {
  connection: JobConnection;
}

const TutorProposalCard = ({ connection }: TutorProposalCardProps) => {
  const { jobDetailStore } = useStoreContext(JobDetailContext);
  const [isLoadingDecline, setIsLoadingDecline] = useState(false);
  const user = useUser();
  const tutor = connection.tutor;
  if (!tutor) return <></>;
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

        <Flex pt={4} justify={"space-around"}>
          <Link to={`/profile/${tutor.userId}?tutor=true`}>
            <Button colorScheme="purple">View profile</Button>
          </Link>

          <Button
            colorScheme="red"
            isLoading={isLoadingDecline}
            onClick={async () => {
              setIsLoadingDecline(true);
              await jobDetailStore.declineJobConnection({
                jobId: connection.jobId,
                tutorId: connection.tutorId,
                learnerUserId: user?.id ?? "",
                tutorUserId: tutor?.userId ?? "",
                type: "TUTOR_TO_JOB",
              });
              setIsLoadingDecline(false);
            }}
          >
            Decline
          </Button>
          <Button colorScheme="green">Accept</Button>
        </Flex>
      </Box>
    </>
  );
};

export default TutorProposalCard;
