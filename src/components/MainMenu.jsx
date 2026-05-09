import { useState } from "react";

import ParticlesBackground from "./ParticlesBackground";
import Lightning from "./Lightning";
import "./MainMenu.css";
import MenuButton from "./MenuButton";
import Logo from "./Logo";
import Modal from "./Modal";

export default function MainMenu({setView}) {
   const [showModal, setShowModal] = useState(false);

  return (
    <>
       {showModal && <Modal onClose={() => setShowModal(false)} setView={setView}/>}

      <div className="menu-wrapper">

        <Logo />

        <div className="menu-buttons">
          <MenuButton onClick={() => setShowModal(true)}>Singleplayer</MenuButton>
          <MenuButton>Multiplayer</MenuButton>
          <MenuButton>Options</MenuButton>
          <MenuButton>Quit</MenuButton>
        </div>
      </div>

      <ParticlesBackground />
      <Lightning />
    </>
  );
}