import { Button, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSnapshot } from "valtio";

import { subscribeKey } from "valtio/utils";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { debounce } from "../../../shared/utils/debounce";
import { AuthContext } from "../../auth/components/context/AuthContext";
import JobCard from "./JobCard";
import { FindContext } from "./context/FindContext";

const JobCardList = () => {
  const { jobStore, findStore } = useStoreContext(FindContext);
  const { authStore } = useStoreContext(AuthContext);
  const findState = useSnapshot(findStore);
  const jobState = useSnapshot(jobStore);
  const authState = useSnapshot(authStore);

  useEffect(() => {
    const fetchData = debounce(async () => {
      await jobStore.findManyJobs({
        searchString: findState.searchString,
        take: 10,
        sortBy: findState.sortBy,
        jobMethod: findState.jobMethod,
        jobType: findState.jobType,
        tutorId: authStore.user?.tutorProfile.id ?? "",
        minFee: findState.minFee,
        maxFee: findState.maxFee,
      });
    }, 500);
    fetchData();

    subscribeKey(jobStore, "jobPageInfo", (data) =>
      console.log(data?.lastTake)
    );
  }, [
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
                tutorId: authState.user?.tutorProfile.id ?? "",
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
