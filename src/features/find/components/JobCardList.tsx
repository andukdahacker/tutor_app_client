import { Button, Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useSnapshot } from "valtio";

import { debounce } from "../../../shared/utils/debounce";
import { AuthContext } from "../../auth/components/context/AuthContext";
import JobCard from "./JobCard";
import { FindContext } from "./context/FindContext";

const JobCardList = () => {
  const { jobStore, findStore } = useContext(FindContext);
  const { authStore } = useContext(AuthContext);
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
        tutorId: authState.user?.tutorProfile.id ?? "",
      });
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
              await jobStore.loadMoreJobs({
                searchString: findState.searchString,
                take: 10,
                sortBy: findState.sortBy,
                jobMethod: findState.jobMethod,
                jobType: findState.jobType,
                tutorId: authState.user?.tutorProfile.id ?? "",
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
