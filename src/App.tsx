import React, { useEffect, useState } from 'react';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import style from './App.module.css'


function App() {
  const [cart, setCart] = useState([]);
  const [isFetching,setIsFetching] = useState(true)
  const [state, setState] = useState([]);
  const dataUrl = 'https://norma.nomoreparties.space/api/ingredients'
    
    useEffect(() => {
      fetch(dataUrl)
      .then(res=>res.json())
      .then(res=>{
        setState(res['data'])
        setIsFetching(false)
      })
    }, [])
    
    return (
      !isFetching ? 
      <>
        <AppHeader />
          <main className={style.main}>
            <BurgerIngredients data={state} setCart={setCart}/>
            <BurgerConstructor data={state} cart={cart}/>
          </main>
      </> : <div>Сервер по не понятным причинам не работает</div>
    );
}

export default App;
