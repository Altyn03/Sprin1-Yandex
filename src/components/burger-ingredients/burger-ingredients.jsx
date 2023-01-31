import React from "react";
import ElementConstructor from "./element-constructor/element-constructor.jsx";
import SwitchPanel from "./switch-panel/switch-panel";
import style from "./burger-ingredients.module.css";

const BurgerIngredients = (props) => {
  return (
    <section className={style.section}>
      <p className={`text text_type_main-large ${style.title}`}>
        Соберите бургер
      </p>
      <div>
        <SwitchPanel />
      </div>
      <div className={style.sectionList}>
        <h2>Булки</h2>
        <div className={style.sectionListItem}>
          {props.data.map((i) => {
            if (i["type"] === "bun")
              return (
                <ElementConstructor
                  key={i["_id"]}
                  img={i["image"]}
                  price={i["price"]}
                  name={i["name"]}
                />
              );
            else return null;
          })}
        </div>
        <h2>Соусы</h2>
        <div className={style.sectionListItem}>
          {props.data.map((i) => {
            if (i["type"] === "sauce")
              return (
                <ElementConstructor
                  key={i["_id"]}
                  img={i["image"]}
                  price={i["price"]}
                  name={i["name"]}
                />
              );
            else return null;
          })}
        </div>
        <h2>Начинки</h2>
        <div className={style.sectionListItem}>
          {props.data.map((i) => {
            if (i["type"] === "main")
              return (
                <ElementConstructor
                  key={i["_id"]}
                  img={i["image"]}
                  price={i["price"]}
                  name={i["name"]}
                />
              );
            else return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default BurgerIngredients;
