import { useContext } from "react";
import "./Skills.scss";
import { CVContext } from "../contexts/CVContext";

const Skills = () => {
    const { skills } = useContext(CVContext);
    return (
        <div className="Skills">
            <div className="skillbar">
                <div className="skillrow">
                    {skills.map(x => (
                        <div className="skillbadge" key={x.name}>
                            <h1>{x.name}</h1>
                            <img src={x.img} alt={x.name} />
                        </div>
                    ))}
                </div>
                <div className="skillrow">
                    {skills.map(x => (
                        <div className="skillbadge" key={x.name}>
                            <h1>{x.name}</h1>
                            <img src={x.img} alt={x.name} />
                        </div>
                    ))}
                </div>
                <div className="skillrow">
                    {skills.map(x => (
                        <div className="skillbadge" key={x.name}>
                            <h1>{x.name}</h1>
                            <img src={x.img} alt={x.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
