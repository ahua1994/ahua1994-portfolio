import "./ProjectCard.scss";

const ProjectCard = ({ x }) => {
    return (
        <div className="ProjectCard">
            <h1>{x.title}</h1>
        </div>
    );
};

export default ProjectCard;
