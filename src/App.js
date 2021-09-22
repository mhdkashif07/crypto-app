import React from "react";
import "./App.css";
import { Switch, Link, Route } from "react-router-dom";
import { Navbar, HomePage, Exchanges, Cryptocurrencies, CryptoDetails, News } from "./components";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/exchanges">
              <Exchanges />
            </Route>
            <Route path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route path="/news">
              <News />
            </Route>
          </Switch>
        </div>

        <div className="footer">
          <h2>footer section</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
