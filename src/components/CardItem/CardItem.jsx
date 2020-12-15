import React from "react";
import CardIcon from "../../icons/CardIcon";
import Button from "../Button/Button";

const CardItem = ({ name, date, disableCard, id }) => {
  return (
    <div className="card">
      <span className="card__icon">
        <CardIcon />
      </span>
      <div className="card__content">
        <p className="text">{name}</p>
        <p className="text card__synchronization">
          Cинхронизация: <span className="text">{date}</span>
        </p>
      </div>
      <Button className='card__button' onClick={() => {
        disableCard(id)
      }}>Отключить</Button>
    </div>
  );
};

export default CardItem;
