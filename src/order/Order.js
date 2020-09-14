import React, { useState, useEffect } from 'react';

import CheckoutProduct from '../Checkout/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { db } from '../Firebase/Firebase';
import { UseStateValue } from '../StateProvider/StateProvider';
import Orders from './orders';
const Order = () => {
  const [{ basket, user }, dispatch] = UseStateValue();
  const [order,setOrder]=useState([])
  useEffect(()=>{
    if(user){
db.collection('user')
.doc(user?.uid)
.collection('order')
.orderBy('created','description')
.onSnapshot((snapshot)=>(
  setOrder(snapshot.docs.map((doc)=>({
    id:doc.id,
    data:doc.data()
  })))
))
  }else{
    setOrder([])
  }},[])
  return (
    <div className="order">
        <h2>Your Order</h2>
        <div className="order_oders">
          {order?.map((item)=>(
            <Orders orders={item}/>
          ))}
        </div>
    </div>
  );
};
export default Order;
