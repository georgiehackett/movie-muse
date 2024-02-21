import React from 'react';
import MovieCard from '../Components/Movie/MovieCard';

function FavouritesPage({ favouriteMovies }) {
  console.log(favouriteMovies);

  return (
    <div className="container-fluid movie-app">
      <div>
        <h1>Favourites</h1>
      </div>
      {/* <MovieCard /> */}
    </div>
  );
}

export default FavouritesPage;
