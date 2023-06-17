import { Button, Flex } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import { findStore } from "../../shared/find.store";
import { tutorStore } from "../tutor.store";

const TutorCardList = () => {
  const tutorState = useSnapshot(tutorStore);
  const findState = useSnapshot(findStore);
  return (
    <>
      {tutorState.tutors.map((tutor) => (
        <div key={tutor.id}>{tutor.user.username}</div>
      ))}

      {findState.showLoadMoreJobs ? (
        <Flex align={"center"} justify={"center"}>
          <Button w={"50%"} onClick={() => {}}>
            Load more
          </Button>
        </Flex>
      ) : null}
    </>
  );
};

export default TutorCardList;
