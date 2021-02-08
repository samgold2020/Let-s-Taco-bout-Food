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
      <div className='navbar'></div>
      <h1>Meal Options for Category</h1>
      <section className="container">
      {ingredient.map((i) => {
        return(
          <>
          <div className="category">
            <div className="card">
            <Link to={`/details/${i.idMeal}`} key={i.idMeal}>
            <img className="photo ingredient" src={i.strMealThumb} alt='plated meal' />
            <p >{i.strMeal}</p>
            </Link>
            </div>
          </div>
          </>
        )
      })}
      </section>
    </>
  )
}

export default Ingredientcategory;
