import "./bottomBorderButton.css";
function BottomBorderButton({
  text,
  onClick,
  className = "bottom-border-btn",
  type = "button",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {text}
    </button>
  );
}

export default BottomBorderButton;
