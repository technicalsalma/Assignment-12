import React from 'react';
import banner from '../../images/banner/banner.jpg'

const Hero = () => {
    return (
      <div className="mb-20">
        <div
         style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          {/* <div class="hero-overlay bg-secondary-60"></div> */}
          <div class="hero-content text-center text-black">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Drill Machine</h1>
              <p class="mb-5">
                We are one of the largest manufacturers and suppliers of
                Drilling Cum Milling Machine. Our machines are in demand because
                of its durability, immaculate finishing, accurate dimensions and
                reliable functionality. Our skilled professionals build these
                machines using best quality raw materials. It can also be used
                for drilling, tapping, countersinking and reaming.
              </p>
              <button class="btn btn-secondary">Our Product</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;