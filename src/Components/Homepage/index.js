// import { Carousel } from 'bootstrap';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ImgCarousel from '../Carousel/index';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Homepage = ({ searchString, setSearchString, getRecipes }) => {

  //function to handle the change of setSearchString when input is entered making state the source of truth.
  //Since handleChange runs on every keystroke to update state the console.log will show every value being updated until submit is entered. 
  const handleChange = (event) => {
    event.preventDefault()
    setSearchString(event.target.value)
      }

  return (
    <div className='directions'>
    <ImgCarousel />
    {/* <div className='directions'> */}
    <div className='directions-list'>
      <ul>Directions:
        <li>Type in your ingredient: <p className='examples'>Example: "Chicken", "Beef", "Tofu", "Lemon"</p></li>
        <li>Hit "Submit"</li>
        <li>Click "See Recipes"</li>
        <br></br>
      </ul>
      {/* <div className='homepage-form'> */}
    {/* //This form contains a Javascript function that handles the submission of the form (getRecipes from App.js) */}
    <form onClick={getRecipes} className='form'>
      <label>Search by Ingredient:
        <br></br>
        <input type='text' name='ingredient' value={searchString} onChange={handleChange}/>
      </label>
      <input  type='submit' value='Submit'/>
      <Link to='/search-ingredients' className='search'>See Recipes</Link>
    </form>
    </div>
    </div>
    // </>
  ) 
}

export default Homepage;
