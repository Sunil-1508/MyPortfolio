import React from 'react'
export default function MyNavbar(props) {
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.Title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Certifications</a>
        </li>
        <li>
          <a href="/myResume.pdf"> 
          <button className="btn btn-primary" type="button">{props.btnName}</button>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
