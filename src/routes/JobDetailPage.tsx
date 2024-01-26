import {
  Avatar,
  Box,
  Card,
  CardBody,
  Flex,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSnapshot } from "valtio";
import JobDetailConnectionList from "../features/job/components/JobDetailConnectionList";
import JobDetailContext from "../features/job/context/job_detail_context";
import useStoreContext from "../shared/hooks/useStoreContext";
import useUser from "../shared/hooks/useUser";
import { CurrencyUtils } from "../shared/utils/currency_utils";
import JobDetailTutorCard from "../features/job/components/JobDetailTutorCard";

const JobDetailPage = () => {
  const { jobId } = useParams();
  const { jobDetailStore } = useStoreContext(JobDetailContext);

  const { job, acceptedJobConnection } = useSnapshot(jobDetailStore);
  const [isLoading, setIsLoading] = useState(false);

  const user = useUser();

  const isOwner = user?.learnerProfile.id == job?.learnerId;

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await jobDetailStore.findJobById(jobId as string);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (isLoading) return <Spinner />;
  if (!job) return <Box>No job found</Box>;
  return (
    <Box p={10}>
      <Text>{job.title}</Text>
      <Flex>
        <Flex direction={"column"}>
          <Card>
            <CardBody>
              <Flex>
                <Avatar
                  size={"lg"}
                  name={user?.username ?? ""}
                  src={user?.avatar ?? ""}
                  mr={10}
                />

                <Flex direction={"column"}>
                  <Text>{user?.username ?? ""}</Text>
                  <Text>Age: </Text>
                  <Text>Location: </Text>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
        <Tabs>
          <TabList>
            <Tab>Job Info</Tab>

            {isOwner && (
              <Tab isDisabled={job.jobStatus !== "OPEN"}>Applications</Tab>
            )}
            <Tab isDisabled={job.jobStatus == "OPEN"}>Tutor</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Flex direction={"column"}>
                <Box>
                  <Text>Job Info</Text>
                  <Flex>
                    <VStack>
                      <Text>{CurrencyUtils.format(job.fee)}</Text>
                      <Text>Fee</Text>
                    </VStack>
                    <VStack>
                      <Text>{job.jobMethod}</Text>
                      <Text>Job method</Text>
                    </VStack>
                    <VStack>
                      <Text>{job.jobStatus}</Text>
                      <Text>Status</Text>
                    </VStack>
                  </Flex>
                  <Flex direction={"column"}>
                    <Text>Subject</Text>
                    <Tag>{job.subject?.name}</Tag>
                  </Flex>
                  <Flex direction={"column"}>
                    <Text>Description</Text>
                    <Text>{job.description}</Text>
                  </Flex>
                </Box>
              </Flex>
            </TabPanel>
            {isOwner && (
              <TabPanel>
                <JobDetailConnectionList job={job} />
              </TabPanel>
            )}
            <TabPanel>
              <JobDetailTutorCard jobConnection={acceptedJobConnection} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
};

export default JobDetailPage;
