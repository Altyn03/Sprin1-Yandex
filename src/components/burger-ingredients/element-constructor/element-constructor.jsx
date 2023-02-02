import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import style from "./element-constructor.module.css";

const ElementConstructor = (props) => {
  const count = props.constructorData.reduce(
    (acc, a) => (a.name === props.name ? acc + 1 : acc),
    0
  );
  const onClickEvent = () => {
    props.setModal(true);
    props.setCurrentIngredient({
      name: props.name,
      img: props.imgLarge,
      calories: props.calories,
      proteins: props.proteins,
      fat: props.fat,
      carbohydrates: props.carbohydrates,
    });
  };
  return (
    <div
      className={`${style.item} mb-8 mr-6 pr-4 pl-4`}
      onClick={() => {
        onClickEvent();
      }}
    >
      {count > 0 && <Counter count={count} size="default" />}
      <img className={`${style.img} mb-1`} src={props.img} alt="burger" />
      <div>
        <span className="text text_type_digits-default mb-1">
          {props.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <span className={`${style.name} text text_type_main-small`}>
        {props.name}
      </span>
    </div>
  );
};

export default ElementConstructor;
