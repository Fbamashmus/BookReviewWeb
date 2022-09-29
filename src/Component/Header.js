import React from 'react';
import Logo2 from '../images/Logo2.jpg';
import "./Header.css";

function Header() {
  return (
  <div className='component-header'>
       <img src={Logo2}  width="120"
          height="60" className="Header--image" alt="glasses"/>
       <h3> Nerds Recommened</h3>
    </div>
  );
}

export default Header;
