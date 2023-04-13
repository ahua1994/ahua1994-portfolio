import "./ProjectCard.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ x, setAlpha, setScale, setSrc }) => {
    const [source, setSource] = useState(x.img);
    return (
        <div
            data-aos="fade-down"
            data-aos-duration="1200"
            className="ProjectCard"
            onMouseOver={() => setSource(x.gif)}
            onMouseLeave={() => setSource(x.img)}
        >
            <div className="main">
                <h2>{x.title}</h2>
                <img
                    className="card-img"
                    src={source}
                    alt={x.title}
                    title="Click To Enlarge"
                    onClick={() => {
                        setSrc(x.gif);
                        setScale(100);
                        setAlpha(0.9);
                    }}
                    onMouseLeave={() => {
                        setAlpha(0);
                        setScale(10);
                    }}
                />
                <p className="desc">{x.desc}</p>
            </div>
            <div className="foot">
                <div className="tools">{x.tools.join(" | ")}</div>
                <div className="links">
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        to={x.github}
                        title="Link To Repo"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </Link>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        to={x.url}
                        title="Link To Project"
                    >
                        <FontAwesomeIcon icon={faLink} size="2x"></FontAwesomeIcon>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
