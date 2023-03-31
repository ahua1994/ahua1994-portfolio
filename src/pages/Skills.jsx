import React, { useContext } from "react";
import { CVContext } from "../contexts/CVContext";
const Skills = () => {
    const { skills } = useContext(CVContext);
    return (
        <div className="Skills">
            Skills
            <div className="skills">
                {skills.map(x => (
                    <h1>{x.name}</h1>
                ))}
            </div>
        </div>
    );
};

export default Skills;
