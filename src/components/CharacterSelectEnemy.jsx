import "./CharacterSelect.css";
import Loading from "./Loading";

function CharacterSelect() {

  return (
    <div className="char-wrapper">
      <h2 className="char-title" style={{marginBottom: "100px"}}>OPPONENT IS CHOOSING...</h2>
      <Loading />
    </div>
  );
}

export default CharacterSelect;