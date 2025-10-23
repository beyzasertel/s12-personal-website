import { useEffect, useContext } from "react";

import { ThemeContext } from "../../contexts/themeContext";
import SwitchButton from "../../components/switchButton/switchButton";

export default function ChangeThemeSection() {
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("dark", "bg-gray-800");
      body.classList.remove("bg-white");
      body.setAttribute("data-theme", "dark");
    } else {
      body.classList.remove("dark", "bg-gray-800");
      body.classList.add("bg-white");
      body.setAttribute("data-theme", "light");
    }
  }, [theme]);

  return (
    <div className="flex items-center">
      <SwitchButton />
    </div>
  );
}
