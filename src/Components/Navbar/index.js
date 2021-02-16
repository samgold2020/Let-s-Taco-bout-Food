import React from 'react';
import { GiBroccoli } from 'react-icons/gi';

const Header = () => {
  return (
    <>
    <div className='nav wrapper'>
      <ul className='nav-list'>
        <li><a href='/'> <GiBroccoli size={35}/></a></li>
        {/* //make the above link? */}
        <li><a href='/random'>Random Recipe</a></li>
        <li><a href='https://sam-goldstein.netlify.app/'  rel="noreferrer" target='_blank' >Portfolio</a></li>
        <li><a href='https://github.com/samgold2020/Recipe-Finder' target='_blank' rel="noreferrer">Github Repo</a></li>
      </ul>
    </div>
    </>
  )
}

export default Header;
