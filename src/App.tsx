import "./App.css";
import Background from "./components/background/background";
import PresentationSection from "./components/presentation/presentation";
import Layout from "./layout/Layout";
function App() {
  return (
    <>
      <div className="font-mono">
        <Background />
        <Layout>
          <PresentationSection />
        </Layout>
      </div>
    </>
  );
}

export default App;
