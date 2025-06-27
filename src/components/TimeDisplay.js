import "../styles/TimeDisplay.css";

const TimeDisplay = ({ milliseconds }) => {
  const formatTime = (totalMilliseconds) => {
    const seconds = Math.floor(totalMilliseconds / 1000);
    const ms = totalMilliseconds % 1000;
    return `${seconds}.${ms.toString().padStart(3, "0")}`;
  };

  return <div className="time-display">{formatTime(milliseconds)} seconds</div>;
};

export default TimeDisplay;
