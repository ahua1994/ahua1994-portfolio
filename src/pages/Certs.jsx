import { useContext } from "react";
import { CVContext } from "../contexts/CVContext";

const Certs = () => {
    const { certs } = useContext(CVContext);
    return (
        <div className="Certs">
            Certificates
            <div className="certs">
                {certs.map(x => (
                    <h1 key={x.name}>{x.name}</h1>
                ))}
            </div>
        </div>
    );
};

export default Certs;
