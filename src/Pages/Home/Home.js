import React from 'react';
import Phone from '../ExtraSection/Phone';
import Tools from '../Shared/Tools';
import Banner from './Banner';
import Hero from './Hero';
import Summary from './Summary';
import Reviews from './Reviews'
import Extrasection from '../ExtraSection/Extrasection';



const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Summary></Summary> 
        <Tools></Tools>
        <Reviews></Reviews>
        <Phone></Phone> 
        <Extrasection></Extrasection> 
        <Hero></Hero>
      </div>
    );
}; 

export default Home;