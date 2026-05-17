import { useState } from "react";
import CharComponent from "./CharComponent";
import "./CharacterSelect.css";
import CharacterImg from "./CharacterImg";

export default function CharacterSelect({chars, time}) {
  const [hovered, setHovered] = useState(null);
  const [chosen, setChosen] = useState(null);

  const handleChoose = (id) => {
    if (!chosen) setChosen(id);
  };

  return (
    <div className="char-wrapper">
      <h2 className="char-title">{time > 0 ? "CHOOSE YOUR FIGHTER" : "RESULT"}</h2>
      
        {chosen ? <CharacterImg charName={chosen}/> : 
          <div className="char-container">
            {chars.map((c, index) => 
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
        }

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