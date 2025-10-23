import "./App.css";
import HeaderSection from "./sections/header-section/headerSection";

function App() {
  return (
    <>
      <HeaderSection />

      <p className="text-lg text-gray-200 dark:text-pink mb-6">
        Bu yazının rengi temaya göre değişiyor!
      </p>
    </>
  );
}

export default App;
