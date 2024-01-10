import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import LearnerJobList from "./LearnerJobList";

const LearnerDashboard = () => {
  return (
    <>
      <Tabs variant={"soft-rounded"}>
        <TabList>
          <Tab>Current jobs</Tab>
          <Tab>Requests</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <LearnerJobList />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default LearnerDashboard;
