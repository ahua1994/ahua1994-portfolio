import "./Certs.scss";
import { useContext, useState, useEffect } from "react";
import { CVContext } from "../contexts/CVContext";
import CertCard from "../components/CertCard";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Certs = () => {
    const { certs } = useContext(CVContext);
    const [main, setMain] = useState(0);
    const [under, setUnder] = useState(0);
    // const [enlarge, setEnlarge] = useState(false);
    console.log(main, under);
    const handleRight = () => {
        setUnder(main);
        setMain(main < certs.length - 1 ? main + 1 : 0);
    };
    const handleLeft = () => {
        setUnder(main);
        setMain(main > 0 ? main - 1 : certs.length - 1);
    };

    return (
        <div className="Certs">
            {/* {certs.map(x => (
                <CertCard x={x} key={x.name} />
            ))} */}
            <FontAwesomeIcon className="left" size="3x" icon={faChevronLeft} onClick={handleLeft} />
            <div className="carousel">
                {certs.map((x, i) => (
                    <div className={i === main ? "slide active" : "slide"} key={i}>
                        {i === main && <img src={x.img} alt={x.name} />}
                    </div>
                ))}
                <div className="under">
                    <img src={certs[under].img} alt={certs[under].name} />
                </div>
            </div>
            <FontAwesomeIcon
                className="right"
                size="3x"
                icon={faChevronRight}
                onClick={handleRight}
            />
        </div>
    );
};

export default Certs;
