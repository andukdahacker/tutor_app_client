import { HStack, Text, VStack } from "@chakra-ui/react";
import { WorkExperience } from "../../../domain/entities";
import { DateTimeUtils } from "../../../shared/utils/datetime_utils";

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
  return (
    <VStack>
      <HStack>
        <Text>{workExperiece.position}</Text>
        <Text>
          {fromDate} - {toDate}
        </Text>
      </HStack>
      <Text>{workExperiece.workplace ?? ""}</Text>
      <Text>{workExperiece.description ?? ""}</Text>
    </VStack>
  );
};

export default WorkExperienceCard;
