import CharacterSelect from "../components/CharacterSelect"
import CharacterSelectEnemy from "../components/CharacterSelectEnemy"
import "./game.css";
import Timer from "../components/Timer"
import { useState } from "react";
import { useEffect } from "react";
import { classicChars } from "../Char";

const ClassicGamemode = () => {
    const initialTime = 7;
    const [time, setTime] = useState(initialTime);

      useEffect(() => {
        if (time === 0) return;

        const interval = setInterval(() => {
        setTime((t) => t - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);

    return (
        <div className="game-container">
            <div style={{width: "100px"}}></div>
            <CharacterSelect chars={classicChars} />
            <Timer time={time} />
            <CharacterSelectEnemy chars={classicChars} time={time} />
            <div style={{width: "100px"}}></div>
        </div>
    )
}

export default ClassicGamemode;