import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
    return (
        <div className="Home">
            <h1>Still In Development, but feel free to browse around!</h1>
            <Link to={"https://www.codewars.com/users/ahua1994"}>
                <img
                    src="https://www.codewars.com/users/ahua1994/badges/large"
                    alt="CodeWars Badge"
                />
            </Link>
        </div>
    );
};

export default Home;
