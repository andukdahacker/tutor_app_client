import JobCard from "@/modules/find/components/JobCard.component";
import Footer from "@/shared/components/footer/footer.component";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { subscribeKey } from "valtio/utils";
import { findStore, findTargets } from "../stores/find.store";
import SuggestedSubjects from "./SuggestedSubjects.component";

const FindTutorJob = () => {
  const findState = useSnapshot(findStore);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await findStore.find();
      setIsLoading(false);
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
          Find Tutor Job
        </Text>

        <Box maxW="500px" m="0 auto">
          <InputGroup size={"md"}>
            <Input
              type="text"
              placeholder="Enter a subject"
              borderRadius="4px"
              onChange={(e) => {
                findStore.changeSearchString(e.target.value);
              }}
              value={findState.searchString}
            />
            <InputRightElement w="fit-content">
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  {findState.findTarget}
                </MenuButton>
                <MenuList>
                  {findTargets.map((target) => {
                    return (
                      <MenuItem
                        key={target}
                        onClick={() => findStore.changeFindTarget(target)}
                      >
                        {target}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </InputRightElement>
          </InputGroup>
        </Box>

        <SuggestedSubjects />

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
