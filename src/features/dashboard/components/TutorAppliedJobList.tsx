import { Button, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import useUser from "../../../shared/hooks/useUser";
import DashboardContext from "../context/dashboard_context";
import JobConnectionCard from "./JobConnectionCard";

const TutorAppliedJobList = () => {
  const { tutorAppliedJobStore: tutorJobConnectionStore } =
    useStoreContext(DashboardContext);
  const { jobConnections, pageInfo } = useSnapshot(tutorJobConnectionStore);
  const user = useUser();
  useEffect(() => {
    async function fetchData() {
      await tutorJobConnectionStore.getTutorAppliedConnections(
        user?.tutorProfile.id ?? ""
      );
    }

    if (user?.tutorProfile.id) {
      fetchData();
    }
  }, [user?.tutorProfile.id]);

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing={[20, 16]} mt={8} mb={8}>
        {jobConnections.map((jc) => {
          return (
            <JobConnectionCard
              jobConnection={jc}
              key={`${jc.jobId}${jc.tutorId}`}
            />
          );
        })}
      </SimpleGrid>
      {pageInfo?.hasNextPage && (
        <Button
          onClick={() =>
            tutorJobConnectionStore.loadMoreTutorAppliedConnections()
          }
        >
          Load more
        </Button>
      )}
    </>
  );
};

export default TutorAppliedJobList;
