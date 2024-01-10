import { Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { WorkExperience } from "../../../domain/entities";
import useUser from "../../../shared/hooks/useUser";
import { DateTimeUtils } from "../../../shared/utils/datetime_utils";
import WorkExperienceEditButton from "./WorkExperienceCardEdit";
import WorkExperienceDeleteButton from "./WorkExperienceDeleteButton";

interface WorkExperienceCardProps {
  workExperiece: WorkExperience;
}

const WorkExperienceCard = ({ workExperiece }: WorkExperienceCardProps) => {
  const fromDate = workExperiece.fromDate
    ? DateTimeUtils.fromSeconds(workExperiece.fromDate).toLocaleDateString()
    : "??";
  const toDate = workExperiece.toDate
    ? DateTimeUtils.fromSeconds(workExperiece.toDate).toLocaleDateString()
    : "??";

  const params = useParams();

  const user = useUser();
  const isOwner = user?.id == params.userId;

  return (
    <>
      <Flex w={"100%"} direction={"column"} pt={4} pb={4}>
        <HStack>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            {workExperiece.position}
          </Text>
          <Text fontSize={"lg"}>
            {fromDate} - {workExperiece.isCurrent ? "Now" : toDate}
          </Text>
          <Spacer />
          {isOwner && (
            <HStack>
              <WorkExperienceEditButton workExperience={workExperiece} />
              <WorkExperienceDeleteButton workExperience={workExperiece} />
            </HStack>
          )}
        </HStack>
        <Text fontSize={"lg"} fontWeight={"bold"} pt={4} pb={4}>
          {workExperiece.workplace ?? ""}
        </Text>
        <Text>{workExperiece.description ?? ""}</Text>
      </Flex>
    </>
  );
};

export default WorkExperienceCard;
