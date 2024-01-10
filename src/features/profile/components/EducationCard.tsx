import { Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Education } from "../../../domain/entities";
import useUser from "../../../shared/hooks/useUser";
import { DateTimeUtils } from "../../../shared/utils/datetime_utils";
import EducationCardDeleteButton from "./EducationCardDeleteButton";
import EducationCardEditButton from "./EducationCardEditButton";

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

  const params = useParams();

  const user = useUser();
  const isOwner = user?.id == params.userId;

  return (
    <>
      <Flex w={"100%"} direction={"column"} pt={4} pb={4}>
        <Text>{education.title}</Text>
        <HStack>
          <Text>{education.educationEntity}</Text>
          <Text>
            {fromDate} - {toDate}
          </Text>
          <Spacer />
          {isOwner && (
            <HStack>
              <EducationCardEditButton education={education} />
              <EducationCardDeleteButton education={education} />
            </HStack>
          )}
        </HStack>
        <Text>{education.description ?? ""}</Text>
      </Flex>
    </>
  );
};

export default EducationCard;
