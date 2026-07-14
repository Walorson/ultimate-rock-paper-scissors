import CharComponent from "./components/CharComponent";

type CharName = 
"rock" | "paper" | "scissors"; 

class Char
{
    name: string;
    defeats: CharName[];

    constructor(name: string, defeats: CharName[])
    {
        this.name = name;
        this.defeats = defeats;
    }
}

const rock = new Char("rock", ["scissors"]);
const paper = new Char("paper", ["rock"]);
const scissors = new Char("scissors", ["paper"]);

export const classicChars = [rock, paper, scissors];