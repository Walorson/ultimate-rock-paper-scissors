import Button from "./Button";
import "./Modal.css";

export default function Modal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-window">

        <h2 className="modal-title">Choose Game Mode</h2>

        <div className="mode-cards">
          <div className="mode-card">
            <div className="img-placeholder"></div>
            <span>Ultimate</span>
          </div>

          <div className="mode-card">
            <div className="img-placeholder"></div>
            <span>Half‑Ultimate</span>
          </div>

          <div className="mode-card">
            <div className="img-placeholder"></div>
            <span>Classic</span>
          </div>
        </div>

        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
}