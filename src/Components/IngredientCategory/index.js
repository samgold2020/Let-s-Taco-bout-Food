import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const Ingredientcategory = ({ ingredient }) => {

// const handleChange = (event) => {
//     setSearchString(event.target.value)
//     console.log(event.target.value)
// }


if (!ingredient){
  return null
}

console.log(ingredient)
  return (
    <>
      {/* <header>
      <form onSubmit={getRecipes} >
            <input type="text" name="ingredient" value={ingredient} onChange={handleChange}></input>
            <button>Search by Ingredient</button>
        </form>
      </header> */}
      <h1>Meal Options for Category</h1>
      {ingredient.map((i) => {
        return(
          <>
          <Link to={`/details/${i.idMeal}`} key={i.idMeal}>
          <p >{i.strMeal}</p>
          <img className="photo ingredient" src={i.strMealThumb} alt='plated meal' />
          </Link>
          </>
        )
      })}
    </>
  )
}

export default Ingredientcategory;
