import "./Socials.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Socials = () => {
    return (
        <div
            className="Socials"
            data-aos="fade-right"
            data-aos-duration="1600"
            data-aos-delay="400"
            data-aos-offset="0"
        >
            <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.linkedin.com/in/andy-hua/"
            >
                <span> LinkedIn Andy Hua</span>
                <FontAwesomeIcon size="2x" icon={faLinkedin} style={{ color: "#0077b5" }} />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" to={"https://www.github.com/ahua1994"}>
                <span> github ahua1994</span>
                <FontAwesomeIcon size="2x" icon={faGithub} />
            </Link>
            <Link
                target="_blank"
                rel="noopener noreferrer"
                to={"https://www.youtube.com/@ahua1994"}
            >
                <span> YT ahua1994</span>
                <FontAwesomeIcon size="2x" icon={faYoutube} style={{ color: "#FF1A1A" }} />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" to={"mailto:user.andy.hua@gmail.com"}>
                <span> user.andy.hua@gmail.com</span>
                <FontAwesomeIcon size="2x" icon={faEnvelope} style={{ color: "#FFBF00" }} />
            </Link>
            <Link
                target="_blank"
                rel="noopener noreferrer"
                to={"https://www.codewars.com/users/ahua1994"}
            >
                <span> Codewars Badge</span>
                <img
                    src="https://www.codewars.com/users/ahua1994/badges/large"
                    alt="Codewars Badge"
                />
            </Link>
        </div>
    );
};

export default Socials;
