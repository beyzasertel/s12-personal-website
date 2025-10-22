import { useEffect } from "react";
import "./App.css";
import ChangeThemeSection from "./sections/change-theme-section/changeThemeSection";

function App() {
  return (
    <>
      <ChangeThemeSection></ChangeThemeSection>
      <p className="text-lg text-gray-200 dark:text-pink mb-6">
        Bu yazının rengi temaya göre değişiyor!
      </p>
    </>
  );
}

export default App;
