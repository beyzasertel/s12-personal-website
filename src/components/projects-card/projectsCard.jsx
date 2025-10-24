import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import PillButton from "../pill-button/pillButton";

export default function ProjectsCard({
  title,
  text,
  buttons,
  gitHubLink,
  projectLink,
  image,
  bgColor,
  bgColorDark,
}) {
  const [theme] = useContext(ThemeContext);

  return (
    <div
      className={`
    ${theme === "dark" && bgColorDark === "lightBlack" ? "bg-lightBlack" : ""}
    ${theme === "dark" && bgColorDark === "darkGreen" ? "bg-darkGreen" : ""}
    ${theme !== "dark" && bgColor === "lightBlue" ? "bg-lightBlue" : ""}
    ${theme !== "dark" && bgColor === "lightGreen" ? "bg-lightGreen" : ""}
    relative p-8 mb-12 rounded-4
  `}
    >
      <div className="h-72">
        <p className="font-playfair text-3xl mb-2 text-black dark:text-white!">
          {title}
        </p>
        <p className="mb-4 text-black dark:text-white!">{text}</p>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 w-max mb-4">
          {buttons.map((button) => (
            <PillButton key={button.title} title={button.title} />
          ))}
        </div>

        <div className="w-full flex flex-col md:flex-row items-center md:justify-between py-4">
          <a
            href={gitHubLink}
            className="no-underline! text-black dark:text-white!"
          >
            View on Github
          </a>
          <a
            href={projectLink}
            className="no-underline! text-black dark:text-white!"
          >
            Go to app -&gt;
          </a>
        </div>
      </div>

      <div className="w-full h-64 rounded-2xl mt-[-80px] md:mt-[-50px]">
        <img
          src={image}
          alt={title}
          className="relative bottom-[-190px] md:bottom-[-60px]"
        />
      </div>
    </div>
  );
}
