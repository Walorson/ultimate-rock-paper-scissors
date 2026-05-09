import "./CharCircle.css";

function CharacterCircle({ char, setHovered, chosen, onChoose}) 
{
  return (
    <div
      className={`char-circle ${chosen ? "locked" : ""}`}
      onMouseEnter={() => !chosen && setHovered(char)}
      onMouseLeave={() => !chosen && setHovered(null)}
      onClick={() => onChoose(char)}
    >
      <div className="char-inner"><img src={`./characters/${char}.svg`} alt="" /></div>
    </div>
  );
}

export default CharacterCircle;