import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const Ingredient = ({ ingredient, setIngredient, setSearchID, searchString, getMeals }) => {

if (!ingredient){
  return null
}

console.log(ingredient)
  return (
    <>
      <h1>Meal Options for Category</h1>
      {ingredient.map((i) => {
        return(
          <>
          <Link to={`/details/${i.idMeal}`} key={i.idMeal}>
          <p >{i.strMeal}</p>
          <img className="photo ingredient" src={i.strMealThumb} />
          </Link>
          </>
        )
      })}
    </>
  )
}

export default Ingredient;
