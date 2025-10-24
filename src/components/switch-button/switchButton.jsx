import Form from "react-bootstrap/Form";
import { ThemeContext } from "../../contexts/themeContext";
import { useContext } from "react";
import "./switchButton.css";

export default function SwitchButton() {
  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    <Form>
      <Form.Check
        type="switch"
        id="dark-mode-switch"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
    </Form>
  );
}
