import { Subject } from "@/generated/graphql";
import { Box, Flex, Tag, Text } from "@chakra-ui/react";

interface SuggestedSubjectsProps {
  subjects: Subject[] | null | undefined;
}

const SuggestedSubjects = (props: SuggestedSubjectsProps) => {
  return (
    <>
      <Flex alignItems="center" m="35px 0">
        <Text
          fontWeight="bold"
          lineHeight="7"
          mr={{ base: "10px", sm: "30px" }}
          display={{ base: "none", sm: "block" }}
        >
          Suggested
        </Text>
        <Box
          display="flex"
          flexDirection="row"
          gap="4"
          flexWrap={{ base: "nowrap", sm: "wrap" }}
          overflow={{ base: "scroll", sm: "auto" }}
        >
          {props.subjects?.map((subject) => (
            <Tag key={subject.id} cursor={"pointer"}>
              {subject.name}
            </Tag>
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default SuggestedSubjects;
