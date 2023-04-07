import { faLink, faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./ProjectCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                <Link to={x.url}>
                    <img src={source} alt={x.title} title="Link To Project" />
                </Link>
                <p className="desc">{x.desc}</p>
            </div>
            <div className="foot">
                <div className="tools">
                    {/* {x.tools.map((tool, i) => (
                        <p key={i}>{tool}</p>
                    ))} */}
                    {x.tools.join(" | ")}
                </div>
                <div className="links">
                    <Link to={x.github} title="Link To Repo">
                        <FontAwesomeIcon icon={faCodeFork} size="2x"></FontAwesomeIcon>
                    </Link>
                    <Link to={x.url} title="Link To Project">
                        <FontAwesomeIcon icon={faLink} size="2x"></FontAwesomeIcon>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
