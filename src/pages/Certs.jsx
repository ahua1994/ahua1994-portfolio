import "./Certs.scss";
import { useContext } from "react";
import { CVContext } from "../contexts/CVContext";
import CertCard from "../components/CertCard";

const Certs = () => {
    const { certs } = useContext(CVContext);
    return (
        <div className="Certs">
            Certificates
            {certs.map(x => (
                <CertCard x={x} key={x.name} />
            ))}
        </div>
    );
};

export default Certs;
