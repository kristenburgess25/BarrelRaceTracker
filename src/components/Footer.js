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
       <button className='filter-btn'>
         <Link to='/filter'>
           FILTER
         </Link>
        </button>
    </footer>
    </div>
  )
}

export default Footer;
