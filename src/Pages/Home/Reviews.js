import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';



const Reviews = () => {

    const { data, isLoading } = useQuery('reviews', () => fetch('http://localhost:5000/reviews').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
      <div className="my-10 ">
        <div className="text-center text-2xl">Client Reviews</div>
        <div className="flex  justify-center">
          {/* <img src={divider} alt="" /> */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 px-32 bg-secondary">
          {data?.map((d) => (
            <div class="card-body">
              <div class="card border p-5 bg-base-100">
                <p>{d.review}</p>
                <small className="mt-3">rating: {d.rating}</small>
                <small className="mt-5">{d.name}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Reviews;