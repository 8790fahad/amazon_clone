import React from 'react';
import '../css/header.css';
import { UseStateValue } from '../StateProvider/StateProvider';
const Product = ({ id,rating, image, title, price }) => {
    const [state,setState]=UseStateValue()
    const fahad=true
    const addToCart=()=>{
setState({type:"ADD_TO_BASKET",item:{
    id:id,
    rating:rating,
    image:image,
    title:title,
    price:price
}})
    }
  return (
    <div className="product">
      <div className="poduct_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_, i) => (
            <span role="img" aria-label="start">
              ⭐
            </span>
          ))}
        </div>
        <img src={image} alt="" className="product_image" />
        <button className="product_button" onClick={addToCart}>Add to Basket</button>
        {fahad?null:state}
      </div>
    </div>
  );
};
export default Product;
