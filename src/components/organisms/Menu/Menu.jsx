import React, { useEffect, useState } from "react";
import { MenuBar, MenuButton } from "../../atoms";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokezouzou } from "../../../store";
const Menu = ({ menus }) => {
  const pokezouzou = useSelector((state) => {
    console.log(state);
    return state.pokezouzou;
  });
  const [DataIsLoaded, setDataIsLoaded] = useState(pokezouzou.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokezouzou("payload"));
  }, []);
  useEffect(() => {
    console.log("Nouvel ETAT", pokezouzou);
    setDataIsLoaded(pokezouzou.status);
  }, [pokezouzou.status]);

  const makeMenu = () => {
    return menus.map((menu) => {
      return (
        <MenuButton uri={menu.uri}>
          {menu.icon ? menu.icon : menu.title}
        </MenuButton>
      );
    });
  };

  return <MenuBar>{makeMenu(menus)}</MenuBar>;
};

export default Menu;
