import React from 'react';

/*Css */
import '../stylesheet/Home.css';

/* Componenrts */
import TopLine from './TopLine';
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Service from './Services';
import Team from './Team';
import Testimonial from './Testimonial';
import Search from './Search';
import Footer from './Footer';

function Home() {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <TopLine />
        <Nav />
        <Hero />
        <About />
        <Service />
        <Team />
        <Testimonial />
        <Search />
        <Footer />
      </div>
    </>
  );
}

export default Home;
