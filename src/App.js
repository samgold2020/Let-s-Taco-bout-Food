import React, { useEffect,useState } from 'react'
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Link,
} from 'react-router-dom'

//pages
import Ingredient from './Components/IngredientCategory/index';
import RecipeDetails from './Components/RecipeDetails/index';

function App() {
  const [recipe, setRecipe] = useState('')
  const [ingredient, setIngredient] = useState()
  const [searchString, setSearchString] = useState('chicken')
  const [random, setRandom] = useState('')
  const [searchID, setSearchID] = useState('')

  const categoryAPI = `https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_MEALS_API_KEY}/filter.php?i=${searchString}`

  useEffect(() => {

    fetch(categoryAPI)
    .then(res => res.json())
    .then(res => {
      setIngredient(res.meals)
      setSearchID(res.meals.idMeal)
    })
    .catch(err => {
      console.error(err)
    })
    console.log(ingredient)
},[]);
{console.log(ingredient)}

if (!ingredient){
  return <div>...loading</div>
}

  return (
    <>
    <Router>
    <Route path='/meals' render={() =>{
      return (
        <Ingredient 
        setSearchID={setSearchID} 
        searchString={searchString} 
        ingredient={ingredient} 
      />
      ) 
    }}/>
    <Route path='/details/:idMeal'  render={(routerProps)=> {
      return (
        <RecipeDetails 
        match={routerProps.match}
        ingredient={ingredient} 
        setSearchID={setSearchID}
        searchID={searchID}/>
      )
    }}
    />
    </Router>
    </>
  );
}

export default App;

