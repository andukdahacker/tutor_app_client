import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import TutorAppliedJobList from "./TutorAppliedJobList";
import TutorCurrentJobList from "./TutorCurrentJobList";
import TutorDoneJobList from "./TutorDoneJobList";

const TutorDashboard = () => {
  return (
    <>
      <Tabs variant={"soft-rounded"}>
        <TabList>
          <Tab>Applied</Tab>
          <Tab>Current</Tab>
          <Tab>Done</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <TutorAppliedJobList />
          </TabPanel>
          <TabPanel>
            <TutorCurrentJobList />
          </TabPanel>
          <TabPanel>
            <TutorDoneJobList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default TutorDashboard;
