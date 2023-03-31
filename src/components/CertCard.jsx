import "./CertCard.scss";

const CertCard = ({ x }) => {
    return (
        <div className="CertCard">
            <h1>{x.org + " " + x.name}</h1>
            <img src={x.img} alt={x.name} />
        </div>
    );
};

export default CertCard;
