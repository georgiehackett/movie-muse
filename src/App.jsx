import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './navbar/navbar';
import Hero from './Hero/Hero';
import Footer from './footer/footer';
import PopularMovie from './Movie/PopularMovie';
import AddToFavourites from './AddToFavourites/AddToFavourites';
import MovieDetails from './Movie/MovieDetails';

const App = () => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  const addFavouriteMovies = movie => {
    setFavouriteMovies([...favouriteMovies, movie])
  };

  return (
    <>
      <Router>
        <Navbar />
        <Hero />

        <Routes>
          <Route path="/" element={<PopularMovie />} />
          <Route path="/popularmovies" element={<PopularMovie handleFavouriteMoviesClick={addFavouriteMovies} />} /> 
          <Route
            path="/moviedetail/:id"
            element={<MovieDetails />}
          />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
