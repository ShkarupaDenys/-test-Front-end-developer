import React from "react";
import classnames from "classnames";

const Button = ({ children, className, theme, onClick }) => {
  const classNameButton = classnames(
    "button",
    {
      button_dark: theme === "dark",
    },
    className
  );
  return (
    <button className={classNameButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
