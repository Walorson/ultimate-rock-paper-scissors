import CharacterSelect from "../components/CharacterSelect"
import CharacterSelectEnemy from "../components/CharacterSelectEnemy"
import "./game.css";
import Timer from "../components/Timer"

const ClassicGamemode = () => {
    return (
        <div className="game-container">
            <div style={{width: "100px"}}></div>
            <CharacterSelect />
            <Timer />
            <CharacterSelectEnemy />
            <div style={{width: "100px"}}></div>
        </div>
    )
}

export default ClassicGamemode;