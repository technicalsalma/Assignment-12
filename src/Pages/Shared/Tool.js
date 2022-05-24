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
          <h2 class="font-bold">Name: {name}</h2>
          <p className="text-secondary">Price: ${price}</p>
          <p className="text-secondary">Minimum order Quantity: {minimum}</p>
          <p className="text-secondary">Available Quantity: {available}</p>
          <p>{description}</p>
          <div class="card-actions justify-end">
            <button className="btn btn-secondary transition ease-in-out delay-150 bg-secondary-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
              <Link to={"/purchase/" + _id}>Buy Now</Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Tool;