import Form from "react-bootstrap/Form";
import { ThemeContext } from "../../contexts/themeContext";
import { useContext } from "react";

export default function SwitchButton({ isDark, onToggle }) {
  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    <Form>
      <Form.Check
        type="switch"
        id="dark-mode-switch"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
    </Form>
  );
}
