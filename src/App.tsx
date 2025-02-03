import "./App.css";
import Background from "./components/background/background";
import MyServicesSection from "./components/sections/myServicesSection/myServices";
import MySkillsSection from "./components/sections/mySkillsSection/mySkillsSection";
import PresentationSection from "./components/sections/presentation/presentation";
import RecentProjectsSection from "./components/sections/recentProjects/recentProjects";
import Layout from "./layout/Layout";
function App() {
  return (
    <>
      <div className="font-mono">
        <Background />
        <Layout>
          <PresentationSection />
          <MyServicesSection />
          <RecentProjectsSection />
          <MySkillsSection/>
        </Layout>
      </div>
    </>
  );
}

export default App;
