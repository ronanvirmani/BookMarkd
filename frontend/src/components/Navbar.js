// Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">BookMarkd</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Browse</a>
            </li>
          </ul>
        </div>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search Your Books" aria-label="Search" />
          <button className="btn btn-outline-dark" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;

