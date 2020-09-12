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
            <Product id="1" price={10} title="ACCESORIES SUPPLY" rating={4} image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230DD6D6594D9C14._V535729156_.jpg"/>
            <Product id="2" price={100} title="CAMERA $ PHOTO" rating={2} image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230DA9039F21E515._V535729156_.jpg"/>
            <Product id="3" price={560} title="COMPUTER ACCESORIES" rating={5} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"/>
            <Product id="4" price={700} title="AMAZON BASIC" rating={3} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"/>
          </div>
          <div className="home_row">
            <Product id="1" price={10} title="ACCESORIES SUPPLY" rating={4} image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230DD6D6594D9C14._V535729156_.jpg"/>
            <Product id="2" price={100} title="CAMERA $ PHOTO" rating={2} image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230DA9039F21E515._V535729156_.jpg"/>
            <Product id="3" price={560} title="COMPUTER ACCESORIES" rating={5} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"/>
            <Product id="4" price={700} title="AMAZON BASIC" rating={3} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"/>
          </div>
          </div>
      </div>
    </>
  );
};
export default Home;
