import { useContext, useState } from "react";
import "./Skills.scss";
import { CVContext } from "../contexts/CVContext";

const Skills = () => {
    const { skills } = useContext(CVContext);
    const [pause, setPause] = useState(false);
    return (
        <div className="Skills" data-aos="fade-down" data-aos-duration="1200">
            <div className="skillbar">
                {[1, 2, 3].map(row => (
                    <div
                        className="skillrow"
                        key={row}
                        style={{ animationPlayState: pause ? "paused" : "running" }}
                    >
                        {skills.map(x => (
                            <div
                                className="skillbadge"
                                key={x.name}
                                data-aos="flip-right"
                                data-aos-duration="2000"
                                onMouseEnter={() => setPause(true)}
                                onMouseLeave={() => setPause(false)}
                            >
                                <h3>{x.name}</h3>
                                <img src={x.img} alt={x.name} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
