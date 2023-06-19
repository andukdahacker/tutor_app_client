import { Button, Flex } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import { findStore } from "../../shared/data/find.store";
import { jobStore } from "../data/job.store";
import JobCard from "./JobCard.component";

const JobCardList = () => {
  const jobState = useSnapshot(jobStore);
  const findState = useSnapshot(findStore);

  return (
    <>
      {jobState.jobs.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}

      {findState.showLoadMoreJobs ? (
        <Flex align={"center"} justify={"center"}>
          <Button
            isLoading={jobState.isLoadingMore}
            w={"50%"}
            onClick={async () => await jobStore.loadMoreJobs()}
          >
            Load more
          </Button>
        </Flex>
      ) : null}
    </>
  );
};

export default JobCardList;
