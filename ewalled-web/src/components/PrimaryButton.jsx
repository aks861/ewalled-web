import "../styles/components/PrimaryButton.css";

function PrimaryButton({ text, onClick }) {
  return (
    <button className="primary-btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default PrimaryButton;
