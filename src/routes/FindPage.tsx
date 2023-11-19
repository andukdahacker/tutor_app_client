import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useSnapshot } from "valtio";
import { subscribeKey } from "valtio/utils";
import JobCardList from "../features/find/components/JobCardList";
import SuggestedSubjects from "../features/find/components/SuggestedSubjects";
import TutorCardList from "../features/find/components/TutorCardList";
import FindSearchBar from "../features/find/components/search_bar/SearchBar";

import { FindContext } from "../features/find/components/context/FindContext";
import { FindProvider } from "../features/find/components/context/FindProvider";
import { debounce } from "../shared/utils/debounce";

const FindPage = () => {
  const { findStore, subjectStore } = useContext(FindContext);
  const findState = useSnapshot(findStore);
  const subjectState = useSnapshot(subjectStore);

  useEffect(() => {
    const fetchData = debounce(async () => {
      await subjectStore.getSubjects(findStore.searchString);
    }, 500);

    fetchData();

    subscribeKey(findStore, "searchString", async () => {
      fetchData();
    });
  }, []);

  return (
    <FindProvider>
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

        <SuggestedSubjects
          subjects={subjectState.subjects}
          searchString={findState.searchString}
          onSubjectClick={(subject) =>
            findStore.changeSearchString(subject.name)
          }
          isLoading={subjectState.isLoading}
        />

        <SimpleGrid columns={[1, 2, 3]} spacing={[20, 16]}>
          {findState.findTarget == "Jobs" ? <JobCardList /> : null}
          {findState.findTarget == "Tutors" ? <TutorCardList /> : null}
        </SimpleGrid>
      </Container>
    </FindProvider>
  );
};

export default FindPage;