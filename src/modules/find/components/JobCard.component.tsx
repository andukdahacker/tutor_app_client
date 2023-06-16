import { Job } from "@/generated/graphql";
import { CurrencyUtils } from "@/shared/utils/currency.utils";
import { DateTimeUtils } from "@/shared/utils/datetime.utils";
import {
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
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

interface CardProps {
  job: Job;
}

const JobCard = (props: CardProps) => {
  const btnRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        border="1px"
        borderColor="purple.500"
        p="3"
        borderRadius="8px"
        shadow="sm"
      >
        <Text fontWeight="bold">{props.job.title}</Text>

        <Text my="2" color="blackAlpha.500" fontSize="12px">
          Posted {DateTimeUtils.ago(props.job.createdAt)} ago
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
              {props.job.numberOfSessions ?? "Unknown"}
            </Text>
            <Text fontWeight="normal" fontSize="12px" color="blackAlpha.500">
              Number of sessions
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
          <Button size="sm" variant="solid" colorScheme="blue">
            Connect
          </Button>
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
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default JobCard;
