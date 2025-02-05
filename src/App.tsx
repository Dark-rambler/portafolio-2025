import "./App.css";
import Background from "./components/background/background";
import Footer from "./components/footer/footer";
import Contact from "./components/sections/contact/contact";
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
          <div className="2xl:min-h-[62vh]">
            <PresentationSection />
          </div>
          <MyServicesSection />
          <RecentProjectsSection />
          <MySkillsSection />
          <Contact />
          <Footer />
        </Layout>
      </div>
    </>
  );
}

export default App;
