import React,{useEffect, useState} from "react";

function Movie() {
    const getMovie = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=2197d5ce46768a87c8eb8f1773fec019")
       .then(res => res.json())
       .then(json => setMovieList(json.results))
    }
}