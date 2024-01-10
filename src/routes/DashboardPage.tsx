import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import LearnerDashboard from "../features/dashboard/components/LearnerDashboard";

const DashboardPage = () => {
  return (
    <>
      <Tabs isFitted colorScheme="purple">
        <TabList>
          <Tab>Learner</Tab>
          <Tab>Tutor</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <LearnerDashboard />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default DashboardPage;
