import React, { useState } from 'react';
import './MyNavbar.css';
import {Link} from 'react-router-dom';

export default function MyNavbar(props) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleNavClick = () => {
    if (!isNavCollapsed) {
      handleNavCollapse();
    }
  };

  return (
    <section id="Navbar">
      <nav className={`navbar navbar-expand-lg ${isNavCollapsed ? '' : 'show'}`} data-bs-theme="dark">
        <div className="container-fluid">
          <div className="navleft">
            <img src={props.logo} alt="Logo" />
            <a className="navbar-brand" href="/">{props.Title}</a>
          </div>
          <button className="navbar-toggler" type="button" onClick={handleNavCollapse}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/About" className="nav-link" onClick={handleNavClick} >About</Link>
              </li>
              <li className="nav-item">
                <Link to="/Projects" className="nav-link" onClick={handleNavClick} >Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/Skills" className="nav-link"  onClick={handleNavClick}>Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Coding" onClick={handleNavClick}>Coding</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Certifications" onClick={handleNavClick}>Certifications</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Education" onClick={handleNavClick}>Education</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact" onClick={handleNavClick}>Contact</Link>
              </li>
              <li>
                <a href={props.button}>
                  <button className="btn btn-primary mx-2" type="button">
                    {props.btnName}
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

