import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import { skills } from "../../assets/skillsData";
import SkillsCard from "../../components/skills-card/skillsCard";

export default function SkillsSection() {
  const [theme] = useContext(ThemeContext);

  return (
    <div className="relative dark:bg-softBlack">
      <img
        src={
          theme === "dark"
            ? "src/assets/images/elements/dark-gray-circle.svg"
            : "src/assets/images/elements/light-gray-circle.svg"
        }
        alt="circle"
        className="absolute top-[-4%] md:top-[-10%] right-[30%] h-12 w-12 md:h-22 md:w-22"
      />
      <div className="container py-12 md:py-28">
        <p className="text-center text-mediumBlack text-3xl md:text-5xl pb-2 md:pb-8">
          Skills
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 ">
          {skills.map((skill, index) => {
            return (
              <SkillsCard key={index} text={skill.text} icon={skill.icon} />
            );
          })}
        </div>
      </div>

      <img
        src="src/assets/images/elements/rounded-dark-gray-rectangle.svg"
        alt="rectangle"
        className="absolute  bottom-0 left-0 h-12 w-12 md:h-22 md:w-22"
      />
    </div>
  );
}
