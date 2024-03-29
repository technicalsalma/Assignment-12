import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { UserCircleIcon } from '@heroicons/react/solid'
import divider from '../../images/profile/Ozar_O2-1.png'

const Reviews = () => {
  const { data, isLoading } = useQuery("reviews", () =>
    fetch("https://drill-machine.onrender.com/reviews").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-10 mx-10">
      <div className="text-center stat-value text-secondary">Client Reviews</div>
      <div className="flex  justify-center">
        <img src={divider} alt="" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {data?.map((d) => (
          <div class="card-body shadow-lg m-6">
            <div class="card border p-5 bg-gray-100">
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
