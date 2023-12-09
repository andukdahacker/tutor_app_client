import {
  Button,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Job } from "../../../domain/entities";
import { AuthContext } from "../../auth/components/context/AuthContext";
import { FindContext } from "../../find/components/context/FindContext";

interface RequestedJobButtonProps {
  job: Job;
}

const RequestedJobButton = ({ job }: RequestedJobButtonProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const { jobStore } = useContext(FindContext);
  const { authStore } = useContext(AuthContext);
  return (
    <>
      <Popover isOpen={isOpen} onClose={onClose}>
        <PopoverTrigger>
          <Button size="sm" variant="solid" colorScheme="blue" onClick={onOpen}>
            Applied
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>You have applied for the job already!</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <HStack>
                <Button onClick={onClose}>Close</Button>
                <Button
                  colorScheme="blue"
                  onClick={async () => {
                    setIsLoading(true);
                    await jobStore.deleteJobConnection({
                      jobId: job.id,
                      tutorId: authStore.user?.tutorProfile.id ?? "",
                    });
                    setIsLoading(false);
                    onClose();
                  }}
                  isLoading={isLoading}
                >
                  Remove application
                </Button>
              </HStack>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  );
};

export default RequestedJobButton;
