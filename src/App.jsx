import Navbar from './navbar/navbar'; 
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react';
import Hero from './Hero/Hero';  
import Footer from './footer/footer'; 
 import PopularMovie from './Movie/PopularMovie'; 
 import TopRated from './Movie/TopRated';
 import NowPlaying from './Movie/NowPlaying';

import './App.css';
import MovieDetails from './Movie/MovieDetails';
import Upcoming from './Movie/Upcoming';

const App = () => {
  return (
    <>
<Router>
       <Navbar/>
       <Hero />
  
  <Routes>
      <Route path="/" element={<PopularMovie />} />
      <Route path="/popularmovies" element={<PopularMovie />} /> 
      <Route path='/moviedetail/:id' element={<MovieDetails />} />
      <Route path='/toprated' element={<TopRated />} />
      <Route path='/upcoming' element={<Upcoming />} />
      <Route path='/nowplaying' element={<NowPlaying />} />
    </Routes> 
      
      <Footer />
 </Router>
    </>
  );
};

export default App;
