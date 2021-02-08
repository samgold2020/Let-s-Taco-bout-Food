import React from 'react';
// import '../../App.css';
import { Link } from 'react-router-dom';

const Ingredientcategory = ({ ingredient }) => {

if (!ingredient){
  return null
}

console.log(ingredient)
  return (
    <>
      <h1>Meal Options for Category</h1>
      <section className="container">
      {ingredient.map((i) => {
        return(
          <>
          <div className="category">
            <div className="card">
            <Link to={`/details/${i.idMeal}`} key={i.idMeal}>
            <img className="photo ingredient" src={i.strMealThumb} alt='plated meal' />
            <p className='dish-title'>{i.strMeal}</p>
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
