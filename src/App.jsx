import Navbar from './navbar/navbar'; 
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react';
import Hero from './Hero/Hero';  
import Footer from './footer/footer'; 
 import PopularMovie from './Movie/PopularMovie'; 

import './App.css';
import MovieDetails from './Movie/MovieDetails';

const App = () => {
  return (
    <>
<Router>
       <Navbar/>
       <Hero />
  
  <Routes>
      <Route path="/" element={<PopularMovie />} />
      {/* <Route path="/popularmovies" element={<PopularMovies />} /> */}
      <Route path='/moviedetail/:id' element={<MovieDetails />} />
    </Routes> 
      
      <Footer />
 </Router>
    </>
  );
};

export default App;
