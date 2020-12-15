import React, { useState, useEffect, useCallback } from "react";
import Select from "./components/Select/Select";
import Radio from "./components/Radio/Radio";
import ButtonText from "./components/ButtonText/ButtonText";
import AddIcon from "./icons/AddIcon";
import CardItem from "./components/CardItem/CardItem";
import Modal from "./components/Modal/Modal";

const Settings = () => {
  const [isActiveValue, setActiveValue] = useState("show");
  const [myMoney, setIsMyMoney] = useState("100.38");
  const [activeCurrency, setActiveCurrency] = useState("uah");
  const [cards, setCards] = useState([]);
  const [currentID, setCurrentID] = useState(0);
  const [isOpenModal, setOpenModal] = useState(false);

  const onChangeHandler = (e) => {
    setActiveValue(e.target.value);
  };

  const closeModal = () => setOpenModal(false);

  const synchronizeCard = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getUTCMinutes();

    setCards([
      ...cards,
      {
        name: "Mono",
        date: `${day}.${month}.${year}, ${hours}:${minutes}`,
        id: currentID,
      },
    ]);
    setCurrentID(currentID + 1);
    setOpenModal(true);
  };

  const disableCard = (id) => {
    setCards(cards.filter((card) => card.id !== id))
  };

  const addIcon = <AddIcon />;

  return (
    <div className="settings">
      <h1 className="lineheading lineheading_medium">Настройки</h1>
      <div className="settings__my-money">
        <h2 className="lineheading">Мои деньги</h2>
        <p className="text settings__amount">
          {isActiveValue === "hide" ? myMoney.split(".").shift() : myMoney}{" "}
          {activeCurrency}
        </p>
      </div>
      <h2 className="lineheading settings__main-currency">Основная валюта</h2>
      <Select
        activeCurrency={activeCurrency}
        setActiveCurrency={setActiveCurrency}
      />
      <h2 className="lineheading settings__penny">Копейки в суммах</h2>
      <div className="settings__penny-wrap">
        <Radio
          name="penny"
          value="show"
          text="Показывать"
          onChange={onChangeHandler}
          defaultChecked
        />
        <Radio
          name="penny"
          value="hide"
          text="Скрывать"
          onChange={onChangeHandler}
          className="settings__radio"
        />
      </div>
      <h2 className="lineheading lineheading_medium settings__synchronization">
        Синхронизация с банками
      </h2>
      {cards.map(({ name, date, id }) => (
        <CardItem
          name={name}
          date={date}
          key={id}
          disableCard={disableCard}
          id={id}
        />
      ))}
      <ButtonText icon={addIcon} onClick={synchronizeCard}>
        Добавить новую синхронизацию
      </ButtonText>
      <Modal open={isOpenModal} onClose={closeModal} />
    </div>
  );
};

export default Settings;
