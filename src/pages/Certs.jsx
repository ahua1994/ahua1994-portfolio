import "./Certs.scss";
import { useContext, useState, useEffect } from "react";
import { CVContext } from "../contexts/CVContext";
import CertCard from "../components/CertCard";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Certs = () => {
    const { certs } = useContext(CVContext);
    const [main, setMain] = useState(0);
    const [enlarge, setEnlarge] = useState(false);

    const handleRight = () => {
        setMain(main < certs.length - 1 ? main + 1 : 0);
    };
    const handleLeft = () => {
        setMain(main > 0 ? main - 1 : certs.length - 1);
    };

    return (
        <div className="Certs">
            {/* {certs.map(x => (
                <CertCard x={x} key={x.name} />
            ))} */}
            <FontAwesomeIcon size="3x" icon={faChevronLeft} onClick={handleLeft} />
            <img
                src={certs[main].img}
                alt={certs[main].title}
                style={{ width: enlarge ? "90%" : "1150px" }}
                onClick={() => setEnlarge(!enlarge)}
            />
            <FontAwesomeIcon size="3x" icon={faChevronRight} onClick={handleRight} />
        </div>
    );
};

export default Certs;
