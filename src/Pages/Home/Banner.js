import React from 'react';
import banner from '../../images/banner/banner-2.jpg';

const Banner = () => {
    return (
      <div className="w-screen mb-5">
        <img className="w-screen h-96" src={banner} alt="" />
      </div>
    );
};

export default Banner;