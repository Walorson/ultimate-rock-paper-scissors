import "./MenuButton.css";

export default function MenuButton({ children, onClick }) {
  return (
    <button className="menu-btn" onClick={onClick}>{children}</button>
  );
}