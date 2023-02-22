import React, { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import style from "./App.module.css";
import { BurgerConstructorContext } from "../../services/burger-constructor-context";

function App() {
  const [constructorData, setConstructorData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [state, setState] = useState([]);

  const dataUrl = "https://norma.nomoreparties.space/api/ingredients";

  useEffect(() => {
    try {
      fetch(dataUrl)
        .then((res) => res.json())
        .then((res) => {
          setState(res["data"]);
          return res;
        })
        .then((res) => {
          setConstructorData(
            res["data"].map((i: any) => {
              return {
                id: i._id,
                name: i.name,
                price: i.price,
                thumbnail: i.image,
                isBun: i.type === "bun" ? true : false,
              };
            })
          );
          setIsFetching(false);
        });
    } catch {
      alert("Ошибка(");
    }
  }, []);

  return !isFetching ? (
    <>
      <AppHeader className={style.header} />
      <main className={style.main}>
        <BurgerIngredients data={state} constructorData={constructorData} />
        <BurgerConstructorContext.Provider
          value={{ constructorData, setConstructorData }}
        >
          <BurgerConstructor />
        </BurgerConstructorContext.Provider>
      </main>
    </>
  ) : (
    <div></div>
  );
}

export default App;
