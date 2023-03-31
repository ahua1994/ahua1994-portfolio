import { useContext } from "react";
import { CVContext } from "../contexts/CVContext";
import "./Projects.scss";

const Projects = () => {
    const { projects } = useContext(CVContext);
    return (
        <div className="Portfolio">
            Portfolio
            <div className="projects">
                {projects.map(x => (
                    <h1>{x.title}</h1>
                ))}
            </div>
        </div>
    );
};

export default Projects;
