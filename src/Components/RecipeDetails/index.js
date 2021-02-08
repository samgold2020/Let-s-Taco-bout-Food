import React, { useState, useEffect } from 'react'

const RecipeOptions = ( { match }) => {
  //State for getting recipe specific details 
  const [recipe, setRecipe] = useState()

  //importing match from routerProps in App.js. Used here to match URL idMeal of ingredients
  // to the same recipe ID on-click. 
  const searchID = match.params.idMeal

  //Ingredient endpoint different from list of recipes endpoint
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
   {Object.keys(recipe).map(function(key) {
     console.log(recipe[key])
  
   })}
        <p> {recipe.strIngredient1}</p>
       
    </>
  )
}

export default RecipeOptions;
