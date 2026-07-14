import "./CharacterSelect.css";
import Loading from "./Loading";
import CharacterImg from "./CharacterImg";

function randomChar(chars)
{
    return chars[Math.floor(Math.random()*chars.length)];
}

function CharacterSelectEnemy({chars, time}) {

  const rand = randomChar(chars);

  return (
    <div className="char-wrapper">
      <h2 className="char-title">{time > 0 ? "OPPONENT IS CHOOSING..." : "RESULT"}</h2>
      {time > 0 ? <Loading /> : <CharacterImg charName={rand.name}/>}
      <div className="char-info">{time > 0 ? "" : `Opponent has chosen ${rand.name.toUpperCase()}`}</div> 
    </div>
  );
}

export default CharacterSelectEnemy;