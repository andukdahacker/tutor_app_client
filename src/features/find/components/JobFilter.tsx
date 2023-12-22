import {
  Button,
  Flex,
  HStack,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiMoney } from "react-icons/bi";
import { useSnapshot } from "valtio";
import { JobMethod, SortBy } from "../../../domain/entities";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { FindContext } from "./context/FindContext";

const JobFilter = () => {
  const { findStore } = useStoreContext(FindContext);
  const findState = useSnapshot(findStore);
  return (
    <>
      <HStack>
        <VStack>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Hourly rate
          </Text>
          <Popover>
            <PopoverTrigger>
              <Button variant={"outline"} leftIcon={<Icon as={BiMoney} />}>
                {findState.minFee} - {findState.maxFee}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Text>
                  {findState.minFee} - {findState.maxFee}
                </Text>
                <RangeSlider
                  aria-label={["min", "max"]}
                  min={0}
                  max={1000000}
                  step={50000}
                  defaultValue={[findState.minFee, findState.maxFee]}
                  onChangeEnd={(val) => {
                    findStore.changeMinFee(val[0]);
                    findStore.changeMaxFee(val[1]);
                  }}
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </VStack>

        <Flex justifyContent={"start"} direction={"column"}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Location
          </Text>
          <Select
            w={40}
            value={findState.jobMethod}
            onChange={(event) => {
              findStore.changeJobMethod(event.target.value as JobMethod);
            }}
          >
            <option value={"ONLINE"}>ONLINE</option>
            <option value={"OFFLINE"}>OFFLINE</option>
            <option value={"BOTH"}>BOTH</option>
          </Select>
        </Flex>
        <Spacer />
        <Flex justifyContent={"start"} direction={"column"}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Sort by
          </Text>
          <Select
            value={findState.sortBy}
            onChange={(event) => {
              findStore.changeSortBy(event.target.value as SortBy);
            }}
            w={40}
          >
            <option value={"asc"}>Oldest</option>
            <option value={"desc"}>Newest</option>
          </Select>
        </Flex>
      </HStack>
    </>
  );
};

export default JobFilter;
