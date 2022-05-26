import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import PurchaseModal from "./PurchaseModal";


const Purchase = () => {
  const { purchaseId } = useParams();
  const [purchase, setPurchase] = useState({});
  const [total, setTotal] = useState(0);

  const orderQuantity = parseInt(total);
  console.log(orderQuantity);
  useEffect(() => {
    const url = `http://localhost:5000/product/${purchaseId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, [purchaseId]);

  const handleQuantity = (e) => {
    e.preventDefault();
    const inputValue = e.target.quantity.value;
    setTotal(inputValue);

 if (parseInt(inputValue) < parseInt(purchase.minimum)) {
   toast.error(`Quantity Must Be equal minimum`);
 } else if (parseInt(inputValue) > parseInt(purchase.available)) {
   toast.error(`You Can't Order More Than Stock`);
 }
  };

  return (
    <div class="">
      <div class="hero-content flex-col lg:flex-row">
        <div>
          <img className="rounded w-4/5" src={purchase.img} alt="" />
        </div>
        <div>
          <h1 class="text-5xl font-bold">{purchase.name}</h1>
          <p class="py-6">{purchase.description}</p>
          <p>
            <small>Price: ${purchase.price}</small>
          </p>
          <p>
            <small>Minimum order Quantity: {purchase.minimum}</small>
          </p>
          <p>
            <small>Available Quantity: {purchase.available}</small>
          </p>
          <p className="mt-5">Add Quantity</p>
          <form onSubmit={handleQuantity}>
            <input className="border" type="number" name="quantity" id="" />
            <input
              type="submit"
              className="btn btn-outline btn-xs"
              value="Add"
              id=""
            />
          </form>
          <br />
          {orderQuantity > purchase.minimum &&
          orderQuantity <= purchase.available ? (
            <label for="purchase-modal" class="btn btn-outline btn-sm">
              PURCHASE
            </label>
          ) : (
            <label disabled for="purchase-modal" class="btn btn-outline btn-sm">
              PURCHASE
            </label>
          )}
        </div>
      </div>
      {purchase && (
        <PurchaseModal
          orderQuantity={orderQuantity}
          details={purchase}
        ></PurchaseModal>
      )}
      <Toaster />
    </div>
  );
};

export default Purchase;
