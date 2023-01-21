import React from "react";
import style from './app-header.module.css'
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = (props) => {
    return(
        <header className={style.header}>
            <section className={style.NavBar}>
                <div className={style.NavBarMenu}> 
                    <div className={style.NavBarMenuItem}>
                        <BurgerIcon className={style.NavBarMenuItemIcon} type="primary"/>
                        <span className={style.NavBarMenuItemText}>Конструктор</span>
                    </div>
                    <div className={style.NavBarMenuItem}>
                        <ListIcon className={style.NavBarMenuItemIcon} type="primary"/>
                        <span className={style.NavBarMenuItemText}>Лента заказов</span>
                    </div>
                </div>
                <div className={style.logo}>
                    <Logo />
                </div>      
                <div className={style.NavBarMenuItem}>
                        <ProfileIcon className={style.NavBarMenuItemIcon} type="primary"/>
                        <span className={style.NavBarMenuItemText}>Личный кабинет</span>
                </div>
               </section>
        </header>
    );
};

export default AppHeader;