import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import ModalFunction from './ModalFunction';

import "./Navbar.css"
//Pages
function NavbarFunc() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
        
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <a exact href="#" className="nav-logo">
            VRENGR<span>.</span>
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                exact
                href="#hero"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                href="#about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Who We Are ?
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                href="#services"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                What We Do ?
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                href="#contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </a>
            </li>
            <li className='mb-3'>
            <ModalFunction/>
            </li>
           
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}

export default NavbarFunc