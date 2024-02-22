import React,{useEffect, useState} from "react";
const API_KEY="131c856f75867823ef322849c2612110";
import MovieCard from "./MovieCard";

const Toprated_url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`;

function TopRated({ favouriteMovies, setFavouriteMovies }) {
    const [movieList,setMovieList] = useState([])
    const getMovie = ()=>{

        fetch(`${Toprated_url}`)
       .then(res => res.json())
       .then(json => setMovieList(json.results))
    }
    useEffect(()=>{
        getMovie()
    },[])
     
    return(
        <div className='container-fluid movie-app mt-2'>
        <div>
            <h1 className='mt-5 ms-3 mb-4'>Top Rated Movies</h1>
            </div>
           
            <MovieCard movieList={movieList} favouriteMovies={favouriteMovies} setFavouriteMovies={setFavouriteMovies}/>
    
    </div>
    )
}
export default TopRated