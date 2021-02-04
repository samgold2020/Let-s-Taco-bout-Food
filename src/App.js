import React, { useState } from 'react'
import './App.css';

//pages
import IngredientCategory from './Components/IngredientCategory/index';

function App() {
  const [recipe, setRecipe] = useState('')
  const [ingredient, setIngredient] = useState('')
  const [searchString, setSearchString] = useState('chicken')
  const [random, setRandom] = useState('')
  const [searchID, setSearchID] =useState('')

  return (
    <>
      <IngredientCategory  setSearchID={setSearchID} searchString={searchString} random={random} ingredient={ingredient} setIngredient={setIngredient}/>
    </>
  );
}

export default App;
