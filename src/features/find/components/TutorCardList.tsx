import { Button, Flex } from "@chakra-ui/react";
import { useSnapshot } from "valtio";

import { useContext, useEffect } from "react";

import { debounce } from "../../../shared/utils/debounce";
import TutorCard from "./TutorCard";
import { FindContext } from "./context/FindContext";

const TutorCardList = () => {
  const { tutorStore, findStore } = useContext(FindContext);
  const findState = useSnapshot(findStore);
  const tutorState = useSnapshot(tutorStore);

  useEffect(() => {
    const fetchData = debounce(async () => {
      await tutorStore.findManyTutors(findState.searchString);
    }, 500);

    fetchData();
  }, [findState.searchString]);

  return (
    <>
      {tutorState.tutors.map((tutor) => (
        <TutorCard key={tutor.id} {...tutor} />
      ))}

      {tutorState.canLoadMore ? (
        <Flex align={"center"} justify={"center"}>
          <Button
            w={"50%"}
            onClick={async () => {
              await tutorStore.loadMoreTutors(findState.searchString);
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
