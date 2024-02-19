import React, { useState } from 'react';
import Moviecard from './Movie/MovieCard';
import './App.css';
import FavouritesIcon from './FavouritesIcon/FavouritesIcon';

function App() {  
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  const addFavouriteMovies = movie => {
    setFavouriteMovies([...favouriteMovies, movie])
  };

  console.log(favouriteMovies);

  return (
    <>
      <Moviecard
        favouritesIcon={FavouritesIcon}
        favouriteComponent={FavouritesIcon}
        handleFavouriteMoviesClick={addFavouriteMovies}
      />
    </>
  );
}

export default App;
