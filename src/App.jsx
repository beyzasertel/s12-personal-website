import "./App.css";
import BannerSection from "./sections/banner-section/bannerSection";
import HeaderSection from "./sections/header-section/headerSection";
import ProfileSection from "./sections/profile-section/profileSection";
import ProjectsSection from "./sections/projects-section/projectsSection";
import SkillsSection from "./sections/skills-section/skillsSection";

function App() {
  return (
    <>
      <HeaderSection />
      <BannerSection />
      <SkillsSection />
      <ProfileSection />
      <ProjectsSection />
    </>
  );
}

export default App;
