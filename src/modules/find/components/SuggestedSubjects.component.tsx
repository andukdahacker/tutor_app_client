import { Flex, Tag, Text, Wrap } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { subscribeKey } from "valtio/utils";
import { findStore } from "../stores/find.store";

const SuggestedSubjects = () => {
  const findState = useSnapshot(findStore);

  useEffect(() => {
    async function fetchData() {
      await findStore.getSubjects();
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
      <Flex alignItems="center" m="35px 0">
        <Text
          fontWeight="bold"
          lineHeight="7"
          mr={{ base: "10px", sm: "30px" }}
          display={{ base: "none", sm: "block" }}
        >
          Suggested
        </Text>
        <Wrap>
          {findState.subjects?.map((subject) => {
            if (subject.name == findState.searchString) return null;
            return (
              <Tag
                key={subject.id}
                cursor={"pointer"}
                onClick={() => findStore.changeSearchString(subject.name)}
              >
                {subject.name}
              </Tag>
            );
          })}
        </Wrap>
      </Flex>
    </>
  );
};

export default SuggestedSubjects;
