import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <li className="navbar-brand">
        <Link className='nav-link' to="/">NEWS API</Link></li>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <div>

        <li className="nav-item">
          <Link className='nav-link' to="/Home">Home</Link>
        </li>
        </div>

      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar