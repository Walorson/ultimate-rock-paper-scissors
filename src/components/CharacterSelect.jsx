import { useState } from "react";
import CharacterCircle from "./CharCircle";
import "./CharacterSelect.css";

const characters = ["rock", "paper", "scissors"];

export default function CharacterSelect() {
  const [hovered, setHovered] = useState(null);
  const [chosen, setChosen] = useState(null);

  const handleChoose = (id) => {
    if (!chosen) setChosen(id);
  };

  return (
    <div className="char-wrapper">
      <h2 className="char-title">CHOOSE YOUR FIGHTER</h2>

      <div className="char-pyramid">
        <div className="row single">
          <CharacterCircle
            char={characters[0]}
            hovered={hovered}
            setHovered={setHovered}
            chosen={chosen}
            onChoose={handleChoose}
          />
        </div>

        <div className="row double">
          <CharacterCircle
            char={characters[1]}
            hovered={hovered}
            setHovered={setHovered}
            chosen={chosen}
            onChoose={handleChoose}
          />
          <CharacterCircle
            char={characters[2]}
            hovered={hovered}
            setHovered={setHovered}
            chosen={chosen}
            onChoose={handleChoose}
          />
        </div>
      </div>

      <div className="char-info">
        {chosen
          ? `You have chosen ${chosen.toUpperCase()}`
          : hovered
          ? hovered.toUpperCase()
          : ""}
      </div>
    </div>
  );
}