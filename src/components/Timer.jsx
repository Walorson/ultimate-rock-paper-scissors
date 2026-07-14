import "./Timer.css";

export default function Timer({time}) {
  return (
    <div className="film-timer">
      <div className="film-circle">
        <div className="film-number">{time}</div>
      </div>
      <div className="film-grain"></div>
    </div>
  );
}