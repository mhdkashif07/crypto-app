import React from "react";
import "./App.css";
import { Switch, Link, Route } from "react-router-dom";
import { Layout, Typography, Space } from 'antd';
import { Navbar, HomePage, Exchanges, Cryptocurrencies, CryptoDetails, News } from "./components";

import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"


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
       
        <Typography.Title  level={5} style={{color: 'white', textAlign: 'center'}}>
                    <Space>
                        <Link to="/">Home</Link>
                        {/* <Link to="/exchanges">Exchanges</Link> */}
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                        <Link to="/news">News</Link>
                    </Space><br/>
                    <p>Cryptoverse @Developed By <a href="https://github.com/dex-coder" target="_blank">Dex Coder</a></p>
                    <Space>
                    <a className="icon__style" href="https://github.com/dex-coder" target="__blank"><BsGithub size={23}  /></a>
                    <a className="icon__style" href="https://www.linkedin.com/in/muhammadkashif07" target="__blank" ><BsLinkedin size={23}  /></a>
                    </Space><br/>
                </Typography.Title>
      </div>
      </div>
    </div>
  );
}

export default App;
