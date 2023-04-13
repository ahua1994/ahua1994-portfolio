import { Link } from "react-router-dom";
// import Certs from "./Certs";
// import Skills from "./Skills";
// import Projects from "./Projects";
import "./Home.scss";

const Home = () => {
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
            <h1>Hello, this Portfolio showcases some of my work.</h1>
        </div>
    );
};

export default Home;
