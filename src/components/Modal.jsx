import Button from "./Button";
import ModeCard from "./ModeCard";
import { Link } from "react-router";
import "./Modal.css";

export default function Modal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-window">

        <h2 className="modal-title">Choose Game Mode</h2>

        <div className="mode-cards">

          <ModeCard title="Ultimate"></ModeCard>
          <ModeCard title="Half‑Ultimate"></ModeCard>
          <Link to="classic"><ModeCard title="Classic"></ModeCard></Link>

        </div>

        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
}