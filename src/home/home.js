import React from 'react';
import Product from '../Product/Product';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home_container">
          <img
            alt="baner"
            className="home_image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          />
          <div className="home_row">
            <Product id="1" price={1700} title="DualShock 4 " rating={4} image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SX522_.jpg"/>
            <Product id="2" price={100} title="AmazonBasics Small Digital " rating={2} image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230DA9039F21E515._V535729156_.jpg"/>
            <Product id="3" price={560} title="
BEBONCOOL" rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81UWP87LpwL._AC_SL1500_.jpg"/>
            <Product id="4" price={700} title="AMAZON BASIC" rating={3} image="https://images-na.ssl-images-amazon.com/images/I/71xxCdKw7SL._AC_SL1500_.jpg"/>
          </div>
       
          </div>
      </div>
    </>
  );
};
export default Home;
