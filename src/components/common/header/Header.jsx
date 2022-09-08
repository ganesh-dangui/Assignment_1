import React from 'react';
import { Navbar } from '../../common' ;

import './Header.css';

function Header () {

  return (
    <section className="header">
     <div>
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo">My Blog</a>
             </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      </div> 
      <section className="header-bottom">
     
       
    
        
        
      </section>
    
    </section>
  )
}

export default Header;