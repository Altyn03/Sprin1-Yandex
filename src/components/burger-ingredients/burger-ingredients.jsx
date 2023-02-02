import React, { useState } from "react";
import SwitchPanel from "./switch-panel/switch-panel";
import ElementConstructor from "./element-constructor/element-constructor";
import style from "./burger-ingredients.module.css";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

const BurgerIngredients = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState({});

  return (
    <section className={style.section}>
      {isModalOpen && (
        <>
          <Modal setIsModalOpen={setIsModalOpen}>
            <IngredientDetails {...currentIngredient} />
          </Modal>
        </>
      )}
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
                  className={style.sectionListItem}
                  setModal={setIsModalOpen}
                  isModalOpen={isModalOpen}
                  constructorData={props.constructorData}
                  key={i._id}
                  img={i.image}
                  price={i.price}
                  name={i.name}
                  imgLarge={i.image_large}
                  calories={i.calories}
                  proteins={i.proteins}
                  fat={i.fat}
                  carbohydrates={i.carbohydrates}
                  setCurrentIngredient={setCurrentIngredient}
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
                  className={style.sectionListItem}
                  setModal={setIsModalOpen}
                  isModalOpen={isModalOpen}
                  constructorData={props.constructorData}
                  key={i._id}
                  img={i.image}
                  price={i.price}
                  name={i.name}
                  imgLarge={i.image_large}
                  calories={i.calories}
                  proteins={i.proteins}
                  fat={i.fat}
                  carbohydrates={i.carbohydrates}
                  setCurrentIngredient={setCurrentIngredient}
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
                  className={style.sectionListItem}
                  setModal={setIsModalOpen}
                  isModalOpen={isModalOpen}
                  constructorData={props.constructorData}
                  key={i._id}
                  img={i.image}
                  price={i.price}
                  name={i.name}
                  imgLarge={i.image_large}
                  calories={i.calories}
                  proteins={i.proteins}
                  fat={i.fat}
                  carbohydrates={i.carbohydrates}
                  setCurrentIngredient={setCurrentIngredient}
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
