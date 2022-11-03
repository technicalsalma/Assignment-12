import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { UserCircleIcon } from '@heroicons/react/solid'
import divider from '../../images/profile/Ozar_O2-1.png'

const Reviews = () => {
  const { data, isLoading } = useQuery("reviews", () =>
    fetch("https://limitless-cove-72486.herokuapp.com/reviews").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-10 ">
      <div className="text-center stat-value">Client Reviews</div>
      <div className="flex  justify-center">
        <img src={divider} alt="" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-32">
        {data?.map((d) => (
          <div class="card-body">
            <div class="card border p-5 bg-base-100">
              <p>{d.review}</p>
              <small className="mt-3">rating: {d.rating}</small>
              <small className='mt-5'><UserCircleIcon className="h-5 w-5 inline text-gray-500" />{d.name}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
