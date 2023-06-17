import Footer from "@/shared/components/footer/footer.component";
import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { subscribeKey } from "valtio/utils";
import JobCardList from "../../jobs/components/JobCardList.component";
import SuggestedSubjects from "../../subjects/components/SuggestedSubjects.component";
import TutorCardList from "../../tutors/components/TutorCardList.component";
import { findStore } from "../find.store";
import FindSearchBar from "./FindSearchBar.component";

const FindTutorJob = () => {
  const findState = useSnapshot(findStore);

  useEffect(() => {
    async function fetchData() {
      await findStore.find();
    }

    fetchData();

    subscribeKey(findStore, "searchString", () => {
      setTimeout(async () => {
        await fetchData();
      }, 500);
    });
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

        <SuggestedSubjects />

        <SimpleGrid columns={[1, 2, 3]} spacing={[20, 16]}>
          {findState.isFindingJobs ? <JobCardList /> : null}

          {findState.isFindingTutors ? <TutorCardList /> : null}
        </SimpleGrid>

        <Footer />
      </Container>
    </>
  );
};

export default FindTutorJob;
