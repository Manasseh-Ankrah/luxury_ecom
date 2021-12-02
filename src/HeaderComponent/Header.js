import React, { useState } from "react";
import "./Header.css";
import Logo from "../pics/logo/Jordan_2.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
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

      return willMap[0];

      // return mapSearch;

      // let checkUser = [...willFilter];
      // const alreadyLoggedIn = checkUser.map((logged) => logged.Logged_in);
    }
  };

  console.log(searchInput);

  return (
    <div className="header">
      <Link to="/home">
        <img className="header__logo" src={Logo} />
      </Link>

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Enter Category Name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Link to={searchFun(searchValue)} style={{ textDecoration: "none" }}>
          <SearchIcon
            className="header__searchIcon"
            onClick={() => searchFun(searchValue)}
          />
        </Link>
      </div>

      <div className="header__nav">
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
