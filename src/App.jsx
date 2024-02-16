import Navbar from './navbar/navbar'; 
import { Router } from 'react-router-dom';
import React from 'react';
import Hero from './Hero/Hero';  
import Footer from './footer/footer'; 
 import MovieCard from './Movie/MovieCard'; 
import './App.css';

const App = () => {
  return (
    <>
       <Navbar/>
      <Hero />
      <MovieCard /> 
      <Footer />
      
    </>
  );
};

export default App;
