import React from "react";
import "./App.css";
import Header from "./HeaderComponent/Header";
import PageHeader from "./HeaderComponent/PageHeader";
import PaymentHeader from "./HeaderComponent/PaymentHeader";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login_Page/Login";
import Footer from "./Footer";
import WatchesHome from "./CategoryComponents/Watches_Dir/WatchesHome";
import AirpodsHome from "./CategoryComponents/Airpods_Dir/AirpodsHome";
import JewelriesHome from "./CategoryComponents/Jewelries_Dir/JewelriesHome";
import Payment from "./Payment";
import Message from "./Message";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PhonesHome from "./CategoryComponents/Cases_Dir/PhonesHome";
import AccessoriesHome from "./CategoryComponents/Accessories_Dir/AccessoriesHome";

const promise = loadStripe(
  "pk_test_51JLF5qGF6xlhil0XkfUBanbEj0WOZsUPIgj8gXkWeS01SUzTRrxylMR2j3DRj4zYl4nFvMhZv9ozb2GfjQvhvggO00wAoXC44r"
);

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/luxury_watches">
            <PageHeader />
            <WatchesHome />
          </Route>

          <Route path="/airpods">
            <PageHeader />
            <AirpodsHome />
          </Route>

          <Route path="/jewelries">
            <PageHeader />
            <JewelriesHome />
          </Route>

          <Route path="/iphones">
            <PageHeader />
            <PhonesHome />
          </Route>

          <Route path="/accessories">
            <PageHeader />
            <AccessoriesHome />
          </Route>

          <Route path="/payment">
            <PaymentHeader />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/home">
            <Header />
            <Home />
            {/* <Footer /> */}
          </Route>

          <Route path="/checkout">
            <PageHeader />
            <Checkout />
            {/* <Footer /> */}
          </Route>

          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/payment_feedback">
            <Message />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
