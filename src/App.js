import React from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <HeadlineCards/>
    <Food/>
    <Testimonials/>
    <Newsletter/>
    <Footer/>
    </>
  );
}

export default App;
