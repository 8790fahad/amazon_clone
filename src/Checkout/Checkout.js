import React from 'react';
import '../css/header.css';
import SubTotal from './SubTotal';
import CheckoutProduct from './CheckoutProduct';
import { UseStateValue } from '../StateProvider/StateProvider';
// import FlipMove from 'react-flip-move';

function Checkout() {
  const [{ basket, user }] = UseStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_add"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Mobile/Engagement/GIFS2018/SpinAndWin/Winners/winner_LP_2.jpg"
          alt="add"
        />
        <div className="checkout_title">
          <p>
            Hello,<em>{user?.email}</em>
          </p>
          <p>
            <em>
              <strong>Your Basket Shopping</strong>
            </em>
          </p>
          {/* <FlipMove> */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          {/* </FlipMove> */}
        </div>
      </div>
      <div className="checkout_rigt">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
