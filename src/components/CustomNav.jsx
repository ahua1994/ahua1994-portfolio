import React from "react";
import { useNavigate } from "react-router-dom";

const CustomNav = () => {
    const navigate = useNavigate();
    return (
        <div className="CustomNav">
            <div className="logo"></div>
            <div className="links">
                <div className="nav-btn" onClick={() => navigate("/")}>
                    Home
                </div>
            </div>
        </div>
    );
};

export default CustomNav;
