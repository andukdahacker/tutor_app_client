import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Spacer,
  Tag,
  TagCloseButton,
  TagLabel,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { subscribeKey } from "valtio/utils";
import { JobMethod, Subject } from "../../../domain/entities";
import { CurrencyUtils } from "../../../shared/utils/currency_utils";
import { debounce } from "../../../shared/utils/debounce";
import SuggestedSubjects from "../../find/components/SuggestedSubjects";
import CreateSubjectButton from "../../subject/components/CreateSubjectButton";
import { CreateJobFormContext } from "../context/create_job_form_context";

interface CreateJobFormProps {
  onCreateJobSuccess: () => void;
}

const CreateJobForm = ({ onCreateJobSuccess }: CreateJobFormProps) => {
  const [numOfSession, setNumOfSession] = useState(1);
  const [studyGoal, setStudyGoal] = useState("");
  const [jobMethod, setJobMethod] = useState<JobMethod>("BOTH");
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [fee, setFee] = useState("200000");

  const { subjectStore, createJobStore } = useContext(CreateJobFormContext);

  const subjectsState = useSnapshot(subjectStore);

  const handleSubjectInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSubject(event.target.value);

    const debouncedCall = debounce(async () => {
      await subjectStore.getSubjects(subject);
    }, 1000);

    debouncedCall();
  };

  useEffect(() => {
    const unsub = subscribeKey(createJobStore, "newSubject", (subject) => {
      setSelectedSubject(subject);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <VStack pt={4} pb={4} w="100%">
      <FormControl
        pt={4}
        borderTop="1px"
        borderColor={"gray.100"}
        isInvalid={selectedSubject == null}
        isRequired
      >
        <HStack pb={!selectedSubject ? 4 : 0}>
          <FormLabel htmlFor="email">Subject</FormLabel>
          {selectedSubject ? (
            <Tag>
              <TagLabel>{selectedSubject?.name}</TagLabel>
              <TagCloseButton onClick={() => setSelectedSubject(null)} />
            </Tag>
          ) : null}
          <Spacer />
          {!selectedSubject && <CreateSubjectButton />}
        </HStack>
        {!selectedSubject && (
          <>
            <Input
              placeholder="Find a subject"
              value={subject}
              onChange={handleSubjectInputChange}
            />
            <FormErrorMessage>Please select a subject</FormErrorMessage>
            {subjectsState.subjects.length > 0 && (
              <SuggestedSubjects
                subjects={subjectsState.subjects}
                searchString={subject}
                onSubjectClick={(subject) => {
                  setSelectedSubject(subject);
                }}
                isLoading={subjectsState.isLoading}
                showSuggectedText={false}
              />
            )}
          </>
        )}
      </FormControl>

      <FormControl isInvalid={title.length == 0} isRequired>
        <FormLabel>Topic</FormLabel>
        <Input
          id="title"
          placeholder="Topic"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <FormErrorMessage>Please enter the topic</FormErrorMessage>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Study location</FormLabel>
        <Select
          placeholder="Choose study location"
          value={jobMethod}
          onChange={(event) => setJobMethod(event.target.value as JobMethod)}
        >
          <option value={"ONLINE"}>ONLINE</option>
          <option value={"OFFLINE"}>OFFLINE</option>
          <option value={"BOTH"}>BOTH</option>
        </Select>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Expected fee</FormLabel>
        <NumberInput
          defaultValue={fee}
          max={1000000}
          step={100000}
          allowMouseWheel
          value={fee}
          onChange={(value) => {
            const fee = value.replace(/^\$/, " ");
            setFee(fee);
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Number of sessions</FormLabel>
        <NumberInput
          defaultValue={numOfSession}
          max={10}
          min={1}
          step={1}
          value={numOfSession}
          onChange={(value) => {
            if (value.length == 0) {
              setNumOfSession(1);
            } else {
              setNumOfSession(Number.parseInt(value));
            }
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl>
        <FormLabel>Study Goal</FormLabel>
        <Textarea
          placeholder="Your study goal"
          value={studyGoal}
          onChange={(event) => setStudyGoal(event.target.value)}
        />
      </FormControl>

      <Center w={"100%"}>
        <Button
          colorScheme={"purple"}
          my={4}
          w={"100%"}
          onClick={async (event) => {
            event.preventDefault();
            const job = await createJobStore.createJob({
              description: studyGoal,
              fee: CurrencyUtils.fromString(fee),
              jobMethod,
              jobType: "TUTOR",
              numberOfSessions: 1,
              subjectId: selectedSubject?.id ?? "",
              title: title,
            });

            if (job != null) {
              onCreateJobSuccess();
            }
          }}
        >
          Create job
        </Button>
      </Center>
    </VStack>
  );
};

export default CreateJobForm;
