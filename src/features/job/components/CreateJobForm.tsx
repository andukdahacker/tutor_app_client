import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  Tag,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { proxy, useSnapshot } from "valtio";
import * as z from "zod";
import { debounce } from "../../../shared/utils/debounce";
import SuggestedSubjects from "../../find/components/SuggestedSubjects";
import { Subject } from "../../find/data/types/entities";
import { SubjectStore } from "../../find/store/subject_store";

const initialContext = {
  subjectStore: proxy(new SubjectStore()),
};
const CreateJobFormContext = createContext(initialContext);

export const CreateJobFormProvider = ({ children }: PropsWithChildren) => {
  return (
    <CreateJobFormContext.Provider value={initialContext}>
      {children}
    </CreateJobFormContext.Provider>
  );
};

const schema = z.object({
  subject: z.string(),
  title: z.string(),
});

type CreateJobInput = z.infer<typeof schema>;

const CreateJobForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateJobInput>({
    resolver: zodResolver(schema),
  });

  const [subject, setSubject] = useState("");
  const [selectedSubject, setSelectedSubject] = useState<Subject>();

  const { subjectStore } = useContext(CreateJobFormContext);

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

  return (
    <>
      <VStack>
        <FormControl py={7} borderTop="1px" borderColor={"gray.100"}>
          <HStack>
            <FormLabel htmlFor="email">Subject</FormLabel>
            {selectedSubject ? <Tag>{selectedSubject?.name}</Tag> : null}
          </HStack>
          <Input
            id="subject"
            placeholder="subject"
            {...register("subject")}
            value={subject}
            onChange={handleSubjectInputChange}
          />
          <SuggestedSubjects
            subjects={subjectsState.subjects}
            searchString={subject}
            onSubjectClick={(subject) => {
              setSelectedSubject(subject);
            }}
            isLoading={subjectsState.isLoading}
          />

          <FormLabel>Job title</FormLabel>
          <Input id="title" placeholder="Title" {...register("title")} />
        </FormControl>
      </VStack>
    </>
  );
};

export default CreateJobForm;
