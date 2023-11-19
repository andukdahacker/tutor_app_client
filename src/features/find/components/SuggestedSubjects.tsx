import { Flex, Spinner, Tag, Text, Wrap } from "@chakra-ui/react";
import { Subject } from "../data/types/entities";

interface SuggestedSubjectsProps {
  subjects: Subject[];
  searchString: string;
  onSubjectClick: (subject: Subject) => void;
  isLoading: boolean;
}

const SuggestedSubjects = ({
  subjects,
  searchString,
  onSubjectClick,
  isLoading,
}: SuggestedSubjectsProps) => {
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
        {isLoading ? (
          <Spinner />
        ) : (
          <Wrap>
            {subjects.map((subject) => {
              if (subject.name == searchString) return null;
              return (
                <Tag
                  key={subject.id}
                  cursor={"pointer"}
                  onClick={() => onSubjectClick(subject)}
                >
                  {subject.name}
                </Tag>
              );
            })}
          </Wrap>
        )}
      </Flex>
    </>
  );
};

export default SuggestedSubjects;
