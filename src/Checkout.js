import React from "react";
import "./Checkout.css";
import Banner from "./pics/checkout-banner.jpg";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";


function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__top">
        <img className="checkout__ad" height="" src={Banner} alt="" />
        <Subtotal />
      </div>

      <div className="checkout__down">
        <h2 className="checkout__title">
          {basket.length === 0
            ? "Your Basket is Empty"
            : "Your Shopping Basket"}
        </h2>
        <h5 className="checkout__product">
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              category={item.category}
            />
          ))}
        </h5>
      </div>
    </div>
  );
}

export default Checkout;
