import { useEffect, useContext } from "react";
import SwitchButton from "../../components/switchButton/switchButton";
import { ThemeContext } from "../../contexts/themeContext";

export default function ChangeThemeSection() {
  const [theme, toggleTheme] = useContext(ThemeContext);

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
    <div className="p-4">
      <SwitchButton />
    </div>
  );
}
