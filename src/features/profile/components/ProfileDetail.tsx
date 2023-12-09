import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useContext } from "react";
import { useSnapshot } from "valtio";
import { AuthContext } from "../../auth/components/context/AuthContext";
import ProfileAbout from "./ProfileAbout";

const ProfileDetail = () => {
  const { authStore } = useContext(AuthContext);
  const { user } = useSnapshot(authStore);
  return (
    <>
      <Tabs w={"100%"} variant="soft-rounded" colorScheme="green" m={10}>
        <TabList>
          <Tab>About {user?.username}</Tab>
          <Tab>Tutor profile</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ProfileAbout />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default ProfileDetail;
