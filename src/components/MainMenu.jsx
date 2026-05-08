import ParticlesBackground from "./ParticlesBackground";
import Lightning from "./Lightning";
import "./MainMenu.css";
import MenuButton from "./MenuButton";
import Logo from "./Logo";

export default function MainMenu() {
  return (
    <>
      <div className="menu-wrapper">

        <Logo />

        <div className="menu-buttons">
          <MenuButton>Singleplayer</MenuButton>
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