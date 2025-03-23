import dropdownImg from "../assets/dropdown.png";
import "../styles/components/DropdownInput.css";

function DropdownInput({ label, value }) {
  return (
    <div className="dropdown-input">
      <div className="dropdown-label">{label}</div>
      <div className="dropdown-value">
        {value}
        <img src={dropdownImg} className="dropdown-icon" />
      </div>
    </div>
  );
}

export default DropdownInput;
