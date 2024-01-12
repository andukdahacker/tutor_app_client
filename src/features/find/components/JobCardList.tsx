import { Button, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSnapshot } from "valtio";

import useDebounce from "../../../shared/hooks/useDebounce";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import JobCard from "../../job/components/JobCard";
import { FindContext } from "./context/FindContext";

const JobCardList = () => {
  const { jobStore, findStore } = useStoreContext(FindContext);
  const findState = useSnapshot(findStore);
  const jobState = useSnapshot(jobStore);

  const debounced = useDebounce(findState.searchString, 500);

  useEffect(() => {
    const fetchData = async () => {
      await jobStore.findManyJobs({
        searchString: findState.searchString,
        take: 10,
        sortBy: findState.sortBy,
        jobMethod: findState.jobMethod,
        jobType: findState.jobType,
        minFee: findState.minFee,
        maxFee: findState.maxFee,
      });
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await jobStore.findManyJobs({
        searchString: findState.searchString,
        take: 10,
        sortBy: findState.sortBy,
        jobMethod: findState.jobMethod,
        jobType: findState.jobType,
        minFee: findState.minFee,
        maxFee: findState.maxFee,
      });
    };

    if (debounced) fetchData();
  }, [
    debounced,
    findState.searchString,
    findState.minFee,
    findState.maxFee,
    findState.jobMethod,
    findState.sortBy,
  ]);

  return (
    <>
      {jobState.jobs.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}

      {jobState.jobPageInfo?.hasNextPage ? (
        <Flex align={"center"} justify={"center"}>
          <Button
            isLoading={jobState.isLoadingMore}
            w={"50%"}
            onClick={async () =>
              await jobStore.loadMoreJobs({
                searchString: findState.searchString,
                take: jobState.jobPageInfo?.lastTake ?? 10,
                sortBy: findState.sortBy,
                jobMethod: findState.jobMethod,
                jobType: findState.jobType,
                maxFee: findState.maxFee,
                minFee: findState.minFee,
              })
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
