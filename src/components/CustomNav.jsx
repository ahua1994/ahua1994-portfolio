import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CustomNav.scss";
import { useNavigate } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const CustomNav = () => {
    const navigate = useNavigate();
    const [expand, setExpand] = useState(false);

    return (
        <div className="CustomNav" onMouseLeave={() => setExpand(false)}>
            <div className="logo" onClick={() => navigate("/")}>
                Andy Hua
            </div>
            <ul className="links">
                <li className="nav-btn" onClick={() => navigate("/")}>
                    Home
                </li>
                <li className="nav-btn" onClick={() => navigate("/projects")}>
                    Projects
                </li>
                <li className="nav-btn" onClick={() => navigate("/certifications")}>
                    Certs
                </li>

                <li className="nav-btn" onClick={() => navigate("/resume")}>
                    Resume
                </li>
            </ul>
            <div className="burger">
                <FontAwesomeIcon
                    className="icon"
                    icon={faBars}
                    onClick={() => setExpand(!expand)}
                />
                <div
                    className="drop"
                    style={{ transform: expand ? "translate(0%,50px)" : "translate(120%,50px)" }}
                >
                    <div className="nav-btn" onClick={() => navigate("/")}>
                        Home
                    </div>
                    <div className="nav-btn" onClick={() => navigate("/projects")}>
                        Projects
                    </div>
                    <div className="nav-btn" onClick={() => navigate("/certifications")}>
                        Certs
                    </div>

                    <div className="nav-btn" onClick={() => navigate("/resume")}>
                        Resume
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomNav;
