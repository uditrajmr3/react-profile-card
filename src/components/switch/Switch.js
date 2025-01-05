import React from "react";
import "./Switch.css";

const Switch = ({ rounded = true, isToggled, onToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className={`slider ${rounded ? "rounded" : ""}`} />
    </label>
  );
};

export default Switch;
