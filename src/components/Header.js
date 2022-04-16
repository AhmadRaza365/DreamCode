import React from 'react'
import codeIcon from './codeIcon.svg';

const Header = () => {
  return (
    <nav className='logo'>
      <img src={codeIcon} alt='code icon' />
        <h1 >Dream Code</h1>
     
       </nav>
  )
}

export default Header