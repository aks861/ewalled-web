import "../styles/components/DropdownInput.css";
import { useState } from "react";

function DropdownInput({ label, options = [], defaultValue, onChange }) {
  const [selected, setSelected] = useState(defaultValue || options[0]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    if (onChange) onChange(value);
  };
  return (
    <div className="dropdown-input">
      <div className="dropdown-label">{label}</div>
      <select
        className="dropdown-select"
        value={selected}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownInput;
