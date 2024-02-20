import React,{useEffect, useState} from "react";
import MovieCard from "./MovieCard";

const API_KEY="131c856f75867823ef322849c2612110";

const NowPlaying_url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`;
//const Search_url= `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${process.env.API_KEY}&query=`
function NowPlaying() {
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
        <div className='container-fluid movie-app'>
        <div>
            <h1>Now Playing Movies</h1>
            </div>
           
            <MovieCard movieList={movieList}/>
    
    </div>
    )
}
export default NowPlaying