import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import style from "./element-constructor.module.css";

const ElementConstructor = (props) => {
  return (
    <div className={style.item} onClick={() => console.log(props.id)}>
      {props.__v && (
        <Counter count={props.__v} size="default" extraClass="m-1" />
      )}
      <img className={style.img} src={props.img} alt="тут картинка" />
      <div className={`${style.price} text text_type_digits-default`}>
        <span>{props.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default ${style.name}`}>
        {props.name}
      </p>
    </div>
  );
};

export default ElementConstructor;
