import React from 'react';


const Summary = () => {
    return (
      <div className="my-12 bg-gradient-to-r from-sky-500 to-indigo-100 py-5">
        <h1 className="text-center stat-value text-white">
          MILLIONS BUSINESS TRUST US
        </h1>
        <p className="text-center text-white mb-5">
          TRY TO UNDERSTAND USERS EXPECTATION
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          <div className="bg-gradient-to-r from-sky-500 to-indigo-500 py-5">
            
            <h1 className="text-center stat-value text-dark">100+</h1>
            <h6 className="text-center">customers</h6>
          </div>
          <div className="bg-gradient-to-r from-sky-500 to-indigo-500 py-5">
            <h1 className="text-center stat-value text-dark">120M+</h1>
            <h6 className="text-center">Annual revenue</h6>
          </div>
          <div className="bg-gradient-to-r from-sky-500 to-indigo-500 py-5">
            <h1 className="text-center stat-value text-dark">33K+</h1>
            <h6 className="text-center">Reviews</h6>
          </div>
          <div className="bg-gradient-to-r from-sky-500 to-indigo-500 py-5">
            <h1 className="text-center stat-value text-dark">50+</h1>
            <h6 className="text-center">tools</h6>
          </div>
        </div>
      </div>
    );
};

export default Summary;