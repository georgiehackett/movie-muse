import React,{useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import MovieCard from "./MovieCard";
const API_KEY="131c856f75867823ef322849c2612110";
const Image_url = "https://image.tmdb.org/t/p/w200/";
const Upcoming_url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`;
//const Search_url= `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${process.env.API_KEY}&query=`
function Upcoming({ favouriteMovies, setFavouriteMovies }) {
    const [movieList,setMovieList] = useState([])
    const getMovie = ()=>{

        fetch(`${Upcoming_url}`)
       .then(res => res.json())
       .then(json => setMovieList(json.results))
    }
    useEffect(()=>{
        getMovie()
    },[])
     
    return(
        <div className='container-fluid movie-app mt-5'>
        <div>
            <h1 className='mt-5 ms-3 mb-4'>Upcoming Movies</h1>
            </div>
           
    <MovieCard movieList={movieList} favouriteMovies={favouriteMovies} setFavouriteMovies={setFavouriteMovies}/>
    
    </div>
    )
}
export default Upcoming