import "./ModeCard.css";

const ModeCard = ({title, img, setView}) => {
    return (
        <div className="mode-card" onClick={() => setView("classic")}>
            <div className="img-placeholder"><img src={`/img/${img}.png`} alt="" /></div>
            <span>{title}</span>
        </div>
    );
}

export default ModeCard;