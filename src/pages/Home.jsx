import { Link, useNavigate } from "react-router-dom";
// import Certs from "./Certs";
import Skills from "./Skills";
// import Projects from "./Projects";
import "./Home.scss";
import { useContext } from "react";
import { CVContext } from "../contexts/CVContext";

const Home = () => {
    const { projects, certs } = useContext(CVContext);
    const navigate = useNavigate();
    return (
        <div className="Home">
            <h1>Still In Development, but feel free to browse around!</h1>
            <Link
                target="_blank"
                rel="noopener noreferrer"
                to={"https://www.codewars.com/users/ahua1994"}
            >
                <img
                    src="https://www.codewars.com/users/ahua1994/badges/large"
                    alt="CodeWars Badge"
                />
            </Link>
            <div className="intro">
                <h1>My name is Andy Hua!</h1>
                <h2>This Portfolio showcases some of my work.</h2>
            </div>
            <div className="home-projects ">
                <div className="text">
                    <h1 data-aos="fade-right" data-aos-duration="800">
                        ahua1994 Projects
                    </h1>
                    <p
                        onClick={() => navigate("/projects")}
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="300"
                    >
                        Go To Projects {">"}
                    </p>
                </div>
                <div data-aos="fade-left" data-aos-duration="1200" data-aos-delay="800">
                    <img
                        src={projects[2].gif}
                        alt={projects[2].title}
                        key={projects[2].title}
                    ></img>
                </div>
            </div>
            <div className="home-certs">
                <h1 data-aos="fade-down" data-aos-duration="600" data-aos-delay="300">
                    Credentials
                </h1>
                <div
                    className="thumbnails"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2200"
                >
                    {certs.map((x, i) => (
                        <div
                            className="thumbnail"
                            data-aos="flip-up"
                            data-aos-offset="0"
                            data-aos-duration="1200"
                            data-aos-delay={String(i * 150)}
                            key={i}
                        >
                            <p>{x.org + " " + x.name}</p>
                            <img src={x.img} alt={x.name} />
                        </div>
                    ))}
                </div>
                <p
                    onClick={() => navigate("/certifications")}
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="300"
                >
                    Go To Certificates {">"}
                </p>
            </div>
        </div>
    );
};

export default Home;
