import CharacterSelect from "../components/CharacterSelect"
import "./game.css";
import Timer from "../components/Timer"

const ClassicGamemode = () => {
    return (
        <div class="game-container">
            <div style={{width: "100px"}}></div>
            <CharacterSelect />
            <Timer />
            <CharacterSelect />
            <div style={{width: "100px"}}></div>
        </div>
    )
}

export default ClassicGamemode;