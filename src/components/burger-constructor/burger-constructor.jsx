import React from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "./constructor-item/constructor-item";
import style from "./burger-constructor.module.css";

const BurgerConstructor = (props) => {
  const data = [
    {
      text: "Краторная булка N-200i (верх)",
      price: 200,
      thumbnail: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      isLocked: true,
      type: "top",
    },
    {
      text: "Краторная булка N-200i (верх)",
      price: 200,
      thumbnail: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    },
    {
      text: "Краторная булка N-200i (верх)",
      price: 200,
      thumbnail: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    },
    {
      text: "Краторная булка N-200i (верх)",
      price: 200,
      thumbnail: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    },
    {
      text: "Краторная булка N-200i (верх)",
      price: 200,
      thumbnail: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    },
    {
      text: "Краторная булка N-200i (верх)",
      price: 200,
      thumbnail: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    },
    {
      text: "Краторная булка N-200i (верх)",
      price: 200,
      thumbnail: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    },
    {
      text: "Краторная булка N-200i (верх)",
      price: 200,
      thumbnail: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    },
    {
      text: "Краторная булка N-200i (низ)",
      price: 200,
      thumbnail: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      isLocked: true,
      type: "bottom",
    },
  ];
  return (
    <div className={style.section}>
      <div className={style.constructor}>
        {data.map((i) => (
          <ConstructorItem
            type={i.type}
            isLocked={i.isLocked}
            text={i.text}
            price={i.price}
            thumbnail={i.thumbnail}
          />
        ))}
      </div>
      <div className={style.orderInfo}>
        <div className={style.price}>
          <span className="text text_type_digits-medium">610 </span>
          <CurrencyIcon type="primary" />
        </div>
        <div className={style.button}>
          <Button htmlType="button" type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BurgerConstructor;
