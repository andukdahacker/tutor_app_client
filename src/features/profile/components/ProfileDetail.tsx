import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { AuthContext } from "../../auth/components/context/AuthContext";
import ProfileAbout from "./ProfileAbout";
import TutorProfile from "./TutorProfile";

const ProfileDetail = () => {
  const { authStore } = useStoreContext(AuthContext);
  const { user } = useSnapshot(authStore);
  return (
    <>
      <Tabs w={"100%"} variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>About {user?.username}</Tab>
          <Tab>Tutor profile</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ProfileAbout />
          </TabPanel>
          <TabPanel>
            <TutorProfile />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default ProfileDetail;
