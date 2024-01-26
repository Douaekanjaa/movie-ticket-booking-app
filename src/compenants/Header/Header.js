import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CloseMenu } from './x.svg';
import { ReactComponent as MenuIcon } from './menu.svg';
import './header.css';


export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div>
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/cinema.png`} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="navM">
          <ul className={click ? 'nav-options active' : 'nav-options'}>
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/">Home</Link>
            </li>
            
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/movies">Movies</Link>
            </li>
            
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/purchase-history">Purchase History</Link>
            </li>

            <li className="option mobile-option" onClick={closeMobileMenu}>
              <Link to="/signin">Sign In</Link>
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <Link to="/signup" className="sign-up">
                Sign Up
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
      <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
          <Link to="/signin">Sign In</Link>
        </li>
        <li onClick={closeMobileMenu}>
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? <CloseMenu className="menu-icon" /> : <MenuIcon className="menu-icon" />}
      </div>
    </div>
    </div>

);
}

