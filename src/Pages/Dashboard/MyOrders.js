import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(
        `https://drill-machine.onrender.com/orders?email=${user?.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          // console.log("res", res);
          return res.json();
        })
        .then((data) => {
          setOrders(data);
          // console.log(data);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    const sure = window.confirm("Do you want to delete?");
    if (sure) {
      const url = `https://drill-machine.onrender.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div class="overflow-x-auto m-10">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((d, index) => (
            <tr>
              <th>{index + 1}</th>
              <th>{d.productName}</th>
              <td>{d.orderQuantity}</td>
          
              <td>
                {d.price && !d.paid && (
                  <Link to={`/dashboard/payment/${d._id}`}>
                    <button className="btn btn-xs btn-success">pay</button>
                  </Link>
                )}
                {d.price && d.paid && (
                  <div>
                    <p>
                      <span className="text-success">Paid</span>
                    </p>
                    <p>
                      Transaction id:
                      <span className="text-success">{d.transactionId}</span>
                    </p>
                  </div>
                )}
              </td>
              <td>
                <button
                  onClick={() => handleDelete(d._id)}
                  className="btn btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;


