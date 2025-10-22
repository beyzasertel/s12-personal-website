import { useEffect, useContext } from "react";
import SwitchButton from "../../components/switchButton/switchButton";
import { ThemeContext } from "../../contexts/themeContext";

export default function ChangeThemeSection() {
  const [theme, toggleTheme] = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "light");
  }, [theme]);

  return (
    <div className="p-4">
      <SwitchButton />
    </div>
  );
}
