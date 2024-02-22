import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid ms-2">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-2">
            <li className="nav-item">
              <Link className="nav-link" to="/PopularMovie">Popular</Link>
            </li>
            <li className="nav-item ms-1">
              <Link className="nav-link" to="/TopRated">Top Rated</Link>
            </li>
            <li className="nav-item ms-1">
              <Link className="nav-link" to="/Upcoming">Upcoming</Link>
            </li>
            <li className="nav-item ms-1">
              <Link className="nav-link" to="/NowPlaying">Now Playing</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="me-3 nav-item collapse navbar-collapse" id='navbarNav'>
      <Link className="nav-link" to="/Favourites">Favourites</Link>
      </div>
    </nav>
    <Outlet />
    </>
  );
};

export default Navbar;