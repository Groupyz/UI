import "./styles/Checkbox.css";

import { useState } from "react";
const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className={isChecked ? "checked" : ""}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;
