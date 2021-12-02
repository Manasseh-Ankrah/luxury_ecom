import React from "react";
import "./AccessoriesHome.css";
import Accessories from "./Accessories";
import BG_IMG from "../../pics/app_bg4.jpeg";
// F:\final-ecommerce\src\pics\2021_08_02_21_58_IMG_0120.JPG
// first row images
import product_1 from "../../pics/charge_1.jpg";
import product_2 from "../../pics/charge_2.jpg";
import product_3 from "../../pics/case_1.jpeg";
import product_4 from "../../pics/charge_3.jpg";
// second row images
import product_5 from "../../pics/charge_4.jpg";
import product_6 from "../../pics/charge_5.jpg";
import product_7 from "../../pics/charge_6.jpg";
import product_8 from "../../pics/charge_7.jpg";

// third row images
import product_9 from "../../pics/adapt_1.jpg";
import product_10 from "../../pics/adapt_2.jpg";
import product_11 from "../../pics/adapt_3.jpeg";
import product_12 from "../../pics/adapt_4.jpg";

function AccessoriesHome() {
  return (
    <div className="accessoriesHome">
      <div className="accessoriesHome__container">
        <img className="accessoriesHome__image" src={BG_IMG} alt="" />
        <h2 className="accessoriesHome__explore"> Accessories</h2>

        <div className="accessoriesHome__row">
          <Accessories
            title="Apple Watch Series 7 Charger"
            price={30}
            image={product_7}
            rating={3}
            category="Accessories"
          />

          <Accessories
            title="Iphone charger"
            price={19}
            image={product_4}
            rating={3}
            category="Accessories"
          />

          <Accessories
            title="Iphone Charger Adapter "
            price={20}
            image={product_11}
            rating={2}
            category="Accessories"
          />

          <Accessories
            title="Apple Watch Series 6 Charger"
            price={29}
            image={product_8}
            rating={4}
            category="Accessories"
          />

          <Accessories
            title="Iphone Cord and Adapter"
            price={40}
            image={product_1}
            rating={3}
            category="Accessories"
          />

          <Accessories
            title="Iphone Adapter (Pack)"
            price={120}
            image={product_9}
            rating={3}
            category="Accessories"
          />

          <Accessories
            title="Iphone Pink Cord "
            price={20}
            image={product_2}
            rating={3}
            category="Accessories"
          />

          <Accessories
            title="Iphone Case"
            price={30}
            image={product_3}
            rating={2}
            category="Accessories"
          />

          <Accessories
            title="Iphone Charger Adapter"
            price={28}
            image={product_12}
            rating={3}
            category="Accessories"
          />

          <Accessories
            title="Apple Watch Charger"
            price={25}
            image={product_6}
            rating={2}
            category="Accessories"
          />

          <Accessories
            title="Apple Type-C Cord"
            price={35}
            image={product_10}
            rating={2}
            category="Accessories"
          />

          <Accessories
            title="Apple Charger(6ft)"
            price={39}
            image={product_5}
            rating={2}
            category="Accessories"
          />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default AccessoriesHome;
