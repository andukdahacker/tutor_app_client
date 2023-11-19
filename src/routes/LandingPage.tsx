import HomeBanner from "../features/landing_page/components/HomeBanner";
import HomeExplore from "../features/landing_page/components/HomeExplore";
import HomeKickStart from "../features/landing_page/components/HomeKickStart";
import HomeQuestions from "../features/landing_page/components/HomeQuestions";
import Footer from "../shared/components/footer/Footer";

const LandingPage = () => {
  return (
    <>
      <HomeBanner />
      <HomeExplore />
      <HomeQuestions />
      <HomeKickStart />
      <Footer />
    </>
  );
};

export default LandingPage;
