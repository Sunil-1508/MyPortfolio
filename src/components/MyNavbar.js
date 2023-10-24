import React, { useState } from 'react';
import './MyNavbar.css';

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
                <a className="nav-link" aria-current="page" href="#About" onClick={handleNavClick}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Projects" onClick={handleNavClick}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Skills" onClick={handleNavClick}>
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Coding" onClick={handleNavClick}>
                  Coding
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Certifications" onClick={handleNavClick}>
                  Certifications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact" onClick={handleNavClick}>
                  Contact
                </a>
              </li>
              <li>
                <a href={props.button}>
                  <button className="btn btn-primary" type="button">
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

