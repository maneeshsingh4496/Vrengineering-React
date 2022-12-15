import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Main from "./pages/Main";

import "./App.css"
import NavbarFunc from './component/NavbarFunc';

function App() {
 
  return (
   <>
    <NavbarFunc/>
  
   
    {/* <header id="header">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <h1><a href="index.html">VRENGR<span>.</span></a></h1>
      </div>
      
      <nav id="navbar" className="navbar">
      {(toggleMenu || screenWidth > 500) && (
       <ul>
       <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
       <li><a className="nav-link scrollto" href="#about">Who We Are </a></li>
       <li className="dropdown"><a href="#services"><span>What We Do</span> <i className="bi bi-chevron-down"></i></a>
         <ul>
          
           <li className="dropdown"><a data-bs-toggle="modal" ><span>Painting</span> <i className="bi bi-chevron-right"></i></a>
             <ul>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Wall Paint</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Wall Papers</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Water Proofing</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Interior</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Extirior</a></li>
             </ul>
           </li>
           <li className="dropdown"><a data-bs-toggle="modal" ><span>Electrical</span> <i className="bi bi-chevron-right"></i></a>
             <ul>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">General Electrical</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">TV Installation</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">CCTV/Camera</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Modern Wiring</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Modern Switches</a></li>
             </ul>
           </li>
           <li className="dropdown"><a data-bs-toggle="modal" ><span>Fabrication</span> <i className="bi bi-chevron-right"></i></a>
             <ul>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Welding</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Punching</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Metal Stamping</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Stainless Stell Cutting</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Plywood Cutting</a></li>
             </ul>
           </li>
           <li className="dropdown"><a data-bs-toggle="modal" ><span>Interior Designing </span> <i className="bi bi-chevron-right"></i></a>
             <ul>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Living Room</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Kitchen</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Master Bedroom</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Wardroom</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Kids Bedroom</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Guest Bedroom</a></li>
             </ul>
           </li>
           <li className="dropdown"><a data-bs-toggle="modal"><span>Plumbing </span> <i className="bi bi-chevron-right"></i></a>
             <ul>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Washing Maching</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Blocked Drain</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Hot Water heater</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Emergency Plumbing</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Pipe Relining</a></li>
               <li><a data-bs-toggle="modal" data-bs-target="#exampleModal">Taps & Toilets</a></li>
             </ul>
           </li>
          
         </ul>
       </li>
       <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
       <li><a className="getstarted scrollto" data-bs-toggle="modal" data-bs-target="#exampleModal">Get Started</a></li>
     </ul>
     )}
         <button onClick={toggleNav} className="btn">BTN</button>
        <i className="bi bi-list mobile-nav-toggle" onClick={toggleNav} ></i>
      </nav>

    </div>
    </header> */}
  

  <Main></Main>

    <footer id="footer">

    <div className="footer-top" id="maxWidth">

      <div className="container">

        <div className="row  justify-content-center">
          <div className="col-lg-6">
            <h3>VRENGR</h3>
            <p>Et aut eum quis fuga eos sunt ipsa nihil. <br/> corporis magni eligendi fuga maxime saepe commodi placeat.</p>
          </div>
        </div>

        <div className="social-links">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>

      </div>
    </div>

    <div className="container footer-bottom clearfix" id="maxWidth">
      <div className="copyright">
        &copy; Copyright <strong><span>VR ENGEENRING.</span></strong>. <br/> All Rights Reserved
      </div>
    </div>
  </footer>
 
   </>
  );
}

export default App;
