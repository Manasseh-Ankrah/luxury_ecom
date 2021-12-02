import React, { useState } from "react";
import "./PageHeader.css";
// import Amazon from "./pics/amazon_2.webp";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { ArrowBack } from "@material-ui/icons";

function PageHeader() {
  const [{ basket }, dispatch] = useStateValue();

  const [searchInput, setSearchInput] = useState();
  const [searchValue, setSearchValue] = useState([
    { query: "airpod", route: "/airpods" },
    { query: "airpods", route: "/airpods" },

    { query: "iphone", route: "/iphones" },
    { query: "iphones", route: "/iphones" },

    { query: "phone", route: "/iphones" },
    { query: "phones", route: "/iphones" },

    { query: "watch", route: "/luxury_watches" },
    { query: "watches", route: "/luxury_watches" },

    { query: "jewelry", route: "/jewelries" },
    { query: "jewelries", route: "/jewelries" },

    { query: "accessory", route: "/accessories" },
    { query: "accessories", route: "/accessories" },
  ]);

  console.log(searchValue);

  const searchFun = (searchParam) => {
    if (!searchInput) {
      console.log("NO INPUT VALUE");
    } else {
      let filterUser = [...searchParam];

      const willFilter = filterUser.filter((searchQuery) => {
        return searchQuery.query === searchInput.toLowerCase();
      });

      console.log(willFilter);
      // console.log(searchInput);

      let mapSearch = [...willFilter];
      const willMap = mapSearch.map((index) => {
        return index.route;
      });

      // setSearchInput("");
      return willMap[0];

      // return mapSearch;

      // let checkUser = [...willFilter];
      // const alreadyLoggedIn = checkUser.map((logged) => logged.Logged_in);
    }
  };

  return (
    <div className="pageheader">
      <Link to="/home">
        <ArrowBack className="pageheader__exitIcon" />
      </Link>

      <div className="pageheader__search">
        <input
          className="pageheader__searchInput"
          type="text"
          placeholder="Enter Category Name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Link to={searchFun(searchValue)} style={{ textDecoration: "none" }}>
          <SearchIcon
            className="pageheader__searchIcon"
            onClick={() => {
              searchFun(searchValue);
              setSearchInput("");
            }}
          />
        </Link>
      </div>

      <div className="pageheader__nav">
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="pageheader__optionBasket">
            <ShoppingBasketIcon />
            <span className="pageheader__optionLineTwo pageheader__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PageHeader;
