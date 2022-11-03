import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
  const {_id, name, img, description, price, minimum, available } = tool;

  // const navigate = useNavigate();
  // const navigateUser = (id) => {
  //   navigate(`/purchase/id`);
  // };
  
    return (
      <div class="card w-86 bg-base-100 drop-shadow-2xl duration-[2000ms]">
        <figure>
          <img className="w-1/2" src={img} alt="Shoes" />
        </figure>
        <div class="p-5">
          <h2 class="font-bold">Name: {name}</h2>
          <p className="text-red-900 font-bold">Price: ${price}</p>
          <p className="text-secondary">Minimum order Quantity: {minimum}</p>
          <p className="text-secondary">Available Quantity: {available}</p>
          <p>{description}</p>
          <div class="card-actions justify-end">
            <button className="btn btn-secondary">
              <Link to={"/purchase/" + _id}>Buy Now</Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Tool;