import React from 'react';
import customer from '../../images/summry/customer.png';
import rennual from '../../images/summry/rennual (1).png';
import review from '../../images/summry/review.png';
import feedback from '../../images/summry/rennual (2).png';




const Summary = () => {
    return (
      <div className="mt-10">
      <div className="text-black text-center py-7 text-4xl font-bold">Millions Business Trust Us</div>
      
       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 mb-24">
          <div className="rounded-lg p-6">
            <img className="w-12 mx-auto text-center" src={customer} alt="" />
            <h1 className="text-center stat-value text-dark">100+</h1>
            <h6 className="text-center">customers</h6>
          </div>
          <div className="rounded-lg p-6">
            <img className="w-12 mx-auto text-center" src={rennual} alt="" />
            <h1 className="text-center stat-value text-dark">120M+</h1>
            <h6 className="text-center">Annual revenue</h6>
          </div>
          <div className="rounded-lg p-6">
            <img className="w-12 mx-auto text-center" src={review} alt="" />
            <h1 className="text-center stat-value text-dark">33K+</h1>
            <h6 className="text-center">Reviews</h6>
          </div>
          <div className="rounded-lg p-6">
            <img className="w-12 mx-auto text-center" src={feedback} alt="" />
            <h1 className="text-center stat-value text-dark">500+</h1>
            <h6 className="text-center">Feedbacks</h6>
          </div>
        </div>
      </div>
    );
};

export default Summary;