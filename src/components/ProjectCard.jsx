import { useState } from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ x }) => {
    const [source, setSource] = useState(x.img);
    return (
        <div
            className="ProjectCard"
            onMouseOver={() => setSource(x.gif)}
            onMouseLeave={() => setSource(x.img)}
        >
            <h1>{x.title}</h1>
            <img src={source} alt={x.title} />
            <p>{x.desc}</p>
            <div className="tools">
                {x.tools.map((tool, i) => (
                    <p key={i}>{tool}</p>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
