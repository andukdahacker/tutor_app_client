import { Button } from "@chakra-ui/react";
import { Job, JobConnection } from "../../../domain/entities";
import ConnectJobButton from "./ConnectJobButton";
import RequestedJobButton from "./RequestedJobButton";

interface JobActionButtonProps {
  jobConnection?: JobConnection;
  job: Job;
}

const JobActionButton = ({ job, jobConnection }: JobActionButtonProps) => {
  const status = jobConnection?.status;

  if (status == "REQUESTED") {
    return (
      <>
        <RequestedJobButton job={job} />
      </>
    );
  }

  if (status == "ACCEPTED") {
    return (
      <>
        <Button size="sm" variant="solid" colorScheme="blue">
          Connected
        </Button>
      </>
    );
  }

  return (
    <>
      <ConnectJobButton job={job} />
    </>
  );
};

export default JobActionButton;
