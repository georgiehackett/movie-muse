import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddToFavourites from '../AddToFavourites/AddToFavourites';
import RemoveFromFavourites from '../RemoveFromFavourites/RemoveFromFavourites';
const Image_url = 'https://image.tmdb.org/t/p/w200/';

const MovieCard = ({ movieList, favouriteMovies, setFavouriteMovies }) => {
  // const [favouriteMovies, setFavouriteMovies] = useState([]);
  console.log(favouriteMovies, Boolean(favouriteMovies));

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
          className="movieCardContainer image-container justify-content-start text-center m-3"
          key={movie.id}
        >
          <Link to={{ pathname: `/moviedetail`, search: `?q=${movie.id}` }}>
            <img src={Image_url + `${movie.poster_path}`} alt={movie.title} />
          </Link>
          <h3 className="CardTitle">{movie.title}</h3>
          <h5>{movie.release_date}</h5>
          {/* {console.log(favouriteMovies)} */}
          {favouriteMovies ? (
            favouriteMovies.includes(movie) ? (
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
            )
          ) : (
            'loading'
          )}
          {/* <div
            className="overlay"
            onClick={() => handleRemoveFavouriteMoviesClick(movie)}
          >
            <RemoveFromFavourites />
          </div> */}
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
