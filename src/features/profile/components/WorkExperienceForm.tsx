import {
  Box,
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
import { WorkExperience } from "../../../domain/entities";
import { CreateWorkExperienceInput } from "../../../domain/inputs";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { DateTimeUtils } from "../../../shared/utils/datetime_utils";
import { ProfileContext } from "../context/profile_context";

interface WorkExperienceFormProps {
  workExperience?: WorkExperience;
  onClose: () => void;
}

const WorkExperienceForm = ({
  onClose,
  workExperience,
}: WorkExperienceFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateWorkExperienceInput>({
    defaultValues: {
      workplace: workExperience?.workplace ?? "",
      workplaceUrl: workExperience?.workplaceUrl ?? "",
      description: workExperience?.description ?? "",
      fromDate: workExperience?.fromDate
        ? DateTimeUtils.fromSeconds(
            workExperience.fromDate
          ).toLocaleDateString()
        : "",
      position: workExperience?.position,
      toDate: workExperience?.toDate
        ? DateTimeUtils.fromSeconds(workExperience.toDate).toLocaleDateString()
        : "",
      isCurrent: workExperience?.isCurrent,
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const { profileStore } = useStoreContext(ProfileContext);

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    if (workExperience) {
      await profileStore.updateWorkExperience({
        ...data,
        workExperienceId: workExperience.id,
      });
    } else {
      await profileStore.createWorkExperience({
        ...data,
        fromDate: data.fromDate,
        toDate: data.isCurrent ? "" : data.toDate,
      });
    }

    setIsLoading(false);

    onClose();
  });

  return (
    <Box p={6}>
      <form onSubmit={onSubmit}>
        <Stack spacing={2}>
          <FormControl isInvalid={errors.workplace ? true : false}>
            <FormLabel>Workplace</FormLabel>
            <Input
              {...register("workplace", {
                required: "Please enter workplace name",
              })}
            />
            <FormErrorMessage>{errors.workplace?.message}</FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel>Workplace url</FormLabel>
            <Input {...register("workplaceUrl")} />
          </FormControl>

          <FormControl isInvalid={errors.position ? true : false}>
            <FormLabel>Position</FormLabel>
            <Input
              {...register("position", {
                required: "Please enter your position",
              })}
            />
            <FormErrorMessage>{errors.position?.message}</FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea {...register("description")} />
          </FormControl>

          <FormControl>
            <FormLabel>Start date</FormLabel>
            <Input type="date" {...register("fromDate")} />
          </FormControl>

          <FormControl>
            <FormLabel>End date</FormLabel>
            <HStack>
              <Input type="date" {...register("toDate")} />
              <Checkbox {...register("isCurrent")}>Current</Checkbox>
            </HStack>
          </FormControl>

          <Button mt={4} isLoading={isLoading} type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default WorkExperienceForm;
