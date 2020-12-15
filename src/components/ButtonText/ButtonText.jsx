import React from "react";

const ButtonText = ({children, icon, onClick}) => {
  return (
    <button className="button-text" onClick={onClick}>
        {icon && <span className='button-text__icon'>{icon}</span>}
      <span className="button-text__text">{children}</span>
    </button>
  );
};

export default ButtonText
