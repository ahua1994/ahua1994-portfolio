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
            <div className="main">
                <h2>{x.title}</h2>
                <img src={source} alt={x.title} />
                <p className="desc">{x.desc}</p>
            </div>
            <div className="tools">
                {x.tools.map((tool, i) => (
                    <p key={i}>{tool}</p>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
