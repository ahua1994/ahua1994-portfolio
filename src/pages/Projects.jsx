import { useContext } from "react";
import { CVContext } from "../contexts/CVContext";
import "./Projects.scss";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    const { projects } = useContext(CVContext);
    return (
        <div className="Portfolio">
            Portfolio
            <div className="projects">
                {projects.map(x => (
                    <ProjectCard x={x} key={x.title} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
