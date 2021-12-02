import React from "react";
import "./JewelriesHome.css";
import Jewelries from "./Jewelries";
import BG_IMG from "../../pics/jew2.jpeg";
// first row images
import product_1 from "../../pics/jew_1.jpg";
import product_2 from "../../pics/jew_2.jpg";
import product_3 from "../../pics/jew_3.jpg";
import product_4 from "../../pics/jew_4.jpg";
// second row images
import product_5 from "../../pics/2019_11_26_10_09_IMG_0177 (4).PNG";
import product_6 from "../../pics/2021_08_02_21_34_IMG_0050 (2).PNG";
import product_7 from "../../pics/2021_08_02_22_00_IMG_0133.JPG";
import product_8 from "../../pics/2021_08_02_21_36_IMG_0065 (2).PNG";
// third row images
import product_9 from "../../pics/2021_08_02_21_44_IMG_0079 (2).PNG";
import product_10 from "../../pics/2021_08_02_22_01_IMG_0140.JPG";
import product_11 from "../../pics/2021_08_02_21_57_IMG_0115.JPG";
import product_12 from "../../pics/2021_08_02_22_02_IMG_0149 (2).PNG";

function JewelriesHome() {
  return (
    <div className="jewelriesHome">
      <div className="jewelriesHome__container">
        <img className="jewelriesHome__image" src={BG_IMG} alt="" />
        {/* <Category /> */}
        <h2 className="jewelriesHome__explore">Expensive Jewelries</h2>

        <div className="jewelriesHome__row">
          <Jewelries
            id="25"
            title="Rare Diamond with White Gold Ring"
            price={9000}
            image={product_1}
            rating={4}
            category="Jewelries"
          />
          <Jewelries
            id="26"
            title="Silver and Diamond Ring"
            price={10000}
            image={product_2}
            rating={4}
            category="Jewelries"
          />
          <Jewelries
            id="27"
            title="Silver Necklace with Diamonds"
            price={9500.99}
            image={product_3}
            rating={3}
            category=" Jewelries"
          />

          <Jewelries
            id="28"
            title="Circle Pendant 18k White Gold with Diamond"
            price={7000}
            image={product_4}
            rating={2}
            category="Jewelries"
          />

          {/* <Jewelries
            id="29"
            title="Samsung lc352632733 49' Curved LED Gaming Monitor"
            price={19.99}
            image={product_5}
            rating={1}
            category="Iphone 11 Case"
          />

          <Jewelries
            id="30"
            title="Samsung lc352632733 49' Curved LED Gaming Monitor"
            price={19.99}
            image={product_6}
            rating={4}
            category="Iphone 11 Case"
          />
          <Jewelries
            id="31"
            title="Customized Audemars Piguet Royal Oak 41mm"
            price={109856}
            image={product_8}
            rating={4}
            category="Luxury Watch"
          />
          <Jewelries
            id="32"
            title="  Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
            price={598.99}
            image={product_7}
            rating={3}
            category="Iphone 11 Case"
          />

          <Jewelries
            id="33"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image={product_9}
            rating={3}
            category="Luxury Watch"
          />
          <Jewelries
            id="34"
            title="Samsung lc352632733 49' Curved LED Gaming Monitor"
            price={19.99}
            image={product_10}
            rating={1}
            category="Iphone 11 Case"
          />
          <Jewelries
            id="35"
            title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image={product_11}
            rating={4}
            category="Air Pod"
          />
          <Jewelries
            id="36"
            title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image={product_12}
            rating={2}
            category="Iphone 11 Case"
          /> */}
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default JewelriesHome;
