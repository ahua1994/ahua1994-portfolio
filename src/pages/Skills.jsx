import { useContext } from "react";
import "./Skills.scss";
import { CVContext } from "../contexts/CVContext";

const Skills = () => {
    const { skills } = useContext(CVContext);
    return (
        <div className="Skills" data-aos="fade-down" data-aos-duration="800">
            <div className="skillbar">
                <div className="skillrow">
                    {skills.map(x => (
                        <div
                            className="skillbadge"
                            key={x.name}
                            data-aos="flip-right"
                            data-aos-duration="1000"
                        >
                            <h1>{x.name}</h1>
                            <img src={x.img} alt={x.name} />
                        </div>
                    ))}
                </div>
                <div className="skillrow">
                    {skills.map(x => (
                        <div
                            className="skillbadge"
                            key={x.name}
                            data-aos="flip-right"
                            data-aos-duration="1000"
                        >
                            <h1>{x.name}</h1>
                            <img src={x.img} alt={x.name} />
                        </div>
                    ))}
                </div>
                <div className="skillrow">
                    {skills.map(x => (
                        <div
                            className="skillbadge"
                            key={x.name}
                            data-aos="flip-right"
                            data-aos-duration="1000"
                        >
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
