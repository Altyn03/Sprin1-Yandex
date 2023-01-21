import React, {useEffect, useState} from 'react';
import AppHeader from './components/app-header/app-header.jsx'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients.jsx'
import style from './App.module.css';

function App() {
  return (
    <>
    <AppHeader />
    <BurgerIngredients />
    </>
  );
}

export default App;
