import React from "react";
import resume from "../helpers/resume/AndyHua2023.pdf";

const Resume = () => {
    return (
        <div
            className="Resume"
            style={{ margin: "4rem 0" }}
            data-aos="zoom-in"
            data-aos-duration="1000"
        >
            <iframe src={resume} height="1000px" width="850px" title="Andy Hua 2023"></iframe>
        </div>
    );
};

export default Resume;
