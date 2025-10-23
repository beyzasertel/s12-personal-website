import { createContext, useState, useContext } from "react";
import languageData from "../assets/languageData";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("tr");

  const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage, text: languageData[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
