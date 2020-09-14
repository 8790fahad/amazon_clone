import React from 'react';
import  momemt from 'moment'
import CheckoutProduct from '../Checkout/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
const Order = ({order}) => {
  return (
    <div className="order">
        <h2>Order</h2>
        <p>{momemt.unix(order.data.create).format('MMMM Do YYYY,h:mma')}</p>
        <p className="order_id">
  <small>{order.id}</small>
        </p>
        {order.data.basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
               <CurrencyFormat
                    value={order.data.basket.reduce((a, b) => a + b.price, 0)/100}
                    render={(value) => <p>{value}</p>}
                    decimalScale={2}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'Order Total:$'}
                  />
    </div>
  );
};
export default Order;
