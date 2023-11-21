import React from 'react';
import Nav from '../componets/Nav';
import Testi from '../componets/testimonials';
import Sale from '../componets/sale';
import Rent1 from '../componets/rent';
import Formm from '../componets/form';
import Hero from '../componets/hero';
import Footer from '../componets/footer';


function Home() {
  return (
    <React.Fragment>
        <Nav />
        <Hero />
        <Sale />
        <Rent1 />
        <Testi />
        <Formm />
        <Footer />
    </React.Fragment>
    
  );
}

export default Home;
