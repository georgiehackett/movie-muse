import React,{useEffect, useState} from "react";

function MovieCards() {
    const getMovie = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=131c856f75867823ef322849c2612110")
       .then(res => res.json())
       .then(json => console.log(json.results))
    }
    //Call getMovie function with a useEffect hook
    useEffect(()=>{
        getMovie()
    },[])
    return(
        <>
        <h1>Here are the movie cards</h1>
        </>
    )
}

export default MovieCards