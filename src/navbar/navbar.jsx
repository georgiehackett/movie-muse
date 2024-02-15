import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand" to="/">Home</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link" to="/about">About</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" to="/contact">Contact</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
