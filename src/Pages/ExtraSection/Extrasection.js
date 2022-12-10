import React from 'react';
import img1 from '../../images/cursol/ima-1.jpg'
import img2 from '../../images/cursol/img-2.jpg'
import img3 from '../../images/cursol/img-3.jpg'

const Extrasection = () => {
    return (
      <div class="hero min-h-screen bg-base-100 flex justify-between">
        <div class="hero-content flex-col lg:flex-row">
          <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
              <img src={img1} alt=''/> 
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
              <img src={img2} class="w-full" /> /
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
              <img src={img3} class="w-full" /> /
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div className="p-24">
            <h1 class="text-4xl font-bold">New Drill Machine!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-secondary transition ease-in-out delay-150 bg-secondary-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-30">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
};

export default Extrasection;