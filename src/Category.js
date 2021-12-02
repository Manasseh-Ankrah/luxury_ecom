import React from "react";
import "./Category.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="category">
      <h2 className="category__text">Categories</h2>
      <div className="category__scroll">
        <div className="category___btn">
          <Link to="/luxury_watches" style={{ textDecoration: "none" }}>
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: "#ecca08",
                padding: "5px 20px",
                marginRight: 10,
                marginTop: 10,
                fontSize: "12px",
                fontWeight: "700",
                fontFamily: "math",
                color: "black",
              }}
            >
              Watches
            </Button>
          </Link>

          <Link to="/airpods" style={{ textDecoration: "none" }}>
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: "#ecca08",
                padding: "5px 20px",
                marginRight: 10,
                marginTop: 10,
                fontSize: "12px",
                fontWeight: "700",
                fontFamily: "math",
                color: "black",
              }}
            >
              Airpods
            </Button>
          </Link>

          <Link to="/jewelries" style={{ textDecoration: "none" }}>
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: "#ecca08",
                padding: "5px 20px",
                marginRight: 10,
                marginTop: 10,
                fontSize: "12px",
                fontWeight: "700",
                fontFamily: "math",
                color: "black",
              }}
            >
              Jewelries
            </Button>
          </Link>

          <Link to="/iphones" style={{ textDecoration: "none" }}>
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: "#ecca08",
                padding: "5px 20px",
                marginRight: 10,
                marginTop: 10,
                fontSize: "12px",
                fontWeight: "700",
                fontFamily: "math",
                color: "black",
              }}
            >
              Iphones
            </Button>
          </Link>

          <Link to="/accessories" style={{ textDecoration: "none" }}>
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: "#ecca08",
                padding: "5px 20px",
                marginRight: 10,
                marginTop: 10,
                fontSize: "12px",
                fontWeight: "700",
                fontFamily: "math",
                color: "black",
              }}
            >
              Accessories
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
