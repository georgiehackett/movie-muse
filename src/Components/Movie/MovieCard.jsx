import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddToFavourites from '../AddToFavourites/AddToFavourites';
import RemoveFromFavourites from '../RemoveFromFavourites/RemoveFromFavourites';
const Image_url = 'https://image.tmdb.org/t/p/w200/';

const MovieCard = ({ movieList }) => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  const handleFavouriteMoviesClick = movie => {
    const newFavouriteMovies = [...favouriteMovies, movie];
    setFavouriteMovies(newFavouriteMovies);
  };

  const handleRemoveFavouriteMoviesClick = movie => {
    const newFavouriteMovies = favouriteMovies.filter(
      favourites => favourites !== movie,
    );
    setFavouriteMovies(newFavouriteMovies);
  };
  
  return (
    <div className="row popular-card">
      {movieList.map(movie => (
        <div
          className="movieCardContainer image-container justify-content-start m-3"
          key={movie.id}
        >
          <Link to={{ pathname: `/moviedetail`, search: `?q=${movie.id}` }}>
            <img src={Image_url + `${movie.poster_path}`} alt={movie.title} />
          </Link>
          <h3 className="CardTitle">{movie.title}</h3>
          <h5>{movie.release_date}</h5>
          {favouriteMovies.includes(movie) ? (
            <div
              className="overlay"
              onClick={() => handleRemoveFavouriteMoviesClick(movie)}
            >
              <RemoveFromFavourites />
            </div>
          ) : (
            <div
              className="overlay"
              onClick={() => handleFavouriteMoviesClick(movie)}
            >
              <AddToFavourites />
            </div>
          )}
        </div>
      ))}
    </div>
    /*   <div className="row popular-card">
        {movieList.map((movie)=>(
            <div className="image-container justify-content-start m-3" key={movie.id}>
                <Link to={{pathname:`/moviedetail`,search:`?q=${movie.id}`}}>
              <img  src={Image_url + `${movie.poster_path}`} alt={movie.title} />
              </Link>
               <h3 className="CardTitle">{movie.title}</h3>
            <h5>{movie.release_date}</h5>
        
            </div>
            )
        )}
    </div> */
  );
};

export default MovieCard;
