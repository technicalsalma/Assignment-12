import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
  const navigate = useNavigate();

  const navigateUser = () => {
    navigate("/purchases");
  };
  
    const { name, img, description, price, minimum, available } = tool;
    return (
      <div class="card w-86 bg-base-100 shadow-xl duration-[2000ms]">
        <figure>
          <img className="w-1/2" src={img} alt="Shoes" />
        </figure>
        <div class="p-5">
          <h2 class="text-bold">Name: {name}</h2>
          <p>{description}</p>
          <p className="text-danger">Price: ${price}</p>
          <p>Minimum order Quantity: {minimum}</p>
          <p>Available Quantity: {available}</p>
          <div class="card-actions justify-end">
            <button
              onClick={() => navigateUser()}
              class="btn btn-info duration-700 ease-in-outbg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mt-2"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
};

export default Tool;