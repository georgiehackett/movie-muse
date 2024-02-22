import React from 'react';
import MovieCard from '../Components/Movie/MovieCard';

function FavouritesPage({ favouriteMovies, setFavouriteMovies }) {
//   console.log(favouriteMovies);


  return (
    <div className="container-fluid movie-app mt-2">
      <div>
        <h1 className='mt-5 ms-3 mb-4'>Favourites</h1>
      </div>
      <MovieCard movieList={favouriteMovies} favouriteMovies={favouriteMovies} setFavouriteMovies={setFavouriteMovies} />
    </div>
  );
}

export default FavouritesPage;
