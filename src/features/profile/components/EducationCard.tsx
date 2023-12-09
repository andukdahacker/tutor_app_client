import { HStack, Text, VStack } from "@chakra-ui/react";
import { Education } from "../../../domain/entities";
import { DateTimeUtils } from "../../../shared/utils/datetime_utils";

interface EducationCardProps {
  education: Education;
}

const EducationCard = ({ education }: EducationCardProps) => {
  const fromDate = education.fromDate
    ? DateTimeUtils.fromSeconds(education.fromDate).toLocaleDateString()
    : "??";
  const toDate = education.toDate
    ? DateTimeUtils.fromSeconds(education.toDate).toLocaleDateString()
    : "??";
  return (
    <>
      <VStack>
        <HStack>
          <Text>{education.educationEntity}</Text>
          <Text>
            {fromDate} - {toDate}
          </Text>
        </HStack>
        <Text>{education.description ?? ""}</Text>
      </VStack>
    </>
  );
};

export default EducationCard;
