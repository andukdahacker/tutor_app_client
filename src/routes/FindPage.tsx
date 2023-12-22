import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { subscribeKey } from "valtio/utils";
import JobCardList from "../features/find/components/JobCardList";
import SuggestedSubjects from "../features/find/components/SuggestedSubjects";
import TutorCardList from "../features/find/components/TutorCardList";
import FindSearchBar from "../features/find/components/search_bar/SearchBar";

import JobFilter from "../features/find/components/JobFilter";
import TutorFilter from "../features/find/components/TutorFilter";
import { FindContext } from "../features/find/components/context/FindContext";
import useStoreContext from "../shared/hooks/useStoreContext";
import { debounce } from "../shared/utils/debounce";

const FindPage = () => {
  const { findStore, subjectStore } = useStoreContext(FindContext);
  const findState = useSnapshot(findStore);
  const subjectState = useSnapshot(subjectStore);

  useEffect(() => {
    const fetchData = debounce(async () => {
      await subjectStore.getSubjects(findStore.searchString);
    }, 500);

    fetchData();

    const unsub = subscribeKey(findStore, "searchString", async () => {
      fetchData();
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      <Container maxW="container.xl">
        <Text
          textAlign={"center"}
          fontSize={{ base: "24px" }}
          fontWeight={"black"}
          color="purple.500"
          py="25px"
        >
          Find {findState.findTarget}
        </Text>

        <FindSearchBar />

        <Box mt={4} mb={4}>
          <SuggestedSubjects
            subjects={subjectState.subjects}
            searchString={findState.searchString}
            onSubjectClick={(subject) =>
              findStore.changeSearchString(subject.name)
            }
            isLoading={subjectState.isLoading}
          />
        </Box>

        {findState.findTarget == "Jobs" && <JobFilter />}
        {findState.findTarget == "Tutors" && <TutorFilter />}

        <SimpleGrid columns={[1, 2, 3]} spacing={[20, 16]} mt={8}>
          {findState.findTarget == "Jobs" ? <JobCardList /> : null}
          {findState.findTarget == "Tutors" ? <TutorCardList /> : null}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default FindPage;
