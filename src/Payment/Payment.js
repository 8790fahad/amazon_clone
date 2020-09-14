import { Link } from '@material-ui/core';
import React from 'react';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { UseStateValue } from '../StateProvider/StateProvider';
import CurrencyFormat from 'react-currency-format';
import './Payment.css';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
const Payment = () => {
  const [{ basket, user }, dispatch] = UseStateValue();
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(false);
  const [proccess, setProccess] = React.useState('');
  const [client, setClient] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  //   const stripe = useStripe();
  //   const element = useElements();
  // React.useEffect(()=>{
  // const getClient =async ()=>{
  //     const reponse =
  // }
  // },[basket])
  const handleSubmit = () => {};
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.massage : '');
  };
  return (
    <>
      <div className="payment">
        <div className="payment_container">
          <h1>
            Checkout (<Link to="/checkout">{basket?.length}i  tems</Link>)
          </h1>
          <div className="payment_section">
            <div className="payment_title">
              <p>Payment Address</p>
            </div>
            <div className="payment_address">
              <p>{user?.email}</p>
              <p>8790 Gama</p>
              <p>Nassarawa LGA Kano</p>
            </div>
          </div>
          <div className="payment_section">
            <div className="payment_title">
              <p>Review Item and Delevery</p>
            </div>
            <div className="payment_item">
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
          <div className="payment_section">
            <div className="payment_title">
              <p>Payment method</p>
            </div>
            <div className="payment_details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                {/* <div className="payment_container">
                  <CurrencyFormat
                    decimalScale={2}
                    value={basket}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    renderText={(value) => (
                  
                        <p>
                          Order Total: <strong>{value}</strong>
                        </p>
                     
                    )}
                  />
                </div> */}
                <button disabled={success || disabled || process}>
                  <span>{proccess ? <p>proccessing</p> : 'Buy Now'}</span>
                </button>
                    {error&&<div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
