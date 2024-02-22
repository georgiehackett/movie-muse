import React,{useEffect, useState} from "react";
import MovieCard from "./MovieCard";


const API_KEY="131c856f75867823ef322849c2612110";

const NowPlaying_url = `https://api.themoviedb.org/3/movie/now_playing?include_adult=false&language=en-US&page=1&api_key=${API_KEY}`;

function NowPlaying({ favouriteMovies, setFavouriteMovies }) {
    const [movieList,setMovieList] = useState([])
    const getMovie = ()=>{

        fetch(`${NowPlaying_url}`)
       .then(res => res.json())
       .then(json => setMovieList(json.results))
    }
    useEffect(()=>{
        getMovie()
    },[])
     
    return(
        <div className='container-fluid movie-app mt-5'>
        <div>
            <h1 className='mt-5 ms-3 mb-4'>Now Playing Movies</h1>
            </div>
           
            <MovieCard movieList={movieList} favouriteMovies={favouriteMovies} setFavouriteMovies={setFavouriteMovies}/>
    
    </div>
    )
}
export default NowPlaying