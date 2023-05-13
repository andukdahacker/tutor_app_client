import authStore from "@/modules/auth/stores/auth.store";
import FindTutorJob from "@/modules/findTutorJob/components/FindTutorJob.component";
import HomeBanner from "@/modules/home/components/home.banner.component";
import HomeExplore from "@/modules/home/components/home.explore.component";
import HomeKickStart from "@/modules/home/components/home.kick-start.component";
import HomeQuestions from "@/modules/home/components/home.questions.component";
import { PropsWithChildren, useEffect } from "react";
import { useSnapshot } from "valtio";
import Footer from "../footer/footer.component";
import NavBar from "../navbar/navbar.component";

const AppLayout = ({ children }: PropsWithChildren) => {
  const authState = useSnapshot(authStore);
  useEffect(() => {
    async function checkAuth() {
      await authStore.checkIfAuthenticated();
    }

    checkAuth();
  }, []);
  return (
    <>
      <NavBar />

      {authState.isAuthenticated ? (
        <FindTutorJob />
      ) : (
        <>
          <HomeBanner />
          <HomeExplore />
          <HomeQuestions />
          <HomeKickStart />
          <Footer />
        </>
      )}
    </>
  );
};

export default AppLayout;
