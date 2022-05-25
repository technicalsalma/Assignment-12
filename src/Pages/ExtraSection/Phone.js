import React from 'react';
import photo from '../../images/banner/phone-1.jpg'


const Phone = () => {
    return (
      <div className="w-screen h-2/4 px-12 my-5">
        <div class="hero bg-secondary-200">
          <div class="hero-content flex-col sm:flex-row-reverse h-2/4">
            <div class="mockup-phone border-secondary h-85">
              <div class="camera"></div>
              <div class="display">
                <div class="artboard artboard-demo phone-1">
                  <img src={photo} alt="" />
                </div>
              </div>
            </div>
            <div className="ml-10 w-6/12">
              <h1 class="text-5xl font-bold">Drill Machine News!</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button
                class="btn btn-secondary transition ease-in-out delay-150 bg-secondary-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                to="/dashboard"
              >
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Phone;