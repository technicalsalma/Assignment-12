import React from 'react';
import Phone from '../ExtraSection/Phone';
import Tools from '../Shared/Tools';
import Banner from './Banner';
import Hero from './Hero';
import Summary from './Summary';


const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Tools></Tools>
        <Phone></Phone>
        <Hero></Hero>
        <Summary></Summary>
      </div>
    );
};

export default Home;