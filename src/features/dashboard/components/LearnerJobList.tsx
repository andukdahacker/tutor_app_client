import { SimpleGrid } from "@chakra-ui/react";
import useUser from "../../../shared/hooks/useUser";
import LearnerJobCard from "./LearnerJobCard";

const LearnerJobList = () => {
  const user = useUser();
  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing={[20, 16]} mt={8}>
        {user?.learnerProfile.jobs.map((job) => {
          return (
            <>
              <LearnerJobCard job={job} key={job.id} />
            </>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default LearnerJobList;
