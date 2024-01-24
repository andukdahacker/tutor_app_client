import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import LearnerDashboard from "../features/dashboard/components/LearnerDashboard";
import TutorDashboard from "../features/dashboard/components/TutorDashboard";

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
            <TutorDashboard />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default DashboardPage;
