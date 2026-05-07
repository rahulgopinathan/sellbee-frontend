import "./PillButton.css";

function PillButton({ text, onClick, className = "", type = "button", disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`pill-btn${className ? ` ${className}` : ""}`}
    >
      {text}
    </button>
  );
}

export default PillButton;
