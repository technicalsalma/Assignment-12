import React from 'react';
import profile from '../../images/drill-machine/images.jfif'


const Phone = () => {
  return (
    <div className="lg:px-24 mt-5">
      <div class="hero bg-secondary-200">
        <div class="hero-content flex-col sm:flex-row-reverse h-4/8">
          <div>
            <img className='w-12/24' src={profile} alt="" />
          </div>

          <div className=" w-6/12">
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