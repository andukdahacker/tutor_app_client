import { Button, Flex } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import { findStore } from "../../shared/data/find.store";
import { tutorStore } from "../data/tutor.store";

const TutorCardList = () => {
  const tutorState = useSnapshot(tutorStore);
  const findState = useSnapshot(findStore);
  return (
    <>
      {tutorState.tutors.map((tutor) => (
        <div key={tutor.id}>{tutor.user.username}</div>
      ))}

      {findState.showLoadMoreTutors ? (
        <Flex align={"center"} justify={"center"}>
          <Button
            w={"50%"}
            onClick={async () => {
              await tutorStore.loadMoreTutors();
            }}
            isLoading={tutorState.isLoadingMore}
          >
            Load more
          </Button>
        </Flex>
      ) : null}
    </>
  );
};

export default TutorCardList;
