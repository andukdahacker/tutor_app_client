import {
  Button,
  Center,
  FormErrorMessage,
  Input,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { Subject } from "../../../domain/entities";
import useDebounce from "../../../shared/hooks/useDebounce";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import SuggestedSubjects from "../../find/components/SuggestedSubjects";
import { ProfileContext } from "../context/profile_context";

interface AddTutorProfileSubjecFormProps {
  onClose: () => void;
}

const AddTutorProfileSubjecForm = ({
  onClose,
}: AddTutorProfileSubjecFormProps) => {
  const { subjectStore, profileStore } = useStoreContext(ProfileContext);
  const subjectsState = useSnapshot(subjectStore);

  const [subject, setSubject] = useState<string>("");
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubjectInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSubject(event.target.value);
  };

  const handleAddSubjects = async () => {
    setIsLoading(true);
    await profileStore.updateTutorProfile({
      subjectIds: selectedSubjects.map((e) => e.id),
    });

    setIsLoading(false);

    onClose();
  };

  const debounced = useDebounce(subject, 500);

  useEffect(() => {
    async function fetchData() {
      await subjectStore.getSubjects(subject);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const debouncedCall = async () => {
      await subjectStore.getSubjects(subject);
    };

    if (debounced) debouncedCall();
  }, [debounced]);

  return (
    <>
      <Wrap pb={!selectedSubjects ? 4 : 0} mb={4}>
        <Text>Subject</Text>
        {selectedSubjects.map((e) => {
          return (
            <Tag key={e.id}>
              <TagLabel>{e.name}</TagLabel>
              <TagCloseButton
                onClick={() => {
                  const newList = selectedSubjects.filter(
                    (sub) => sub.id != e.id
                  );

                  setSelectedSubjects(newList);
                }}
              />
            </Tag>
          );
        })}
      </Wrap>
      <VStack>
        <Input
          placeholder="Find a subject"
          value={subject}
          onChange={handleSubjectInputChange}
        />

        <FormErrorMessage>Please select a subject</FormErrorMessage>
        {subjectsState.subjects.length > 0 && (
          <SuggestedSubjects
            subjects={subjectsState.subjects.filter(
              (e) => !selectedSubjects.find((sub) => sub.id == e.id)
            )}
            searchString={subject}
            onSubjectClick={(subject) => {
              const newList = [...selectedSubjects, subject];

              setSelectedSubjects(newList);
            }}
            isLoading={subjectsState.isLoading}
            showSuggectedText={false}
          />
        )}
      </VStack>
      <Center mt={6}>
        <Button
          isLoading={isLoading}
          colorScheme="purple"
          onClick={handleAddSubjects}
        >
          Add subjects
        </Button>
      </Center>
    </>
  );
};

export default AddTutorProfileSubjecForm;
