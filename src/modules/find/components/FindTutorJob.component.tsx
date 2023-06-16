import JobCard from "@/modules/find/components/JobCard.component";
import Footer from "@/shared/components/footer/footer.component";
import useDebounce from "@/shared/hooks/useDebounce";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Input,
  InputGroup,
  InputRightAddon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { subscribeKey } from "valtio/utils";
import { findStore } from "../stores/find.store";

const FindTutorJob = () => {
  const findState = useSnapshot(findStore);

  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearch = useDebounce(findState.searchString, 500);

  useEffect(() => {
    subscribeKey(findStore, "searchString", () => {
      console.log("asd");
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
          Find Tutor Job
        </Text>

        <Box maxW="500px" m="0 auto">
          <InputGroup size="sm">
            <Input
              type="text"
              placeholder="Enter a subject"
              borderRadius="4px"
              onChange={(e) => {
                findStore.changeSearchString(e.target.value);
              }}
            />
            <InputRightAddon borderRadius="0 4px 4px 0">
              <SearchIcon />
            </InputRightAddon>
          </InputGroup>
        </Box>

        <SimpleGrid columns={[1, 2, 3]} spacing={[20, 16]}>
          {findState.jobs.map((job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </SimpleGrid>

        <Footer />
      </Container>
    </>
  );
};

export default FindTutorJob;
