import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Homepage = () => {
  return (
    <div>
      <Link to='/search-ingredients'>Search Recipes</Link>
      <Link to='/random'><button>Get a random Recipe</button></Link>
    </div>
  ) 
}

export default Homepage;
