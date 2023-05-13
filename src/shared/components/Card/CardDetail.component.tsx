import { Badge, Box, Button, Card, CardHeader, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface CardData {
  title: string;
  posted: string;
  price: string;
  hourly: string;
  level: string;
  subLevel: string;
  time: string;
  duration: string;
  desc: string;
}

interface CardProps {
  title1?: string;
  title2?: string;
  cardTitle: string;
}

const CardDetail = (props: CardProps) => {
  const { title1, title2, cardTitle } = props;
  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" mt="30px" mb="20px">
        <Box>
          <Text as="span" fontWeight="bold" fontSize="18px">
            {title1}
          </Text>
          <Text as="span" color="cyan.500" fontWeight="bold" fontSize="18px">
            {title2}
          </Text>
        </Box>
        <Text cursor="pointer" color="purple.500" display={{ base: "none", sm: "block" }}>
          See all
        </Text>
      </Flex>

      <Flex direction="column" gap="20px">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={{ base: "20px", sm: "16px" }}
        >
          <Box border="1px" borderColor="purple.500" p="3" borderRadius="8px" shadow="sm">
            <Text fontWeight="bold">{cardTitle}</Text>

            <Text my="2" color="blackAlpha.500" fontSize="12px">
              Posted 6 minutes ago
            </Text>

            <Flex gap="24px" my="2">
              <Box>
                <Text fontWeight="bold" fontSize="12px">
                  100.000 VND
                </Text>
                <Text fontWeight="normal" fontSize="12px" color="blackAlpha.500">
                  Hourly
                </Text>
              </Box>

              <Box>
                <Text fontWeight="bold" fontSize="12px">
                  Beginner
                </Text>
                <Text fontWeight="normal" fontSize="12px" color="blackAlpha.500">
                  Tutee Level
                </Text>
              </Box>

              <Box>
                <Text fontWeight="bold" fontSize="12px">
                  2 months
                </Text>
                <Text fontWeight="normal" fontSize="12px" color="blackAlpha.500">
                  Duration
                </Text>
              </Box>
            </Flex>

            <Text color="gray.500" fontSize="12px" noOfLines={2}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae atque tempora
              officiis. Aspernatur voluptatum consectetur exercitationem facilis libero, vero quia
              soluta. Fuga obcaecati vel ad blanditiis voluptate. Inventore, voluptate soluta?
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

          <Box border="1px" borderColor="purple.500" p="3" borderRadius="8px" shadow="sm">
            <Text fontWeight="bold">{cardTitle}</Text>

            <Text my="2" color="blackAlpha.500" fontSize="12px">
              Posted 6 minutes ago
            </Text>

            <Flex gap="24px" my="2">
              <Box>
                <Text fontWeight="bold" fontSize="12px">
                  100.000 VND
                </Text>
                <Text fontWeight="normal" fontSize="12px" color="blackAlpha.500">
                  Hourly
                </Text>
              </Box>

              <Box>
                <Text fontWeight="bold" fontSize="12px">
                  Beginner
                </Text>
                <Text fontWeight="normal" fontSize="12px" color="blackAlpha.500">
                  Tutee Level
                </Text>
              </Box>

              <Box>
                <Text fontWeight="bold" fontSize="12px">
                  2 months
                </Text>
                <Text fontWeight="normal" fontSize="12px" color="blackAlpha.500">
                  Duration
                </Text>
              </Box>
            </Flex>

            <Text color="gray.500" fontSize="12px" noOfLines={2}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae atque tempora
              officiis. Aspernatur voluptatum consectetur exercitationem facilis libero, vero quia
              soluta. Fuga obcaecati vel ad blanditiis voluptate. Inventore, voluptate soluta?
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

          <Box border="1px" borderColor="purple.500" p="3" borderRadius="8px" shadow="sm">
            <Text fontWeight="bold">{cardTitle}</Text>

            <Text my="2" color="blackAlpha.500" fontSize="12px">
              Posted 6 minutes ago
            </Text>

            <Flex gap="24px" my="2">
              <Box>
                <Text fontWeight="bold" fontSize="12px">
                  100.000 VND
                </Text>
                <Text fontWeight="normal" fontSize="12px" color="blackAlpha.500">
                  Hourly
                </Text>
              </Box>

              <Box>
                <Text fontWeight="bold" fontSize="12px">
                  Beginner
                </Text>
                <Text fontWeight="normal" fontSize="12px" color="blackAlpha.500">
                  Tutee Level
                </Text>
              </Box>

              <Box>
                <Text fontWeight="bold" fontSize="12px">
                  2 months
                </Text>
                <Text fontWeight="normal" fontSize="12px" color="blackAlpha.500">
                  Duration
                </Text>
              </Box>
            </Flex>

            <Text color="gray.500" fontSize="12px" noOfLines={2}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae atque tempora
              officiis. Aspernatur voluptatum consectetur exercitationem facilis libero, vero quia
              soluta. Fuga obcaecati vel ad blanditiis voluptate. Inventore, voluptate soluta?
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

export default CardDetail;
