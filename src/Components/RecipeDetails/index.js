import React, { useState, useEffect } from 'react'

const RecipeDetails = ( { match }) => {
  const [recipe, setRecipe] = useState()

  const searchID = match.params.idMeal
  console.log("this is the search ID from router props", searchID)

  const mealDetailsURL =`https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_MEALS_API_KEY}/lookup.php?i=${searchID}`

  useEffect(() => {  

        fetch(mealDetailsURL)
        .then(res => res.json())
        .then (res => {
          setRecipe(res.meals[0])
        })
        .catch(err => {
            console.error(err)
        })
    }, []);

    if (!recipe){
      return <div>...loading</div>
    }

    console.log("This is the full recipe", recipe)
  return (
    <>
     <h1>{recipe.strMeal}</h1>
     {/* //do a for loop and only display if ingredient.lenght > 1 */}
   
        <p> {recipe.strIngredient1}</p>
       
    </>
  )
}

export default RecipeDetails
