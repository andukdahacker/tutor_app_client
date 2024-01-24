import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router";
import { useSnapshot } from "valtio";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { AuthContext } from "../../auth/components/context/AuthContext";
import ProfileAbout from "./ProfileAbout";
import TutorProfile from "./TutorProfile";

const ProfileDetail = () => {
  const { authStore } = useStoreContext(AuthContext);
  const { user } = useSnapshot(authStore);
  const location = useLocation();

  const search = new URLSearchParams(location.search);

  const showTutorFirst = search.get("tutor");

  const [tab, setTab] = useState(showTutorFirst ? 1 : 0);

  return (
    <>
      <Tabs index={tab} w={"100%"} variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab onClick={() => setTab(0)}>About {user?.username}</Tab>
          <Tab onClick={() => setTab(1)}>Tutor profile</Tab>
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
