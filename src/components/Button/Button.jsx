import React from "react";
import "./Button.scss";

const Button = ({ children, btnGoogle, ...otherProps }) => {
  return (
    <button
      className={`${btnGoogle ? "btn-gg" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
