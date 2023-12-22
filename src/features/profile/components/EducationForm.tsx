import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Education } from "../../../domain/entities";
import { CreateEducationInput } from "../../../domain/inputs";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { DateTimeUtils } from "../../../shared/utils/datetime_utils";
import { AuthContext } from "../../auth/components/context/AuthContext";
import { ProfileContext } from "../context/profile_context";

interface EducationFormProps {
  onClose: () => void;
  education?: Education;
}

const EducationForm = ({ onClose, education }: EducationFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateEducationInput>({
    defaultValues: {
      title: education?.title ?? "",
      description: education?.description ?? "",
      educationEntity: education?.educationEntity ?? "",
      educationEntityUrl: education?.educationEntityUrl ?? "",
      fromDate: education?.fromDate
        ? DateTimeUtils.fromSeconds(education.fromDate).toLocaleDateString()
        : "",
      toDate: education?.toDate
        ? DateTimeUtils.fromSeconds(education.toDate).toLocaleDateString()
        : "",
      isCurrent: false,
    },
  });

  const { profileStore } = useStoreContext(ProfileContext);
  const { authStore } = useStoreContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    if (education) {
      const updatedEducation = await profileStore.updateEducation({
        ...data,
        id: education.id,
      });

      if (updatedEducation) {
        authStore.updateEducation(updatedEducation);
      }
    } else {
      const newEducation = await profileStore.createEducation(data);

      if (newEducation) {
        authStore.addEducation(newEducation);
      }
    }
    setIsLoading(false);

    onClose();
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <Stack spacing={2}>
          <FormControl isInvalid={errors.title ? true : false}>
            <FormLabel>Title</FormLabel>
            <Input {...register("title", { required: "Please enter title" })} />
            <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea {...register("description")} />
          </FormControl>

          <FormControl isInvalid={errors.educationEntity ? true : false}>
            <FormLabel>Where did you study?</FormLabel>
            <Input
              {...register("educationEntity", {
                required: "Please enter education entity",
              })}
            />
            <FormErrorMessage>
              {errors.educationEntity?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel>Education entity url</FormLabel>
            <Input {...register("educationEntityUrl")} />
          </FormControl>

          <FormControl>
            <FormLabel>Start date</FormLabel>
            <Input type="date" {...register("fromDate")} />
          </FormControl>

          <FormControl>
            <FormLabel>End date</FormLabel>
            <HStack>
              <Input type="date" {...register("toDate")} />
              <Checkbox {...register("isCurrent")}>Current?</Checkbox>
            </HStack>
          </FormControl>

          <Button mt={4} type="submit" isLoading={isLoading}>
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default EducationForm;
