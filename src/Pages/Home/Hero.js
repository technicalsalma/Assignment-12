import React from 'react';
import banner from '../../images/banner/banner.jpg'

const Hero = () => {
    return (
      <div className="mt-20">
        <div
          // class="hero min-h-screen"

          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
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
              <button class="btn btn-secondary transition ease-in-out delay-150 bg-secondary-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;