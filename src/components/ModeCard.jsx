import "./ModeCard.css";

const ModeCard = ({title, img}) => {
    return (
        <div className="mode-card">
            <div className="img-placeholder"><img src={`/img/${img}.png`} alt="" /></div>
            <span>{title}</span>
        </div>
    );
}

export default ModeCard;