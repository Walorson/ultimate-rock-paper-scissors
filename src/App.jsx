import { useState } from "react";
import MainMenu from "./components/MainMenu"
import ClassicGamemode from "./gamemodes/ClassicGamemode";

function App() {
    const [view, setView] = useState("menu");

     const views = {
        "menu": <MainMenu setView={setView} />,
        "classic": <ClassicGamemode />
    }

    return views[view];
}

export default App;
