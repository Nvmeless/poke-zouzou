import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
//Atoms
import { FaUser } from "react-icons/fa";
import { CiAvocado, CiLemon, CiApple, CiBacon } from "react-icons/ci";
import { Button, TextP, Card } from "./components/atoms";
import { Header, Menu } from "./components/organisms";
import Clock from "./components/atoms/Clock";
import PokeZouzou from "./components/organisms/PokeZouzou/PokeZouzou";
import Todo from "./components/molecules/Todo/Todo";
function App() {
  const [displayContent, setDisplayContent] = useState("Accueil");
  const [inputValue, setInputValue] = useState();
  const onInputChange = (event, value) => {
    if (value != inputValue) {
      setInputValue(value);
    }
  };
  // const callbackMenu = () => {
  //   console.log("Menu clicked");
  // };
  // const menu = [
  //   {
  //     label: "Home",
  //     action: callbackMenu,
  //   },
  //   {
  //     label: "Blog",
  //     action: callbackMenu,
  //   },
  // ];
  let content = <></>;
  switch (displayContent) {
    case "Time":
      content = (
        <span>
          <Clock></Clock>
        </span>
      );
      break;
    case "Home":
      content = (
        <span>
          <FaUser />
        </span>
      );
      break;
    default:
      content = <></>;
  }
  const handleMenu = (name) => {
    setDisplayContent(name);
  };
  new Array(151).fill(0).map((e, i) => {
    //
  });

  return (
    <div className="App">
      <>
        <Header username="Jinn"></Header>
        {/* <Header username="Jinn" icon={<FcBiomass />}></Header> */}
        {/* <TextP>
          L'application n'est pas encore en production, elle en est meme aux
          fondations soyez indulgent alors !
        </TextP> */}
        {/* <Button action={() => handleMenu("Time")} buttonTitle="Time"></Button> */}
        {/* <Button action={() => handleMenu("Home")} buttonTitle="Home"></Button> */}
        <Menu
          menus={[
            { title: "Juli", uri: "lezgo", icon: <CiLemon></CiLemon> },
            { title: "Lezgi", uri: "lezgo", icon: <CiApple></CiApple> },
            { title: "Juli", uri: "lezgo", icon: <CiAvocado></CiAvocado> },
            { title: "Lezgi", uri: "lezgo", icon: <CiBacon></CiBacon> },
          ]}
        ></Menu>
        {/*<Card>Hello</Card> */}
        {/* <PokezouzouApi id={132} /> */}
        {/* <PokeZouzou id={132}></PokeZouzou> */}
        {/* <PokeZouzou id={4}></PokeZouzou> */}
        {new Array(150).fill(0).map((e, i) => (
          <PokeZouzou
            key={i}
            id={i + 1}
            id_twice={inputValue ?? i + 1}
          ></PokeZouzou>
        ))}
        <input
          onChange={(e) => {
            onInputChange(e, e.target.value);
          }}
        />
        {/* <PokeZouzou id={151} id_twice={150}></PokeZouzou> */}
        <div>{content}</div>
        <Todo></Todo>
      </>
    </div>
  );
}

export default App;
