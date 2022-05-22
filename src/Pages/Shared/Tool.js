import React from 'react';

const Tool = ({ tool }) => {
    const { name, img, description, price, minimum, available } = tool;
    return (
      <div class="card w-86 bg-base-100 shadow-xl">
        <figure>
          <img className="w-1/2" src={img} alt="Shoes"/>
        </figure>
        <div class="p-5">
          <h2 class="">Name: {name}</h2>
          <p>{description}</p>
          <p className='text-danger'>
            Price: ${price}
          </p>
          <p>
            <small>Minimum order Quantity: {minimum}</small>
          </p>
          <p>
            <small>Available Quantity: {available}</small>
          </p>
          <div class="card-actions justify-start">
            <button class="btn btn-info">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Tool;