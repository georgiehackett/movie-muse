import Navbar from './navbar/navbar';
import { Router } from 'react-router-dom';
import React from 'react';
import Hero from './Hero/Hero'; 
import MovieCard from './Movie/MovieCard';
import './App.css';

const App = () => {
  return (
      <Navbar/>
    <>
      <Hero />
      {/* Other components or content */}
      <MovieCard />
      {/* Other components or content */}
    </>
  );
};

export default App;