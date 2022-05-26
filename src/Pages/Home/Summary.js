import React from 'react';
import customer from '../../images/summry/customer.png';
import rennual from '../../images/summry/rennual (1).png';
import review from '../../images/summry/review.png';
import feedback from '../../images/summry/rennual (2).png';



const Summary = () => {
    return (
      <div className="my-12 bg-gradient-to-r from-sky-500 to-indigo-100 py-5">
        <h1 className="text-center stat-value text-white">
          MILLIONS BUSINESS TRUST US
        </h1>
        <p className="text-center text-white mb-5">
          TRY TO UNDERSTAND USERS EXPECTATION
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5 rounded">
          <div className="rounded-lg p-6 bg-sky ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-indigo-500 hover:ring-indigo-500">
            <img className="w-10 mx-auto text-center" src={customer} alt="" />
            <h1 className="text-center stat-value text-dark">100+</h1>
            <h6 className="text-center">customers</h6>
          </div>
          <div className="rounded-lg p-6 bg-sky ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-indigo-500 hover:ring-indigo-500">
            <img className="w-10 mx-auto text-center" src={rennual} alt="" />
            <h1 className="text-center stat-value text-dark">120M+</h1>
            <h6 className="text-center">Annual revenue</h6>
          </div>
          <div className="rounded-lg p-6 bg-sky ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-indigo-500 hover:ring-indigo-500">
            <img className="w-10 mx-auto text-center" src={review} alt="" />
            <h1 className="text-center stat-value text-dark">33K+</h1>
            <h6 className="text-center">Reviews</h6>
          </div>
          <div className="rounded-lg p-6 bg-sky ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-indigo-500 hover:ring-indigo-500">
            <img className="w-10 mx-auto text-center" src={feedback} alt="" />
            <h1 className="text-center stat-value text-dark">500+</h1>
            <h6 className="text-center">Feedbacks</h6>
          </div>
        </div>
      </div>
    );
};

export default Summary;