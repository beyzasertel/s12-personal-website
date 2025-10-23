import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

export default function IconButton({ text, icon, darkThemeIcon, link }) {
  const [theme] = useContext(ThemeContext);
  return (
    <a href={link}>
      <img
        src={theme === "dark" ? darkThemeIcon : icon}
        alt={text}
        className="w-4 h-4 md:h-6 md:w-6"
      />
    </a>
  );
}
