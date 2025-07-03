import { useState, useEffect } from "react";
import TimeDisplay from "./TimeDisplay";
import ControlButtons from "./ControlButtons";

const Stopwatch = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setMilliseconds((prevMs) => prevMs + 10);
      }, 10);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setMilliseconds(0);
  };

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-title">React Stopwatch</h1>
      <TimeDisplay milliseconds={milliseconds} />

      <ControlButtons
        isRunning={isRunning}
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
      />

      <div className="status-indicator">
        Status: {isRunning ? "🏃‍♂️ Running" : "⏸️ Stopped"}
      </div>
    </div>
  );
};
export default Stopwatch;
