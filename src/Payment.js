import React, { useEffect, useState } from "react";
import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const [{ basket, userPin, userDocId }, dispatch] = useStateValue();

  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // Generates a client secret which allows us to charge a client when checking out.
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  // console.log("THE SECRET IS >>>", clientSecret);

  // console.log(clientSecret);

  const completePayment = () => {
    return [0].id;
  };

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        db.collection("paymentInfo")
          .doc(completePayment())
          .collection("orders")
          .doc(userDocId[0])
          .set({
            user_pin: userPin[0],
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        db.collection("users").doc(userDocId[0]).set(
          {
            logged_in: false,
          },
          { merge: true }
        );

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/payment_feedback");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.error);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h3>
          Checkout (<Link to="/checkout">{basket.length} items </Link>)
        </h3>
        <div className="payment__section1">
          <div className="payment__title">
            <h3 className="payment__text">Delivery Address</h3>
          </div>

          <div className="payment__address">
            <p>Location:</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3 className="payment__text">Review Items</h3>
          </div>

          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3 className="payment__text">Confirm Payment</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3 className="payment__totalamt">Total Price: {value}</h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator
                  prefix={"$"}
                />
                <button
                  className="payment__btn"
                  disabled={processing || disabled || succeeded}
                >
                  <span>
                    {processing ? <p>Processing...</p> : "Confirm Order"}
                  </span>
                </button>
              </div>
              {error && <div>{error}</div>}

              {/* <CheckoutForm /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
