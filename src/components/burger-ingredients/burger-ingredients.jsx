import React from "react";
import SwitchPanel from "./switch-panel/switch-panel";
import style from './burger-ingredients.module.css'

const BurgerIngredients = (props) => {
    return(
        <section className={style.section}>
            <p className={`text text_type_main-large ${style.title}`}>Соберите бургер</p>
            <div><SwitchPanel/></div>
            <div className={style.sectionList}>
                
            </div>
        </section>
    )
}

export default BurgerIngredients;