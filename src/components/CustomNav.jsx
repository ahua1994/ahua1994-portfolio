import "./CustomNav.scss";
import { useNavigate } from "react-router-dom";

const CustomNav = () => {
    const navigate = useNavigate();
    return (
        <div className="CustomNav">
            <div className="logo" onClick={() => navigate("/")}>
                Andy Hua
            </div>
            <div className="links">
                <div className="nav-btn" onClick={() => navigate("/projects")}>
                    Projects
                </div>
                <div className="nav-btn" onClick={() => navigate("/resume")}>
                    Resume
                </div>
            </div>
        </div>
    );
};

export default CustomNav;
