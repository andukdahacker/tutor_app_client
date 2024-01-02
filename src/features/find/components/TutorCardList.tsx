import { Button, Flex } from "@chakra-ui/react";
import { useSnapshot } from "valtio";

import { useEffect } from "react";

import useDebounce from "../../../shared/hooks/useDebounce";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import TutorCard from "./TutorCard";
import { FindContext } from "./context/FindContext";

const TutorCardList = () => {
  const { tutorStore, findStore } = useStoreContext(FindContext);
  const findState = useSnapshot(findStore);
  const tutorState = useSnapshot(tutorStore);

  const debounced = useDebounce(findState.searchString, 500);

  useEffect(() => {
    const fetchData = async () => {
      await tutorStore.findManyTutors(findState.searchString);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await tutorStore.findManyTutors(findState.searchString);
    };

    if (debounced) fetchData();
  }, [debounced]);

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
