import { Button, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import DashboardContext from "../context/dashboard_context";
import LearnerJobCard from "./LearnerJobCard";

const LearnerJobList = () => {
  const { learnerJobStore } = useStoreContext(DashboardContext);
  const { jobs, pageInfo } = useSnapshot(learnerJobStore);
  useEffect(() => {
    async function fetchData() {
      await learnerJobStore.getLearnerJobs();
    }

    fetchData();
  }, []);

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing={[20, 16]} mt={8} mb={8}>
        {jobs.map((job) => {
          return <LearnerJobCard job={job} key={job.id} />;
        })}
      </SimpleGrid>
      {pageInfo?.hasNextPage && (
        <Button onClick={() => learnerJobStore.loadMoreLearnerJobs()}>
          Load more
        </Button>
      )}
    </>
  );
};

export default LearnerJobList;
