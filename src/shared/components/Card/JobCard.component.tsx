import { Job } from "@/generated/graphql";
import { CurrencyUtils } from "@/shared/utils/currency.utils";
import { DateTimeUtils } from "@/shared/utils/datetime.utils";
import { Badge, Box, Button, Flex, Grid, Text } from "@chakra-ui/react";

interface CardProps {
  job: Job;
}

const JobCard = (props: CardProps) => {
  console.log(CurrencyUtils.format(props.job.fee));
  return (
    <>
      <Flex direction="column" gap="20px">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: "20px", sm: "16px" }}
        >
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
                <Text
                  fontWeight="normal"
                  fontSize="12px"
                  color="blackAlpha.500"
                >
                  Hourly
                </Text>
              </Box>

              <Box>
                <Text fontWeight="bold" fontSize="12px">
                  Beginner
                </Text>
                <Text
                  fontWeight="normal"
                  fontSize="12px"
                  color="blackAlpha.500"
                >
                  Tutee Level
                </Text>
              </Box>

              <Box>
                <Text fontWeight="bold" fontSize="12px">
                  2 months
                </Text>
                <Text
                  fontWeight="normal"
                  fontSize="12px"
                  color="blackAlpha.500"
                >
                  Duration
                </Text>
              </Box>
            </Flex>

            <Text color="gray.500" fontSize="12px" noOfLines={2}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              atque tempora officiis. Aspernatur voluptatum consectetur
              exercitationem facilis libero, vero quia soluta. Fuga obcaecati
              vel ad blanditiis voluptate. Inventore, voluptate soluta?
            </Text>

            <Flex gap="10px" my={4}>
              <Badge backgroundColor="cyan.500" color="white">
                Subject label
              </Badge>
              <Badge backgroundColor="blue.500" color="white">
                hashtag
              </Badge>
            </Flex>

            <Flex justifyContent="flex-end" gap="6px">
              <Button size="sm" variant="outline" colorScheme="blue">
                See more
              </Button>
              <Button size="sm" variant="solid" colorScheme="blue">
                Connect
              </Button>
            </Flex>
          </Box>
        </Grid>
      </Flex>
    </>
  );
};

export default JobCard;
