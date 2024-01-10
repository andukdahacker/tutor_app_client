import {
  Avatar,
  Badge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Job } from "../../../domain/entities";
import { CurrencyUtils } from "../../../shared/utils/currency_utils";
import { DateTimeUtils } from "../../../shared/utils/datetime_utils";
import JobActionButton from "./JobActionButton";

interface CardProps {
  job: Job;
}

const JobCard = (props: CardProps) => {
  const btnRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const job = props.job;

  const latestUpdate =
    job.createdAt == job.updatedAt
      ? `Posted ${DateTimeUtils.ago(job.createdAt)} ago`
      : `Updated ${DateTimeUtils.ago(job.updatedAt)} ago`;

  return (
    <>
      <Box
        border="1px"
        borderColor="purple.500"
        p="4"
        borderRadius="8px"
        shadow="sm"
      >
        <Text fontWeight="bold">{props.job.title}</Text>

        <Text my="2" color="blackAlpha.500" fontSize="12px">
          {latestUpdate}
        </Text>

        <Flex gap="24px" my="2">
          <Box>
            <Text fontWeight="bold" fontSize="12px">
              {CurrencyUtils.format(props.job.fee)}
            </Text>
            <Text fontWeight="normal" fontSize="12px" color="blackAlpha.500">
              Hourly
            </Text>
          </Box>

          <Box>
            <Text fontWeight="bold" fontSize="12px">
              {props.job.numberOfSessions ?? "Unknown number of"}
            </Text>
            <Text fontWeight="normal" fontSize="12px" color="blackAlpha.500">
              Sessions
            </Text>
          </Box>
        </Flex>

        <Text color="gray.500" fontSize="12px" noOfLines={2}>
          {props.job.description ?? "No description"}
        </Text>

        <Flex gap="10px" my={4}>
          <Badge backgroundColor="cyan.500" color="white">
            {props.job.subject.name}
          </Badge>
        </Flex>

        <Flex justifyContent="flex-end" gap="6px">
          <Button
            size="sm"
            variant="outline"
            colorScheme="blue"
            ref={btnRef}
            onClick={onOpen}
          >
            See more
          </Button>
          <JobActionButton
            job={job}
            jobConnection={
              job.jobConnections?.length > 0 ? job.jobConnections[0] : undefined
            }
          />
        </Flex>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"xl"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>

          <DrawerBody p={6}>
            <VStack>
              <Flex
                border={"1px"}
                borderRadius={10}
                justifyContent="center"
                align="center"
                w={"100%"}
                p={10}
              >
                <VStack w={"100%"}>
                  <Text fontSize={"xl"} fontWeight={"bold"} pb={6}>
                    Job info
                  </Text>

                  <HStack w={"100%"} justifyContent={"space-around"}>
                    <VStack>
                      <Text fontWeight={"bold"}>
                        {CurrencyUtils.format(props.job.fee)}
                      </Text>
                      <Text>Hourly</Text>
                    </VStack>
                    <VStack>
                      <Text fontWeight={"bold"}>{job.jobMethod}</Text>
                      <Text>Online or Offline</Text>
                    </VStack>
                    <VStack>
                      <Text fontWeight={"bold"}>{job.jobType}</Text>
                      <Text>Job type</Text>
                    </VStack>
                    <VStack>
                      <Text fontWeight={"bold"}>
                        {job.numberOfSessions ?? "Unknown number of"}
                      </Text>
                      <Text>Sessions</Text>
                    </VStack>
                  </HStack>
                </VStack>
              </Flex>
              <Flex
                border={"1px"}
                borderRadius={10}
                justifyContent="center"
                align="center"
                w={"100%"}
                p={10}
              >
                <VStack>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    Description
                  </Text>
                  <Text>{job.description ?? "No description provided"}</Text>
                </VStack>
              </Flex>
              <Flex
                border={"1px"}
                borderRadius={10}
                justifyContent="space-evenly"
                align="center"
                w={"100%"}
                p={10}
              >
                <Avatar size={["lg", "xl", "2xl"]} />
                <VStack>
                  <Text>{job.learner?.user?.username}</Text>
                  <Text>Age</Text>
                  <Text>Location</Text>
                </VStack>
              </Flex>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} w={"30%"}>
              Chat
            </Button>
            <Button colorScheme="blue" w={"50%"}>
              Apply
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default JobCard;
