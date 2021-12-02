import React from "react";
import "./AirpodsHome.css";
import Airpods from "./Airpods";
import BG_IMG from "../../pics/2021_08_02_21_58_IMG_0120.JPG";
// F:\final-ecommerce\src\pics\2021_08_02_21_58_IMG_0120.JPG
// first row images
import product_1 from "../../pics/air_1.png";
import product_2 from "../../pics/air_2.png";
import product_3 from "../../pics/air_3.png";
import product_4 from "../../pics/air_4.png";
// second row images
import product_5 from "../../pics/air_5.png";
import product_6 from "../../pics/air_6.png";
import product_7 from "../../pics/air_7.png";
import product_8 from "../../pics/air_8.png";

// third row images
import product_9 from "../../pics/air_9.png";
import product_10 from "../../pics/air_10.png";
import product_11 from "../../pics/air_11.png";
import product_12 from "../../pics/air_12.png";

// fourth row images
import product_13 from "../../pics/air_13.png";
import product_14 from "../../pics/air_14.png";
import product_15 from "../../pics/air_15.png";
import product_16 from "../../pics/air_16.png";

// fifth row images
import product_17 from "../../pics/air_13.png";
import product_18 from "../../pics/air_14.png";
import product_19 from "../../pics/air_15.png";
import product_20 from "../../pics/air_16.png";

function AirpodsHome() {
  return (
    <div className="airpodsHome">
      <div className="airpodsHome__container">
        <img className="airpodsHome__image" src={BG_IMG} alt="" />
        <h2 className="airpodsHome__explore"> Airpods</h2>

        <div className="airpodsHome__row">
          <Airpods
            title="Splash -- Airpods"
            price={1000}
            image={product_7}
            rating={1}
            category="Airpods"
          />

          <Airpods
            title="Gold White Light -- Airpods"
            price={5800}
            image={product_4}
            rating={4}
            category="Airpods"
          />

          <Airpods
            title="Bali -- Airpods"
            price={1420}
            image={product_11}
            rating={4}
            category="Airpods"
          />

          <Airpods
            title="CHE -- Airpods"
            price={1500}
            image={product_8}
            rating={4}
            category="Airpods"
          />

          <Airpods
            title="Blue -- Airpods"
            price={1370}
            image={product_1}
            rating={4}
            category="Airpods"
          />

          <Airpods
            title="Beast -- Airpods"
            price={1400}
            image={product_9}
            rating={3}
            category="Airpods"
          />

          <Airpods
            title="Purple -- Airpods"
            price={1390.99}
            image={product_2}
            rating={3}
            category="Airpods"
          />

          <Airpods
            title="Gold Black Light -- Airpods"
            price={5600}
            image={product_3}
            rating={2}
            category="Airpods"
          />

          <Airpods
            title="Barbados -- Airpods"
            price={1530.99}
            image={product_14}
            rating={4}
            category="Airpods"
          />

          <Airpods
            title="Tahiti -- Airpods"
            price={1550}
            image={product_12}
            rating={4}
            category="Air Pod"
          />

          <Airpods
            title="Gold White -- Airpods"
            price={108150}
            image={product_6}
            rating={4}
            category="Airpods"
          />

          <Airpods
            title="Skull -- Airpods"
            price={1450}
            image={product_10}
            rating={4}
            category="Airpods"
          />

          {/* <Airpods
            title="Belize -- Airpods"
            price={1520}
            image={product_13}
            rating={2}
            category="Airpods"
          /> */}

          <Airpods
            title="Delicious -- Airpods"
            price={1460}
            image={product_16}
            rating={2}
            category="Airpods"
          />

          <Airpods
            title="Crystal -- Airpods"
            price={1340}
            image={product_15}
            rating={4}
            category="Airpods"
          />

          <Airpods
            title="Wisdom -- Airpods"
            price={1610}
            image={product_17}
            rating={2}
            category="Airpods"
          />

          <Airpods
            title="Passion -- Airpods"
            price={1420}
            image={product_18}
            rating={3}
            category="Airpods"
          />

          {/* <Airpods
            title="Gold Black -- Airpods"
            price={107690}
            image={product_5}
            rating={2}
            category="Airpods"
          /> */}

          {/* <Airpods
            title="Delight"
            price={1430.99}
            image={product_19}
            rating={2}
            category="Airpods"
          /> */}

          {/* <Airpods
            title="Glory"
            price={1602.99}
            image={product_20}
            rating={2}
            category="Airpods"
          /> */}
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default AirpodsHome;
