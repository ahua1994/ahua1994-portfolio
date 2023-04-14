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
        >
            <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.linkedin.com/in/andy-hua-125431168/"
            >
                <FontAwesomeIcon size="2x" icon={faLinkedin} />
                <span> LinkedIn Andy Hua</span>
            </Link>
            <Link target="_blank" rel="noopener noreferrer" to={"https://www.github.com/ahua1994"}>
                <FontAwesomeIcon size="2x" icon={faGithub} />
                <span> github ahua1994</span>
            </Link>
            <Link
                target="_blank"
                rel="noopener noreferrer"
                to={"https://www.youtube.com/@ahua1994"}
            >
                <FontAwesomeIcon size="2x" icon={faYoutube} />
                <span> YT ahua1994</span>
            </Link>
            <Link target="_blank" rel="noopener noreferrer" to={"mailto:user.andy.hua@gmail.com"}>
                <FontAwesomeIcon size="2x" icon={faEnvelope} />
                <span> user.andy.hua@gmail.com</span>
            </Link>
            <Link
                target="_blank"
                rel="noopener noreferrer"
                to={"https://www.codewars.com/users/ahua1994"}
            >
                <img
                    src="https://www.codewars.com/users/ahua1994/badges/large"
                    alt="Codewars Badge"
                />
            </Link>
        </div>
    );
};

export default Socials;
