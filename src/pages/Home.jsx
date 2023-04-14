import { useNavigate } from "react-router-dom";
// import Certs from "./Certs";
import Skills from "./Skills";
// import Projects from "./Projects";
import "./Home.scss";
import { useContext } from "react";
import { CVContext } from "../contexts/CVContext";
import Socials from "../components/Socials";

const Home = () => {
    const { projects, certs } = useContext(CVContext);
    const navigate = useNavigate();
    return (
        <div className="Home">
            <Skills />
            <Socials />
            <div className="intro">
                {/* <div className="socials">
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        to={"https://www.codewars.com/users/ahua1994"}
                    >
                        <img
                            data-aos="flip-right"
                            data-aos-duration="1600"
                            data-aos-delay="400"
                            style={{ marginTop: "3rem" }}
                            src="https://www.codewars.com/users/ahua1994/badges/large"
                            alt="Codewars Badge"
                        />
                    </Link>
                    <Link to="https://www.linkedin.com/in/andy-hua-125431168/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                    <Link to={"https://www.github.com/ahua1994"}>
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                    <Link to={"https://www.youtube.com/@ahua1994"}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                    <Link to={"mailto:user.andy.hua@gmail.com"}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                </div> */}
                <h1 data-aos="fade-in" data-aos-duration="3000">
                    My name is{" "}
                    <span data-aos="fade-in" data-aos-delay="500" data-aos-duration="3000">
                        Andy Hua!
                    </span>
                </h1>
                <h2 data-aos="fade-down" data-aos-delay="500" data-aos-duration="2600">
                    This Portfolio showcases some of my work.
                </h2>
            </div>
            <div className="home-projects ">
                <div className="text">
                    <h1 data-aos="fade-right" data-aos-duration="800">
                        ahua1994 Projects
                    </h1>
                    <p
                        onClick={() => {
                            window.scroll(0, 0);
                            navigate("/projects");
                        }}
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="300"
                    >
                        Go To Projects {">"}
                    </p>
                </div>
                <div className="preview">
                    <img
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        data-aos-delay="800"
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
                    data-aos-offset="0"
                >
                    Go To Certificates {">"}
                </p>
            </div>
        </div>
    );
};

export default Home;
