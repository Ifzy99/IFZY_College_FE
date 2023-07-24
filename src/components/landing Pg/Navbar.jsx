import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
   
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid navCont">
      <div className="navImg img-fluid img-responsive">
         <img src="./Image/myLogo.png" alt=""/>
      </div>
      <button className="navbar-toggler bg-light text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link active text-light" aria-current="page" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
            <ul className="dropdown-menu">
            <li><Link className="dropdown-item text-dark" to="/history">Our History</Link></li>
            <li><Link className="dropdown-item text-dark" to="/mission">Our Mission</Link></li>
          </ul>
          </li>

          <li className="nav-item dropdown">
          <a className="nav-link dropdown text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Programmes
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item text-dark" to="/basic">Basic Degree</Link></li>
            <li><Link className="dropdown-item text-dark" to="/professional">Professional Degree</Link></li>
            <li><Link className="dropdown-item text-dark" to="/masters">Masters Degree</Link></li>
          </ul>
        </li>

          <li className="nav-item dropdown">
            <a className="nav-link text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Admissions</a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item text-dark" to="">Apply for a Programme</Link></li>
              <li><Link className="dropdown-item text-dark" to="">Mode of Study</Link></li>
              <li><Link className="dropdown-item text-dark" to="">Tuition</Link></li>
              <li><Link className="dropdown-item text-dark" to="">FAQ</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link  text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Portal
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item text-dark" to="/StudentSignIn">Student</Link></li>
              <li><Link className="dropdown-item text-dark" to="/admin">Staff</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
             <Link className="nav-link text-light" to="">News</Link>
        </li>
        </ul>
        </div>
      </div>
  </nav>
    
    </>
  )
}

export default Navbar