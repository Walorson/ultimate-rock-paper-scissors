import "./CharacterImg.css";

const CharacterImg = ({charName}) => {
    return (
        <div className="character-img"><img src={`./characters/${charName}.svg`} alt="" /></div>
    )
}

export default CharacterImg;