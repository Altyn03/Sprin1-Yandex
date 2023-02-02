import React from "react";
import style from "./ingredient-details.module.css";

const IngredientDetails = (props) => {
  return (
    <>
      <div className={`mr-10 mt-10 ml-10 ${style.header}`}>
        <span className="text text_type_main-large">Детали ингридиента</span>
      </div>
      <div className={`${style.content} mb-15`}>
        <img className={style.img} src={props.img} alt="НЕТУ" />
        <span className="text text_type_main-medium mt-4">{props.name}</span>

        <ul className="mt-8">
          <li className="mr-5">
            <span className="text text_type_main-default text_color_inactive">
              Калории,ккал
            </span>
            <span className="text text_type_digits-default text_color_inactive">
              {props.calories}
            </span>
          </li>
          <li className="mr-5">
            <span className="text text_type_main-default text_color_inactive">
              Белки, г
            </span>
            <span className="text text_type_digits-default text_color_inactive">
              {props.proteins}
            </span>
          </li>
          <li className="mr-5">
            <span className="text text_type_main-default text_color_inactive">
              Жиры, г
            </span>
            <span className="text text_type_digits-default text_color_inactive">
              {props.fat}
            </span>
          </li>
          <li>
            <span className="text text_type_main-default text_color_inactive">
              Углеводы, г
            </span>
            <span className="text text_type_digits-default text_color_inactive">
              {props.carbohydrates}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default IngredientDetails;
