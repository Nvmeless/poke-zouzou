import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
//Atoms
import { Button, TextP } from "./components/atoms";
import { Header, Menu } from "./components/organisms";
function App() {
  const [displayContent, setDisplayContent] = useState("Accueil");
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
    case "Accueuil":
      content = <span>Accueuil</span>;
      break;
    case "Home":
      content = <span>Home</span>;
      break;
    default:
      content = <></>;
  }
  const handleMenu = (name) => {
    setDisplayContent(name);
  };
  return (
    <div className="App">
      <>
        {/* <Header username="Jinn"></Header> */}
        {/* <Header username="Jinn" icon={<FcBiomass />}></Header> */}
        {/* <TextP>
          L'application n'est pas encore en production, elle en est meme aux
          fondations soyez indulgent alors !
        </TextP> */}
        <Button
          action={() => handleMenu("Acceuil")}
          buttonTitle="Accueil"
        ></Button>
        <Button action={() => handleMenu("Home")} buttonTitle="Home"></Button>
        <Menu
          menus={
            [
              // { title: "Juli", uri: "lezgo", icon: <CiLemon></CiLemon> },
              // { title: "Lezgi", uri: "lezgo", icon: <CiApple></CiApple> },
              // { title: "Juli", uri: "lezgo", icon: <CiAvocado></CiAvocado> },
              // { title: "Lezgi", uri: "lezgo", icon: <CiBacon></CiBacon> },
            ]
          }
        ></Menu>
        <div>{content}</div>
      </>
    </div>
  );
}

export default App;
