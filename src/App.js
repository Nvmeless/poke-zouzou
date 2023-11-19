import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
//Atoms
import { CiAvocado, CiLemon, CiApple, CiBacon } from "react-icons/ci";
import { Header, Menu, Messages } from "./components/organisms";
import { Home, Fight, Team, Capture, Login, Profile } from "./components/pages";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "nes.css/css/nes.min.css";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ConnectedContainer from "./components/atoms/ConnectedContainer/ConnectedContainer";

const StyledGeneralMenu = styled.div`
  position: absolute;
  bottom: 0;
  padding: 2rem;
  left: 50%;
  width: 50%;
`;
function App() {
  const user = useSelector((state) => {
    return state.user;
  });
  return (
    <Router>
      <div className="App">
        <Menu
          menus={[
            {
              icon: (
                <>
                  {user?.auth ? (
                    <Link to="profile">
                      <CiLemon></CiLemon>Profile
                    </Link>
                  ) : (
                    <Link to="login">
                      <CiLemon></CiLemon>Login
                    </Link>
                  )}
                </>
              ),
            },
          ]}
        ></Menu>
        {/* <span class="nes-text is-primary">Primary</span>   */}
        <i className="nes-pokeball"></i>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/profile"
            element={
              <ConnectedContainer>
                <Profile></Profile>
              </ConnectedContainer>
            }
          ></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/team" element={<Team></Team>}></Route>
          <Route
            path="/capture"
            element={
              <ConnectedContainer>
                <Capture></Capture>
              </ConnectedContainer>
            }
          ></Route>
          <Route
            path="/fight"
            element={
              <ConnectedContainer>
                <Fight></Fight>
              </ConnectedContainer>
            }
          ></Route>
        </Routes>
        <Messages></Messages>
        <StyledGeneralMenu>
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
        </StyledGeneralMenu>
      </div>
    </Router>
  );
}

export default App;
