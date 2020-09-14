import React from 'react';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import moment from 'moment'
import './order.css'

const Orders = ({orders}) => {
 

  return (
    <div className="order">
        <h2>Order</h2>
        <p>{moment.unix(orders.data.created).format('MMMM Do YYYY,h:mma')}</p>
  <p className='order_id'>{orders.id}</p>
        {orders.data.basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  hiden
                />
              ))}
               <CurrencyFormat
                    value={orders.data.basket.reduce((a, b) => a + b.price, 0)/100}
                    render={(value) => <p>{value}</p>}
                    decimalScale={2}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'Order Total:$'}
                  />

    </div>
  );
};
export default Orders;
