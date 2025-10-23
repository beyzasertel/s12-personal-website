import { useContext } from "react";
import { useLanguage } from "../../contexts/languageContext";
import { ThemeContext } from "../../contexts/themeContext";

export default function ChangeLanguageSection() {
  const { switchLanguage, language, text } = useLanguage();
  const [theme] = useContext(ThemeContext);

  return (
    <div className="flex text-lightGray text-xs">
      <p className="m-0">
        {theme === "dark" ? text.mode.dark : text.mode.light}
      </p>

      <span className="bg-lightGray w-px h-3 mx-1 md:mx-2 mt-0.5 "></span>
      <p className="m-0">
        <button
          className="text-pink"
          onClick={() => switchLanguage(language === "tr" ? "en" : "tr")}
        >
          {text.language}
        </button>
        {text.changeLanguage}
      </p>
    </div>
  );
}
