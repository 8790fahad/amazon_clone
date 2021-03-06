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
import axios from './axios';
import { useHistory } from 'react-router-dom';
import { db } from '../Firebase/Firebase';
const Payment = () => {
  const history=useHistory()
  const [{ basket, user }, dispatch] = UseStateValue();
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(false);
  const [proccess, setProccess] = React.useState('');
  const [client, setClient] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
    const stripe = useStripe();
    const element = useElements();
  React.useEffect(()=>{
  const getClient =async ()=>{ 
      const reponse =await axios({
        method:"POST",
      url:`/payment/create?total=${basket.reduce((a, b)=> a + b.price, 0)*100}`
      })
      setClient(reponse.data.clientSecret);
      console.log(reponse)
  }
  getClient()
  },[basket])
  console.log('hhdhshhdkk',client)
  const handleSubmit = async(e) => {
    e.preventDefault()
    setProccess(true)
    const payload=await stripe.confirmCardPayment(client, {
      payment_method: {
        card: element.getElement(CardElement),
      },
    })
    .then((paymentIntent) => {
      db.collection('user')
      .doc(user?.uid)
      .collection('order')
      .set({
        basket:basket,
        amount:paymentIntent.amount,
        created:paymentIntent.created
      })


      setSuccess(true);
      console.log(paymentIntent)
      setError(null);
      setProccess(false);
      history.replace('/orders');
    });
console.log(payload)
  };
  const handleChange = (e) => {
    console.log(e)
    setDisabled(e.empty);
    setError(e.error ? e.error.massage : '');
  };
  return (
    <>
      <div className="payment">
        <div className="payment_container">
          <h1>
            Checkout (<Link to="/checkout">{basket?.length}Items</Link>)
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
             <form  onSubmit={handleSubmit}>
               <CardElement  onChange={handleChange}/> 
                
                <div className="payment_container">
                  <CurrencyFormat 
                  value={basket.reduce((a, b)=> a + b.price, 0)}
                  render={(value)=>(
                  <p>{value}</p>
                  )}
                  decimalScale={2}
                  
                  displayType={'text'}
        thousandSeparator={true}
        prefix={'Order Total:$'}
                  />
                  <br ></br>
                  <button className='button' onClick={handleSubmit} disabled={disabled||proccess ||success}><span>{proccess?<p>proccessing</p>:"Buy Now"}</span></button>

                </div>
                {error && <div>{error}</div>}
                </form>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
