import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
  const {_id, name, img, description, price, minimum, available } = tool;

  // const navigate = useNavigate();
  // const navigateUser = (id) => {
  //   navigate(`/purchase/id`);
  // };
  
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
              
            >
              <Link to={"/purchase/" + _id}>Buy Now</Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Tool;