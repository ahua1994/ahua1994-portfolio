import "./SkillBadge.scss";

const SkillBadge = ({ x }) => {
    return (
        <div className="SkillBadge">
            <h1>{x.name}</h1>
            <img src={x.img} alt={x.name} />
        </div>
    );
};

export default SkillBadge;
