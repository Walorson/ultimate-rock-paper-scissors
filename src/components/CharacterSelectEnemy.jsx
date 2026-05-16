import "./CharacterSelect.css";
import Loading from "./Loading";
import CharacterImg from "./CharacterImg";

function CharacterSelectEnemy({chars, time}) {

  function randomChar()
  {
      return chars[Math.floor(Math.random()*chars.length)];
  }

  return (
    <div className="char-wrapper">
      <h2 className="char-title" style={{marginBottom: "100px"}}>OPPONENT IS CHOOSING...</h2>
      {time > 0 ? <Loading /> : <CharacterImg charName={randomChar().name}/>}
    </div>
  );
}

export default CharacterSelectEnemy;