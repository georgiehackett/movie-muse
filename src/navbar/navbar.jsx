import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import PopularMovie from '../Movie/PopularMovie'; 


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/PopularMovie">Popular</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/TopRated">Top Rated</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Upcoming">Upcoming</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Outlet />
    </>
  );
};

export default Navbar;