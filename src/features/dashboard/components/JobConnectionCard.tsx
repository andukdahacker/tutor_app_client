import { Badge, Box, Button, Flex, Text } from "@chakra-ui/react";
import { JobConnection } from "../../../domain/entities";
import { router } from "../../../routes/router";
import { CurrencyUtils } from "../../../shared/utils/currency_utils";
import { DateTimeUtils } from "../../../shared/utils/datetime_utils";

interface JobConnectionCardProps {
  jobConnection: JobConnection;
}

const JobConnectionCard = ({ jobConnection }: JobConnectionCardProps) => {
  const job = jobConnection.job;

  const latestUpdate = job
    ? job.createdAt == job.updatedAt
      ? `Posted ${DateTimeUtils.ago(job.createdAt)} ago`
      : `Updated ${DateTimeUtils.ago(job.updatedAt)} ago`
    : "";
  return (
    <>
      <Box
        border="1px"
        borderColor="purple.500"
        p="4"
        borderRadius="8px"
        shadow="sm"
      >
        <Text fontWeight="bold">{job?.title}</Text>

        <Text my="2" color="blackAlpha.500" fontSize="12px">
          {latestUpdate}
        </Text>

        <Flex gap="24px" my="2">
          <Box>
            <Text fontWeight="bold" fontSize="12px">
              {job ? CurrencyUtils.format(job.fee) : ""}
            </Text>
            <Text fontWeight="normal" fontSize="12px" color="blackAlpha.500">
              Hourly
            </Text>
          </Box>

          <Box>
            <Text fontWeight="bold" fontSize="12px">
              {job?.numberOfSessions ?? "Unknown number of"}
            </Text>
            <Text fontWeight="normal" fontSize="12px" color="blackAlpha.500">
              Sessions
            </Text>
          </Box>
        </Flex>

        <Text color="gray.500" fontSize="12px" noOfLines={2}>
          {job?.description ?? "No description"}
        </Text>

        <Flex gap="10px" my={4}>
          <Badge backgroundColor="cyan.500" color="white">
            {job?.subject.name}
          </Badge>
        </Flex>

        <Flex justifyContent="flex-end" gap="6px">
          <Button
            size="sm"
            variant="outline"
            colorScheme="blue"
            onClick={() => router.navigate(`/job/${job?.id}`)}
          >
            See more
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default JobConnectionCard;
