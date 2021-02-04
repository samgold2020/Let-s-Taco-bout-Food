import React, { useEffect } from 'react'

const RecipeDetails = ({ ingredient, setIngredient, setSearchID, searchString, random }) => {

  const categoryAPI = `https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_MEALS_API_KEY}/filter.php?i=${searchString}`

  useEffect(() => {
    
    fetch(categoryAPI)
    .then(res => res.json())
    .then(res => {
      setIngredient(res.meals)
      console.log(res.meals)
      })
      .catch(err => {
        console.error(err)
    })
}, []);

  return (
    <div>
      <h1>Meal Options for Category</h1>
      <h2>{ingredient[1].strMeal}</h2>
      <p>{ingredient[1].idMeal}</p>
      <img src={ingredient[1].strMealThumb} />
      <h2>{ingredient[2].strMeal}</h2>
      <h2>{ingredient[3].strMeal}</h2>
      <h2>{ingredient[4].strMeal}</h2>
    </div>
  )
}

export default RecipeDetails;
