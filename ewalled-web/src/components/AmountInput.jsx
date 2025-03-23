import "../styles/components/AmountInput.css";

function AmountInput({ label, value, balance }) {
  return (
    <div className="amount-container">
      <div className="amount-label">{label}</div>
      <input type="text" defaultValue={value} />
      <p className="balance">
        Balance: <span>{balance}</span>
      </p>
    </div>
  );
}

export default AmountInput;
