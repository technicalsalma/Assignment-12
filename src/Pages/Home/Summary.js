import React from 'react';
import { BeakerIcon } from "@heroicons/react/solid";

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
            <h1 className="text-center stat-value text-dark">72</h1>
            <h6 className="text-center">Countries</h6>
          </div>
          <div className="bg-gradient-to-r from-sky-500 to-indigo-500 py-5">
            <h1 className="text-center stat-value text-dark">535+</h1>
            <h6 className="text-center">Complete Project</h6>
          </div>
          <div className="bg-gradient-to-r from-sky-500 to-indigo-500 py-5">
            <h1 className="text-center stat-value text-dark">900+</h1>
            <h6 className="text-center">Happy Clients</h6>
          </div>
          <div className="bg-gradient-to-r from-sky-500 to-indigo-500 py-5">
            <h1 className="text-center stat-value text-dark">720+</h1>
            <h6 className="text-center">Feedbacks</h6>
          </div>
        </div>
      </div>
    );
};

export default Summary;