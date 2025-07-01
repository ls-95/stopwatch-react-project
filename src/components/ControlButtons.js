import "../styles/ControlButtons.css";

const ControlButtons = ({ isRunning, onStart, onStop, onReset }) => {
  return (
    <div className="control-buttons">
      {!isRunning ? (
        <button className="btn btn-start" onClick={onStart}>
          Start
        </button>
      ) : (
        <button className="btn btn-stop" onClick={onStop}>
          Stop
        </button>
      )}

      <button className="btn btn-reset" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default ControlButtons;
