import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CreateJobFormContext } from "../../job/context/create_job_form_context";

const schema = z.object({
  name: z.string(),
  description: z.string().nullable(),
});

type CreateSubjectFormInput = z.infer<typeof schema>;

interface CreateSubjectFormProps {
  onCreateSubjectSuccess: () => void;
}

const CreateSubjectForm = ({
  onCreateSubjectSuccess,
}: CreateSubjectFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSubjectFormInput>({ resolver: zodResolver(schema) });
  const { createSubjectStore, createJobStore } =
    useContext(CreateJobFormContext);

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        const subject = await createSubjectStore.createSubject({
          name: data.name,
          description: data.description ?? undefined,
        });

        if (subject != null) {
          onCreateSubjectSuccess();
          createJobStore.onCreateSubjectSuccess(subject);
        }
      })}
    >
      <FormControl isRequired isInvalid={errors.name ? true : false}>
        <FormLabel>Subject name</FormLabel>
        <Input
          id="name"
          placeholder="Subject name"
          {...register("name", { required: "Please enter a subject name" })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          placeholder="Describe your subject"
          {...register("description")}
        />
      </FormControl>

      <Center>
        <Button mt={4} colorScheme={"purple"} type="submit">
          Create subject
        </Button>
      </Center>
    </form>
  );
};

export default CreateSubjectForm;
