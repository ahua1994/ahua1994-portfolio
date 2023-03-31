import { useContext } from "react";
import "./Skills.scss";
import { CVContext } from "../contexts/CVContext";
import SkillBadge from "../components/SkillBadge";

const Skills = () => {
    const { skills } = useContext(CVContext);
    return (
        <div className="Skills">
            Skills
            {skills.map(x => (
                <SkillBadge x={x} key={x.name} />
            ))}
        </div>
    );
};

export default Skills;
