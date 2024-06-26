import "./index.css";
import { useEffect, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setTimer(0);
  };

  function formatTime(time) {
    let hours, minutes, seconds,mins;
    seconds = `0${time % 60}`.slice(-2);
    mins = Math.floor(time / 60);
    minutes = `0${mins % 60}`.slice(-2);
    hours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${hours} : ${minutes} : ${seconds}`;
  }
  return (
    <>
      <div className="container">
        <h1>Timer starts now </h1>
        <h2>{formatTime(timer)}</h2>
        <button type="click" onClick={handleStartPause} className="start">
          {isRunning ? "pause" : "resume"}
        </button>
        <button type="click" onClick={reset} className="reset">
          reset
        </button>
      </div>
    </>
  );
}

export default Timer;
