import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { Job } from "../../../domain/entities";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import useUser from "../../../shared/hooks/useUser";
import JobDetailContext from "../context/job_detail_context";
import TutorProposalCard from "./TutorProposalCard";

interface JobDetailConnectionListProps {
  job: Job;
}

const JobDetailConnectionList = ({ job }: JobDetailConnectionListProps) => {
  const user = useUser();
  const isOwner = job.learnerId == user?.learnerProfile.id;
  const { jobDetailStore } = useStoreContext(JobDetailContext);
  const { jobConnections, pageInfo } = useSnapshot(jobDetailStore);

  useEffect(() => {
    async function fetchData() {
      await jobDetailStore.getJobConnections(job.id);
    }

    if (isOwner) {
      fetchData();
    }
  }, [isOwner]);

  if (!isOwner) return <></>;

  return (
    <>
      <Box>Tutor application</Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={[20, 16]} mt={8} mb={8}>
        {jobConnections.map((jc) => {
          return <TutorProposalCard connection={jc} key={jc.tutorId} />;
        })}
      </SimpleGrid>
      {pageInfo?.hasNextPage && (
        <Button onClick={() => jobDetailStore.loadMoreJobConnections(job.id)}>
          Load more
        </Button>
      )}
    </>
  );
};

export default JobDetailConnectionList;
