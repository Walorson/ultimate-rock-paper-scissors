import "./MenuButton.css";

export default function MenuButton({ children }) {
  return (
    <button className="menu-btn">{children}</button>
  );
}