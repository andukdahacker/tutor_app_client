import {
  Button,
  Center,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { JobMethod } from "../../../domain/entities";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { ProfileContext } from "../context/profile_context";

interface AddTutorInfoFormProps {
  onClose: () => void;
  tutorFee?: number;
  jobMethod?: JobMethod;
}

const AddTutorInfoForm = ({
  onClose,
  tutorFee: currentTutorFee,
  jobMethod: currentJobMethod,
}: AddTutorInfoFormProps) => {
  const [jobMethod, setJobMethod] = useState<JobMethod>(
    currentJobMethod ?? "BOTH"
  );

  const [fee, setFee] = useState(currentTutorFee?.toString() ?? "200000");
  const [isLoading, setIsLoading] = useState(false);

  const { profileStore } = useStoreContext(ProfileContext);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await profileStore.updateTutorProfile({
      tutorFee: parseInt(fee),
      jobMethod,
    });
    setIsLoading(false);
    onClose();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormControl>
          <FormLabel>Tutor Fee</FormLabel>
          <NumberInput
            defaultValue={fee}
            onChange={(value) => {
              const fee = value.replace(/^\$/, " ");
              setFee(fee);
            }}
            min={0}
            max={1000000}
            step={50000}
            allowMouseWheel
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl mt={6}>
          <FormLabel>Job method</FormLabel>
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
        <Center>
          <Button
            colorScheme="purple"
            type="submit"
            mt={6}
            mb={6}
            isLoading={isLoading}
          >
            Submit
          </Button>
        </Center>
      </form>
    </>
  );
};

export default AddTutorInfoForm;
