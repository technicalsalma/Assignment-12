import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const ManageProducts = () => {
  const { data: product, isLoading } = useQuery("orders", () =>
    fetch("https://drill-machine.onrender.com/product").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  const handleDelete = (id) => {
    const sure = window.confirm("Are You Sure?");
    if (sure) {
      const url = `https://drill-machine.onrender.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th> Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Minimum</th>
          </tr>
        </thead>
        <tbody>
          {product?.map((p, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{p?.name}</td>
              <td>${p?.price}</td>
              <td>{p?.available}</td>
              <td>{p?.minimum}</td>
              <td>
                <button
                  onClick={() => handleDelete(p._id)}
                  className="btn btn-sm"
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
