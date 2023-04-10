import "./Projects.scss";
import { useContext } from "react";
import { CVContext } from "../contexts/CVContext";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    const { projects } = useContext(CVContext);
    return (
        <div className="Portfolio">
            {projects.map(x => (
                <ProjectCard x={x} key={x.title} />
            ))}
        </div>
    );
};

export default Projects;
