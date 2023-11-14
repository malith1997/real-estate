import React from 'react';
import Nav from '../componets/Nav';
import Testi from '../componets/testimonials';
import Sale from '../componets/sale';
import Rent1 from '../componets/rent';
import Formm from '../componets/form';


function Home() {
  return (
    <React.Fragment>
        <Nav />
        <Sale />
        <Rent1 />
        <Testi />
        <Formm />
        
  
    </React.Fragment>
    
  );
}

export default Home;
