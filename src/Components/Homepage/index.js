import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Homepage = ({ searchString, setSearchString, getRecipes }) => {

  //function to handle the change of setSearchString when input is entered making state the source of truth.
  //Since handleChange runs on every keystroke to update state the console.log will show every value being updated until submit is entered. 
  const handleChange = (event) => {
    event.preventDefault()
    setSearchString(event.target.value)
  }

  return (
    <>
    {/* //This form contains a Javascript function that handles the submission of the form (getRecipes from App.js) */}
    <form onSubmit={getRecipes}>
      <label>Search by Ingredient:
        <input type='text' value={searchString} onChange={handleChange}/>
      </label>
      <input  type='submit' value='Submit' />
    </form>
      {/* <Link to='/search-ingredients'>Search Recipes</Link> */}
      <Link to='/random'><button>Get a random Recipe</button></Link>
    </>
  ) 
}

export default Homepage;
