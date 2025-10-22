import { useState, useEffect, useContext } from "react";
import SwitchButton from "../../components/switchButton/switchButton";
import { ThemeContext } from "../../contexts/themeContext";

export default function ChangeLanguageSection() {
  const [theme, toggleTheme] = useContext(ThemeContext);

  // Body’ye class ekle
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "light");
  }, [theme]);

  return (
    <div className="p-4">
      <SwitchButton />
      <div className="bg-red-500 text-white p-4">Merhaba</div>
    </div>
  );
}
