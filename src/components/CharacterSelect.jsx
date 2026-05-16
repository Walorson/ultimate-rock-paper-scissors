import { useState } from "react";
import CharComponent from "./CharComponent";
import "./CharacterSelect.css";
import { classicChars } from "../Char";

export default function CharacterSelect() {
  const [hovered, setHovered] = useState(null);
  const [chosen, setChosen] = useState(null);

  const handleChoose = (id) => {
    if (!chosen) setChosen(id);
  };



  return (
    <div className="char-wrapper">
      <h2 className="char-title">CHOOSE YOUR FIGHTER</h2>

      <div className="char-container">
        {classicChars.map((c, index) => 
          <CharComponent
            key={index}
            char={c.name}
            hovered={hovered}
            setHovered={setHovered}
            chosen={chosen}
            onChoose={handleChoose}
          />
        )}
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