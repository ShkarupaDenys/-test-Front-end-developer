import React from "react";
import classnames from "classnames";
import Done from "../../icons/Done";
import Button from "../Button/Button";

const Modal = ({open, onClose}) => {
  const classNameModal = classnames('modal', {
    modal_open: open,
  })
  return (
    <div className={classNameModal}>
      <span className="modal__bg" onClick={onClose} />
      <div className="modal__content">
        <span className="modal__icon">
          <Done />
        </span>
        <h2 className="lineheading lineheading_big modal__lineheading">
          Синхронизация с банком добавлена
        </h2>
        <Button theme="dark" onClick={onClose}>Понял</Button>
      </div>
    </div>
  );
};

export default Modal;
