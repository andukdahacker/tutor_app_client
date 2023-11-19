import { Button, Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useSnapshot } from "valtio";

import { debounce } from "../../../shared/utils/debounce";
import JobCard from "./JobCard";
import { FindContext } from "./context/FindContext";

const JobCardList = () => {
  const { jobStore, findStore } = useContext(FindContext);
  const findState = useSnapshot(findStore);
  const jobState = useSnapshot(jobStore);

  useEffect(() => {
    const fetchData = debounce(async () => {
      await jobStore.findManyJobs(findState.searchString);
    }, 500);
    fetchData();
  }, [findState.searchString]);

  return (
    <>
      {jobState.jobs.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}

      {jobState.canLoadMore ? (
        <Flex align={"center"} justify={"center"}>
          <Button
            isLoading={jobState.isLoadingMore}
            w={"50%"}
            onClick={async () =>
              await jobStore.loadMoreJobs(findState.searchString)
            }
          >
            Load more
          </Button>
        </Flex>
      ) : null}
    </>
  );
};

export default JobCardList;
