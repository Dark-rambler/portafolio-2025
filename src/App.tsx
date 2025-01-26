import "./App.css";
import Background from "./components/background/background";
import IconSelect from "./components/IconSelect/iconSelect";
import MyServicesSection from "./components/myServicesSection/myServices";
import PresentationSection from "./components/presentation/presentation";
import Layout from "./layout/Layout";
function App() {
  return (
    <>
      <div className="font-mono">
        <Background />
        <Layout>
          <PresentationSection />
          <MyServicesSection/>
        </Layout>
      </div>
    </>
  );
}

export default App;
