import React from "react";
import "./WatchesHome.css";
import Watches from "./Watches";
import BG_IMG from "../../pics/watch_bg_2.jpeg";
// first row images
import product_1 from "../../pics/2021_08_02_21_36_IMG_0070.JPG";
import product_2 from "../../pics/2021_08_02_21_36_IMG_0065 (2).PNG";
import product_3 from "../../pics/2021_08_02_21_45_IMG_0088.PNG";
import product_4 from "../../pics/2021_08_02_21_34_IMG_0050 (2).PNG";
// second row images
import product_5 from "../../pics/2021_08_02_21_44_IMG_0079 (2).PNG";
import product_6 from "../../pics/watch_1.png";
import product_7 from "../../pics/watch_2.png";
import product_8 from "../../pics/watch_3.png";

// third row images
import product_9 from "../../pics/watch_4.png";
import product_10 from "../../pics/watch_5.png";
import product_11 from "../../pics/watch_6.png";
import product_12 from "../../pics/watch_7.png";

// fourth row images
import product_13 from "../../pics/watch_8.png";
import product_14 from "../../pics/watch_9.png";
import product_15 from "../../pics/watch_10.png";
// import product_16 from "../../pics/watch_7.png";

function WatchesHome() {
  return (
    <div className="watchesHome">
      <div className="watchesHome__container">
        <div className="image__cont">
          <img className="watchesHome__image" src={BG_IMG} alt="" />
        </div>
        <h2 className="watchesHome__explore"> Watches</h2>

        <div className="watchesHome__row">
          {/* <Watches
            title="............."
            price={10000.0}
            image={product_1}
            rating={4}
            category="Watches"
          /> */}

          <Watches
            title="Discovery Mars"
            price={4390.99}
            image={product_9}
            rating={3}
            category="Watches"
          />

          <Watches
            title="Customized Audemars Piguet Royal Oak 41mm"
            price={10000.99}
            image={product_2}
            rating={2}
            category="Watches"
          />

          <Watches
            title="Black & Gold Tourbillon - Tourbillon Watch"
            price={3990}
            image={product_8}
            rating={4}
            category="Watches"
          />

          <Watches
            title="MAD Paris -- Customizes pre-owned Richard Mille RM67-01 Rainbow 50mm"
            price={700203.0}
            image={product_4}
            rating={2}
            category="Watches"
          />

          <Watches
            title="Customized Audemars Piguet Royal Oak 41mm"
            price={109856}
            image={product_5}
            rating={4}
            category="Watches"
          />
          <Watches
            title="Discovery Meteorite -- Tourbillon Watch"
            price={4550.99}
            image={product_6}
            rating={1}
            category="Watches"
          />

          <Watches
            title="Titanium -- Apple Watch 6"
            price={4000.0}
            image={product_7}
            rating={4}
            category="Watches"
          />

          <Watches
            title="............."
            price={8900.0}
            image={product_3}
            rating={3}
            category=" Watches"
          />

          <Watches
            title="Red Apple Watch 6"
            price={3300.0}
            image={product_10}
            rating={4}
            category="Watches"
          />
          <Watches
            title="Gold Edition Tourbillon"
            price={3980.0}
            image={product_13}
            rating={4}
            category="Watches"
          />

          <Watches
            title="Green Apple Watch 6"
            price={3500.0}
            image={product_11}
            rating={4}
            category="Air Pod"
          />

          <Watches
            title="Steel Skeleton"
            price={4480.0}
            image={product_14}
            rating={4}
            category="Watches"
          />

          {/* <Watches
              title="Total Black"
              price={3100.0}
              image={product_12}
              rating={2}
              category="Watches"
            /> */}
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default WatchesHome;
