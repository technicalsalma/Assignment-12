import React, { useEffect, useState } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
 

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)


    useEffect(() => {
      if (user) {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
          method: "GET",
          headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => {
            console.log("res", res);
            return res.json();
          })
          .then((data) => {
            setOrders(data);
            // console.log(data);
          });
      }
    }, [user]);

//    useEffect(() => {
//      if (user) {
//        fetch(`http://localhost:5000/orders?email=${user.email}`, {
//          method: "GET",
//          headers: {
//            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//          },
//        })
//          .then((res) => res.json())
//          .then((data) => setOrders(data));
//      }
//    }, [user]);

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
                    {
                        orders?.map((d, index) => <tr>
                            <th>{index + 1}</th>
                            <th>{d.productName}</th>
                            <td>{d.orderQuantity}</td>
                            <td>{'$' + d.price}</td>
                            <td><button className='btn btn-sm'>pay</button></td>
                            <td><button
                                className='btn btn-sm'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;