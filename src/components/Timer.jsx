import { useEffect, useState } from "react";
import "./Timer.css";

export default function Timer() {
  const [time, setTime] = useState(8);

  useEffect(() => {
    if (time === 0) {
      console.log("Dupa");
      return;
    }

    const interval = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="film-timer">
      <div className="film-circle">
        <div className="film-number">{time}</div>
      </div>
      <div className="film-grain"></div>
    </div>
  );
}