import React, { useState } from "react";
import ArrowDown from "../../icons/ArrowDown";
import classnames from "classnames";

const dataCurrency = [
  {
    icon: "i",
    name: "uah",
  },
  {
    icon: "i",
    name: "usd",
  },
  {
    icon: "i",
    name: "eur",
  },
  {
    icon: "i",
    name: "pln",
  },
];

const Select = ({ activeCurrency, setActiveCurrency }) => {
  const [selectIsOpen, setSelectOpen] = useState(false);

  const selectListClassName = classnames("select__list", {
    select__list_active: selectIsOpen,
  });

  const selectArrowClassName = classnames("select__arrow", {
    select__arrow_active: selectIsOpen,
  });

  const togglerSelect = () => {
    setSelectOpen(!selectIsOpen);
  };

  const handlerItemSelect = (name) => {
    setSelectOpen(false);
    setActiveCurrency(name);
  };

  return (
    <div className="select">
      <div className="select__header" onClick={togglerSelect}>
        <p className="text select__currency">{activeCurrency}</p>
        <span className={selectArrowClassName}>
          <ArrowDown />
        </span>
      </div>
      <ul className={selectListClassName}>
        {dataCurrency.filter(({name}) => name !== activeCurrency).map(({ icon, name }) => {
          return (
            <li
              className="select__item"
              key={name}
              onClick={() => {
                handlerItemSelect(name);
              }}
            >
              <span className="select__item-currency">{icon}</span>
              <p className="text select__currency">{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
