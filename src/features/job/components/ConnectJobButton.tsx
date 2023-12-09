import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../auth/components/context/AuthContext";
import { FindContext } from "../../find/components/context/FindContext";
import { Job } from "../../find/data/types/entities";

interface ConnectJobButtonProps {
  job: Job;
}

const ConnectJobButton = ({ job }: ConnectJobButtonProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [fee, setFee] = useState("200000");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { jobStore } = useContext(FindContext);
  const { authStore } = useContext(AuthContext);
  return (
    <>
      <Button size="sm" variant="solid" colorScheme="blue" onClick={onOpen}>
        Apply
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="budget">Budget</FormLabel>
              <FormHelperText>Propose the fee you expect</FormHelperText>
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

            <FormControl mt={4}>
              <FormLabel htmlFor="message">Additional message</FormLabel>
              <Textarea
                placeholder="say something to the tutee"
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="purple"
              onClick={async (event) => {
                event.preventDefault();
                setIsLoading(true);
                await jobStore.applyForJob(job, authStore.user!);
                setIsLoading(false);
                onClose();
              }}
              isLoading={isLoading}
            >
              Apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConnectJobButton;
