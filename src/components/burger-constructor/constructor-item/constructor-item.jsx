import React from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './constructor-item.module.css'

const ConstructorItem = (props) => {
    return(
        <div>
            {props.type ? 
             <div className={`${style.item} ${style.MainItem}`}>
                <ConstructorElement
                    type={props.type}
                    isLocked={props.isLocked}
                    text={props.text}
                    price={props.price}
                    thumbnail={props.thumbnail}
                />
            </div>
            :
            <div className={style.item}>
                <DragIcon/>
                <ConstructorElement
                    text={props.text}
                    price={props.price}
                    thumbnail={props.thumbnail}
            />
            </div>}
        </div>
    );
}

export default ConstructorItem;
