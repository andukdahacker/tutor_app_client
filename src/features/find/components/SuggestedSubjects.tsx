import { Flex, Spinner, Tag, Text, Wrap } from "@chakra-ui/react";
import { Subject } from "../data/types/entities";

interface SuggestedSubjectsProps {
  subjects: Subject[];
  searchString: string;
  onSubjectClick: (subject: Subject) => void;
  isLoading: boolean;
  showSuggectedText?: boolean;
}

const SuggestedSubjects = ({
  subjects,
  searchString,
  onSubjectClick,
  isLoading,
  showSuggectedText = true,
}: SuggestedSubjectsProps) => {
  return (
    <>
      <Flex alignItems="center" mt={4}>
        {showSuggectedText && (
          <Text
            fontWeight="bold"
            lineHeight="7"
            mr={{ base: "10px", sm: "30px" }}
            display={{ base: "none", sm: "block" }}
          >
            Suggested
          </Text>
        )}

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
                  onClick={(event) => {
                    event.preventDefault();
                    return onSubjectClick(subject);
                  }}
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
