import React from 'react';
import { Link } from 'react-router'

const Footer = () => {

  return (
    <div className='footer'>
    <footer>
      <button className='sort-btn'>
        <Link to='/sort'>
          SORT
        </Link>
       </button>
      <button> 
        Filter </button>
    </footer>
    </div>
  )
}

export default Footer;
