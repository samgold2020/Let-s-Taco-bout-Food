import React, { useEffect } from 'react'

const RandomRecipe = ({ random, setRandom }) => {

  const randomAPI =`https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_MEALS_API_KEY}/random.php`

  useEffect(() => {      
   
      fetch(randomAPI)
      .then(res => res.json())
      .then (res => {
          setRandom(res.meals[0]) 
      })
      .catch(err => {
          console.error(err)
      })
  }, []);

  if (!random){
    return <div>...loading</div>
  }

  return (
      <section>
           <h2>{random.strMeal} - {random.strArea}</h2>
       <div className='random-wrapper'>
          <img 
          className='random-img'
          width='500px'
          height='500px'
          src={random.strMealThumb} 
          alt={random.strMeal}/>
      <div className='random-ingredients'>
          <ul><b>Ingredient List:</b>
          <br></br>
          <br></br>
              <li>{random.strMeasure1} {random.strIngredient1}</li>
              <li>{random.strMeasure2} {random.strIngredient2}</li>
              <li>{random.strMeasure3} {random.strIngredient3}</li>
              <li>{random.strMeasure4} {random.strIngredient4}</li>
              <li>{random.strMeasure5} {random.strIngredient5}</li>
              <li>{random.strMeasure6} {random.strIngredient6}</li>
              <li>{random.strMeasure7} {random.strIngredient7}</li>
              <li>{random.strMeasure8} {random.strIngredient8}</li>
              <li>{random.strMeasure9} {random.strIngredient9}</li>
              <li>{random.strMeasure10} {random.strIngredient10}</li>
              <li>{random.strMeasure11} {random.strIngredient11}</li>
              <li>{random.strMeasure12} {random.strIngredient12}</li>
              <br></br>
          </ul>
              <p><b>Instructions:</b> {random.strInstructions}</p>
      </div>
      </div>
      <div>
              </div>
       </section>
  );
};

export default RandomRecipe;
