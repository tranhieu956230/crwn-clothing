import React from "react";

import "./FormInput.scss";

const FormInput = ({ onChange, label, value, ...otherProps }) => {
  return (
    <div className="group">
      <input
        onChange={onChange}
        type="text"
        className="form-input"
        value={value}
        {...otherProps}
      />
      {label && (
        <label className={`${value ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
