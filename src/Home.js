import React from "react";
import "./Home.css";
import Product from "./Product";
import BG_IMG from "./pics/2021_08_02_22_01_IMG_0142.JPG";
// I:\E-Commerce-Projects\Amazon_Project\ecommerce-pro\src\pics\2021_08_02_22_01_IMG_0142.JPG
// import BG_IMG from "./pics/2021_08_02_21_55_IMG_0096.JPG";
// first row images
import product_1 from "./pics/watch_4.png";
import product_2 from "./pics/2021_08_02_21_57_IMG_0114.JPG";
import product_3 from "./pics/watch_3.png";
import product_4 from "./pics/air_8.png";
// second row images
import product_5 from "./pics/jew_3.jpg";
import product_6 from "./pics/2021_08_02_21_34_IMG_0050 (2).PNG";
import product_7 from "./pics/jew_4.jpg";
import product_8 from "./pics/2021_08_02_21_36_IMG_0065 (2).PNG";
// third row images
import product_9 from "./pics/air_7.png";
import product_10 from "./pics/2021_08_02_22_01_IMG_0140.JPG";
import product_11 from "./pics/air_6.png";
import product_12 from "./pics/air_11.png";
import product_13 from "./pics/iphone_22.png";
import product_14 from "./pics/jew_2.jpg";
import product_15 from "./pics/iphone_8.png";
import product_16 from "./pics/iphone_12.png";

import Category from "./Category";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={BG_IMG} alt="" />

        <Category />

        <h2 className="home__explore">More To Explore</h2>

        <div className="home__row">
          <Product
            id="9"
            title="Splash -- Airpods"
            price={1000}
            image={product_9}
            rating={3}
            category="Airpods"
          />

          <Product
            title="Discovery Mars"
            price={4390.99}
            image={product_1}
            rating={3}
            category="Watches"
          />

          <Product
            id="5"
            title="Silver Necklace with Diamonds"
            price={9500.99}
            image={product_5}
            rating={1}
            category="Jewelries"
          />
          <Product
            id="16"
            title="Kaaba --Iphone 12 pro"
            price={6930}
            image={product_16}
            rating={2}
            category="Iphones"
          />

          <Product
            id="2"
            title="Black Alligator Leather & Gold"
            price={9800}
            image={product_2}
            rating={4}
            category="Airpods"
          />

          <Product
            id="7"
            title="Customized Audemars Piguet Royal Oak 41mm"
            price={109856}
            image={product_8}
            rating={4}
            category="Watches"
          />

          <Product
            id="8"
            title="Circle Pendant 18k White Gold with Diamond"
            price={7000}
            image={product_7}
            rating={3}
            category="Jewelries"
          />

          <Product
            id="10"
            title="Golden Beetle"
            price={5980}
            image={product_10}
            rating={3}
            category="Iphones"
          />

          <Product
            id="12"
            title="Bali -- Airpods "
            price={9200.99}
            image={product_12}
            rating={2}
            category="Airpods"
          />

          <Product
            id="3"
            title="Black & Gold Tourbillon - Tourbillon Watch"
            price={3990}
            image={product_3}
            rating={3}
            category=" Watches"
          />

          <Product
            id="4"
            title="MAD Paris -- Customizes pre-owned Richard Mille RM67-01 Rainbow 50mm"
            price={700203}
            image={product_6}
            rating={2}
            category="Watches"
          />
          <Product
            id="11"
            title="Gold White -- Airpods"
            price={108150}
            image={product_11}
            rating={4}
            category="Airpods"
          />
          <Product
            id="6"
            title="CHE -- Airpods "
            price={1500}
            image={product_4}
            rating={4}
            category="Airpods"
          />

          <Product
            id="13"
            title="Gold Phone --Iphone 12 pro"
            price={98.99}
            image={product_13}
            rating={2}
            category="Iphone"
          />

          <Product
            id="14"
            title="Silver and Diamond Ring"
            price={9500.99}
            image={product_14}
            rating={2}
            category="Jewelries"
          />

          <Product
            id="15"
            title="Titanium Mixed Metal --Iphone 12 pro Max"
            price={6420.99}
            image={product_15}
            rating={2}
            category="Iphones"
          />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Home;
