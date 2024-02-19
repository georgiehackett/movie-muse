import React from 'react'
import { useParams } from 'react-router-dom'
//import fetch from 'node-fetch';

const API_KEY="131c856f75867823ef322849c2612110";

const MovieDetails = () => {
    const {id} =useParams();
    const url = `https://api.themoviedb.org/3/find/${id}?external_source=`
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTk3ZDVjZTQ2NzY4YTg3YzhlYjhmMTc3M2ZlYzAxOSIsInN1YiI6IjY1Y2NlNDM5ZTIxMDIzMDE2MmMzNWI2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wyNltt4KQKEeWYZ9GupsPpFLMb92n7xBzucylavU7w4'
        }
    };
    fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
  return (
    <div>
      <h1>Movie details page</h1>
     
    </div>
  )
}

export default MovieDetails
