import "./Projects.scss";
import { useContext, useState } from "react";
import { CVContext } from "../contexts/CVContext";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    const { projects } = useContext(CVContext);
    const [alpha, setAlpha] = useState(0);
    const [src, setSrc] = useState("");
    const [scale, setScale] = useState(10);

    return (
        <>
            <div className="Portfolio">
                <div className="cover" style={{ backgroundColor: `rgba(0,0,0,${alpha})` }}>
                    <img
                        src={src}
                        alt={src}
                        style={{
                            transform: `scale(${scale}%)`,
                            opacity: alpha === 0 ? 0 : 1,
                            pointerEvents: alpha === 0 ? "none" : "all",
                        }}
                        onMouseLeave={() => {
                            setAlpha(0);
                            setScale(10);
                        }}
                    />
                </div>
                {projects.map(x => (
                    <ProjectCard {...{ x, setSrc, setScale, setAlpha }} key={x.title} />
                ))}
            </div>
        </>
    );
};

export default Projects;
