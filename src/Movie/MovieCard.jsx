import React,{useEffect, useState} from "react";


function MovieCards() {
    const [movieList,setMovieList] = useState([])
    const getMovie = ()=>{

        fetch("https://api.themoviedb.org/3/discover/movie?api_key=131c856f75867823ef322849c2612110")
       .then(res => res.json())
       .then(json => setMovieList(json.results))
    }
    useEffect(()=>{
        getMovie()
    },[])
     console.log(movieList);
    return(
        <>
    <div className="CardDisplay">
        {movieList.map((movie)=>(
            <div  key={movie.id}>
            <img  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <h5>{movie.release_date}</h5>
        
            </div>
            )
        )}
    </div>
    </>
    )
}
export default MovieCards