import React from 'react';

const Header = () => {
  return (
    <>
    <div className='nav wrapper'>
      <ul className='nav-list'>
        <li><a href='/'>Home</a></li>
        <li><a href='/random'>Random Recipe</a></li>
        <li><a href='https://happy-kirch-922c4e.netlify.app/' target='_blank'>Portfolio</a></li>
        <li><a href='https://github.com/samgold2020/Recipe-Finder' target='_blank'>Github Repo</a></li>
      </ul>
    </div>
    </>
  )
}

export default Header;
