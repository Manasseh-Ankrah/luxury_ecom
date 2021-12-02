import React from "react";
import "./PhonesHome.css";
import Phones from "./Phones";
import BG_IMG from "../../pics/bg_phone2.jpeg";
// first row images
import product_1 from "../../pics/iphone_1.png";
import product_2 from "../../pics/iphone_2.png";
import product_3 from "../../pics/iphone_3.png";
import product_4 from "../../pics/iphone_4.png";
// second row images
import product_5 from "../../pics/iphone_5.png";
import product_6 from "../../pics/iphone_6.png";
import product_7 from "../../pics/iphone_7.png";
import product_8 from "../../pics/iphone_8.png";
// third row images
import product_9 from "../../pics/iphone_9.png";
import product_10 from "../../pics/iphone_10.png";
import product_11 from "../../pics/iphone_11.png";
import product_12 from "../../pics/iphone_12.png";
// fourth row images
import product_13 from "../../pics/iphone_13.png";
import product_14 from "../../pics/2021_08_02_22_01_IMG_0140.JPG";
import product_15 from "../../pics/iphone_15.png";
import product_16 from "../../pics/iphone_16.png";
// fifth row images
import product_17 from "../../pics/iphone_17.png";
import product_18 from "../../pics/iphone_18.png";
import product_19 from "../../pics/iphone_19.png";
import product_20 from "../../pics/iphone_20.png";
// fifth row images
import product_21 from "../../pics/iphone_21.png";
import product_22 from "../../pics/iphone_22.png";
import product_23 from "../../pics/iphone_23.png";
import product_24 from "../../pics/iphone_24.png";

function CasesHome() {
  return (
    <div className="casesHome">
      <div className="casesHome__container">
        <img className="casesHome__image" src={BG_IMG} alt="" />
        {/* <Category /> */}
        <h2 className="casesHome__explore">Iphones</h2>

        <div className="casesHome__row">
          <Phones
            title="Jobs 4 White --Iphone 12 pro Max"
            price={7060.0}
            image={product_1}
            rating={4}
            category="Iphones"
          />
          <Phones
            title="Musk --Iphone 12 pro Max"
            price={6600.99}
            image={product_2}
            rating={3}
            category="Iphones"
          />
          <Phones
            title="Victory Golden Pins --Iphone 12 pro Max"
            price={6060.99}
            image={product_3}
            rating={3}
            category="Iphones"
          />

          <Phones
            title="Bezos --Iphone 12 pro Max"
            price={5830.0}
            image={product_6}
            rating={2}
            category="Luxury Watch"
          />

          <Phones
            title="Assasin --Iphone 12 pro Max"
            price={5720.99}
            image={product_5}
            rating={1}
            category="Iphones"
          />

          <Phones
            title="Gagarin --Iphone 12 pro Max"
            price={8910.99}
            image={product_4}
            rating={3}
            category="Iphones"
          />
          <Phones
            title="Titanium Mixed Metal --Iphone 12 pro Max"
            price={6420.99}
            image={product_8}
            rating={2}
            category="Iphones"
          />
          <Phones
            title="Iphone 12 pro Golden APPLE --Iphone 12 pro Max"
            price={10290.99}
            image={product_7}
            rating={3}
            category="Iphones"
          />

          <Phones
            title="Tourbillon Carbon Gold --Iphone 12 pro Max"
            price={10290.99}
            image={product_9}
            rating={3}
            category="Iphones"
          />
          <Phones
            title="Carbon Titanium --Iphone 12 pro Max"
            price={6060.99}
            image={product_10}
            rating={1}
            category="Iphones"
          />
          <Phones
            title="Cathedral oF Christ the Savior"
            price={6980.99}
            image={product_11}
            rating={4}
            category="Iphones"
          />
          <Phones
            title="Kaaba --Iphone 12 pro"
            price={6910.99}
            image={product_12}
            rating={2}
            category="Iphones"
          />

          <Phones
            title="Parade of the Planets Golden --Iphone 12 pro "
            price={5980.99}
            image={product_13}
            rating={3}
            category="Iphones"
          />

          <Phones
            title="Golden Beetle "
            price={14290.99}
            image={product_14}
            rating={1}
            category="Iphones"
          />
          <Phones
            title="Total Gold Iphone --Iphone 12 "
            price={42010.99}
            image={product_15}
            rating={3}
            category="Iphones"
          />
          <Phones
            title="Black Alligator --Iphone 12 pro "
            price={6750.99}
            image={product_16}
            rating={3}
            category="Iphones"
          />

          <Phones
            title="Vanilla Coffee --Iphone 12 pro"
            price={6140.99}
            image={product_17}
            rating={3}
            category="Iphones"
          />
          <Phones
            title="Orange --Iphone 12 pro "
            price={7290.99}
            image={product_18}
            rating={1}
            category="Iphones"
          />
          <Phones
            title="Red Tourbillon --Iphone 12 pro "
            price={10290.99}
            image={product_19}
            rating={3}
            category="Iphones"
          />
          <Phones
            title="Blue Tourbillon --Iphone 12 pro"
            price={10610.99}
            image={product_20}
            rating={2}
            category="Iphones"
          />

          <Phones
            title="Green Tourbillon --Iphone 12 pro"
            price={16000}
            image={product_21}
            rating={3}
            category="Iphones"
          />
          <Phones
            title="Gold Phone --Iphone 12 pro "
            price={9200.99}
            image={product_22}
            rating={3}
            category="Iphones"
          />
          <Phones
            title="Gold Titanium --Iphone 12 pro"
            price={6600.99}
            image={product_23}
            rating={4}
            category="Iphones"
          />
          <Phones
            title="Apache --Iphone 12 "
            price={7400.0}
            image={product_24}
            rating={2}
            category="Iphones"
          />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default CasesHome;
