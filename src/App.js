import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
//Atoms
import { CiAvocado, CiLemon, CiApple, CiBacon } from "react-icons/ci";
import { Header, Menu } from "./components/organisms";
import { Home, Fight, Team, Capture } from "./components/pages";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header username="Jinn"></Header>
        <Menu
          menus={[
            {
              icon: (
                <>
                  <Link to="capture">
                    <CiLemon></CiLemon>CAPUTRE
                  </Link>
                </>
              ),
            },
            {
              icon: (
                <>
                  <Link to="team">
                    <CiApple></CiApple>TEAM
                  </Link>
                </>
              ),
            },
            {
              icon: (
                <>
                  <Link to="home">
                    <CiAvocado></CiAvocado>
                    HOME
                  </Link>
                </>
              ),
            },
            {
              icon: (
                <>
                  <Link to="fight">
                    <CiBacon></CiBacon>
                    FIGHT
                  </Link>
                </>
              ),
            },
          ]}
        ></Menu>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/team" element={<Team></Team>}></Route>
          <Route path="/capture" element={<Capture></Capture>}></Route>
          <Route path="/fight" element={<Fight></Fight>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
