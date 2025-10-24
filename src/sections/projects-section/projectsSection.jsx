import { projects } from "../../assets/projectsData";
import ProjectsCard from "../../components/projects-card/projectsCard";
export default function ProjectsSection() {
  return (
    <div className="py-8 dark:bg-softBlack mb-12">
      <p className="text-center text-mediumBlack dark:text-white text-3xl md:text-5xl md:pb-12">
        Projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container rounded-4">
        {projects.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            text={project.text}
            buttons={project.buttons}
            gitHubLink={project.gitHubLink}
            projectLink={project.projectLink}
            image={project.image}
            bgColor={project.bgColor}
            bgColorDark={project.bgColorDark}
          />
        ))}
      </div>
    </div>
  );
}
