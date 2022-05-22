import React from 'react';
import Tools from '../Shared/Tools';
import Banner from './Banner';
import Summary from './Summary';


const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Tools></Tools>
        <Summary></Summary>
      </div>
    );
};

export default Home;